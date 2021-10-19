import React from 'react';
import counseling from '../../../images/counseling.jpg'
import process from '../../../images/the-process.jpg'

const Programs = () => {
    return (
        <div>
            <img className="w-100" src={counseling} alt="" />
            <div className="m-5 d-flex align-items-center">
                <div className="border-end border-3 mt-4 border-success">
                    <h1>Magical and Inspirational lessons for people facing mental stress.</h1>
                </div>
                <div className="m-3 border-bottom border-success ">
                    <h4><i class="fas fa-quote-left"></i>No one experiences perfect mental health or well-being all of the time. We all have to learn how to balance the different aspects of our lives. When things in our life change, we have to re-establish the balance.<i class="fas fa-quote-right"></i> </h4>
                    <p>Need a business program? <a href="#.">Get In Touch</a> with me.</p>
                </div>
            </div>
            <div className="row align-items-center m-5">
                <div className="col-6">
                    <img className="w-100 rounded-3" src={process} alt="" />
                </div>
                <div className="col-6">
                    <h4 className="text-success mb-5 border-bottom border-success">THE PROCESS</h4>
                    <h1>An amazing tagline for your process...</h1>
                    <h5 className="m-4">Supportive psychotherapy helps patients deal with issues related to their mental health conditions which in turn affect the rest of their lives. It helps build self-esteem, reduce anxiety, strengthen coping mechanisms, and improve social and community functioning.</h5>

                    <h4><i className="fas fa-smile"></i> TALK TO ME FIRST</h4>
                    <h4><i className="fas fa-check-circle m-3"></i>BOOK YOUR SESSION</h4>
                    <h4><i className="fas fa-handshake"></i> COME SIT WITH ME</h4>

                </div>
            </div>
        </div>
    );
};

export default Programs;