import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, short } = props.service;
    return (
        <div className="p-3 m-3 bg-success bg-opacity-25 rounded-3">
            <img src={img} alt="" />
            <h2 className="my-3">{name}</h2>
            <p>{short}</p>
            <Link to="/services"><button className="btn btn-dark">Details</button></Link>
        </div>
    );
};
export default Service;