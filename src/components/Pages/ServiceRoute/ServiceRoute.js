import React from 'react';

const ServiceRoute = (props) => {
    const { name, img, description, price, day, timing } = props.service;
    return (
        <div className="serviceRoute p-3 m-3 bg-success bg-opacity-25 rounded-3">
            <img src={img} alt="" />
            <h2 className="my-3">{name}</h2>
            <p>{description}</p>
            <h4>Price:{price}</h4>
            <h5>Day: {day} and Timing: {timing}</h5>
        </div>
    );
};

export default ServiceRoute;