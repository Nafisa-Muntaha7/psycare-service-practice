import React from 'react';
import team from '../../../images/team.jpg'
import ceo from '../../../images/ceo.png'
import AllCounselors from '../AllCounselors/AllCounselors';

const About = () => {
    return (
        <div>
            <img className="w-100" src={team} alt="" />
            <h3 className="text-start text-success m-5">About PSyCare</h3>
            <div className="m-5 row align-items-center">
                <div className="col">
                    <img src={ceo} alt="" />
                    <h3>Bronwyn Rojas</h3>
                    <h5>Founder and CEO</h5>
                </div>
                <div className="m-5 col">
                    <h1>We Provide Solutions For You</h1>
                    <h2>Why consult with us?</h2>
                    <h5><i class="fas fa-check-circle"></i> Instant access to our practitioners availability</h5>
                    <h5><i class="fas fa-check-circle"></i> Free initial phone consultation with Therapist</h5>
                    <h5><i class="fas fa-check-circle"></i> Same day and evening appointments available</h5>
                </div>
            </div>
            <h2>Our Counselors</h2>
            <AllCounselors />
        </div>
    );
};

export default About;