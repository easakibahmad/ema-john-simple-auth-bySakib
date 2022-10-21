import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Login = () => {

    const {logIn} = useContext(AuthContext)

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate()

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)


        logIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.error(error)
        })


    }
    return (
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                        <p className="text-3xl text-primary font-bold">Log In</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            </div>
                            <p><small>New to ema john? <Link to='/signup' className='text-primary'>sign up now</Link></small></p>
                        </form>
                        </div>
                    </div>
                </div>
    );
};

export default Login;