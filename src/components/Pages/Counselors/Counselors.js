import React from 'react';

const Counselors = (props) => {
    const { name, img } = props.counselor;
    return (
        <div className="m-3">
            <img src={img} alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default Counselors;