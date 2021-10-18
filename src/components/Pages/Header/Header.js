import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    const activeStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '15px',
        fontWeight: 'bold'
    }
    return (
        <div className="bg-success p-4">
            <NavLink style={activeStyle} to="/home">Home</NavLink>
            <NavLink style={activeStyle} to="/services">Services</NavLink>
            <NavLink style={activeStyle} to="/programs">Programs</NavLink>
            <NavLink style={activeStyle} to="/pages">Pages</NavLink>
            <NavLink style={activeStyle} to="/login">Login</NavLink>
            <span>{user.displayName}</span>
            {user.email && <button className="btn btn-dark m-2" onClick={logout}>Log out</button>}
        </div>
    );
};

export default Header;