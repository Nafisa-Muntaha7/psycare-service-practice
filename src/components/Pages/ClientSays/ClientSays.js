import React from 'react';
import client from '../../../images/client.png'

const ClientSays = () => {
    return (
        <div className="d-flex align-items-center m-5">
            <div>
                <img src={client} alt="" />
            </div>
            <div className="">
                <h2><i class="fas fa-quote-left"></i>PsyCare is a life changer, having magical skills for helping people with psychotherapy.<i class="fas fa-quote-right"></i></h2>
                <h5>Emma Josh -August 2021</h5>
            </div>
        </div>
    );
};

export default ClientSays;