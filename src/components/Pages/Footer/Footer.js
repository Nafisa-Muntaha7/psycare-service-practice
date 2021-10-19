import React from 'react';

const Footer = () => {
    return (
        <div className="bg-success text-white p-5">
            <div className="d-flex col">
                <div className="col-4">
                    <h2>PsyCare</h2>
                    <h5> <i className="fas fa-brain"></i> Take care of your mental heath</h5>
                    <p>Being a full-time psychologist, I make my patients feel special so they can discuss their problems openly. My goal is to help people fighting their fears and life issues.</p>
                </div>

                <div className="col-4">
                    <h2>Contact Details</h2>
                    <p> <i className="fas fa-globe"></i> !290, Montreal, Quebec, M2346. Canada</p>
                    <p> <i className="fas fa-envelope"></i> Mail: psycare07@yahoo.com</p>
                    <p> <i className="fas fa-clock"></i> Mon-Fri(9am-9pm)</p>
                </div>

                <div className="col-4">
                    <h2>My Programs</h2>
                    <ul>
                        <li>Grief and loss counceling</li>
                        <li>Self-Esteem Therapy</li>
                        <li>Kids and Family</li>
                        <li>Life and Friendship</li>
                        <li>Old Age Therapy</li>
                    </ul>
                </div>
            </div>
            <footer className="bg-dark p-2 rounded-3">&copy;  PsyCare 2021. All rights reserved.</footer>
        </div>
    );
};

export default Footer;