import React from 'react';
import counseling from '../../../images/counseling.jpg'

const Programs = () => {
    return (
        <div>
            <img className="w-100" src={counseling} alt="" />
            <div className="m-5 d-flex align-items-center">
                <div className="border-end border-3 border-success">
                    <h1>Magical and Inspirational lessons for people facing mental stress.</h1>
                </div>
                <div className="m-3">
                    <h4><i class="fas fa-quote-left"></i>No one experiences perfect mental health or well-being all of the time. We all have to learn how to balance the different aspects of our lives. When things in our life change, we have to re-establish the balance.<i class="fas fa-quote-right"></i> </h4>
                    <p>Need a business program? <a href="#.">Get In Touch</a> with me.</p>
                </div>
            </div>
        </div>
    );
};

export default Programs;