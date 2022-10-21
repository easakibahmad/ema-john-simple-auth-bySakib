import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {


    const {user, logOut}=useContext(AuthContext)
    const navigate = useNavigate()



    const handleLogOut = () =>{
        logOut()
        .then(() => {
            navigate('/login')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                { 
                    user?.uid    ? <Link onClick={handleLogOut}>Log Out</Link>
                    :
                    <>
                        <Link to='/signup'>Sign up</Link>
                        <Link to='/login'>Log in</Link>
                    </>
                }
                
            </div>
        </nav>
    );
};

export default Header;