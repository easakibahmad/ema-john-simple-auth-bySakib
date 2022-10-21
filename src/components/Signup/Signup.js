import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Signup = () => {

    const [error, setError] = useState()

    const {createUser} = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)

        if(password.length < 6){
            setError('password should be at least 6 characters')
            return
        }

        if(password !== confirm){
            setError('password did not match!!')
            return
        }

        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <p className="text-3xl text-primary font-bold">Sign Up</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  name='password' type="password" placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input name='confirm' type="password" placeholder="confirm password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Signup</button>
                        </div>
                        <p><small>{error}</small></p>
                        <p><small>Already have an account? <Link to='/login' className='text-primary'>log in now</Link></small></p>
                    </form>
                    </div>
                </div>
            </div>
    );
};

export default Signup;