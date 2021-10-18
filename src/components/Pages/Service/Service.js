import React from 'react';

const Service = (props) => {
    const { name, img } = props.service;
    return (
        <div className="p-3 m-3 bg-success bg-opacity-25 rounded-3">
            <img src={img} alt="" />
            <h2 className="my-3">{name}</h2>
            <button className="btn btn-dark">Details</button>
        </div>
    );
};
export default Service;