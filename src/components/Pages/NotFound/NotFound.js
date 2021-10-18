import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../images/error.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={error} alt="" />
            <h3>The page you're looking for is not found.</h3>
            <Link to="/home"> <button className="btn btn-dark mb-5">Go Home</button></Link>
        </div>
    );
};

export default NotFound;