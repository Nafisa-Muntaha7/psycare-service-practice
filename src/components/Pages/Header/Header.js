import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
        </div>
    );
};

export default Header;