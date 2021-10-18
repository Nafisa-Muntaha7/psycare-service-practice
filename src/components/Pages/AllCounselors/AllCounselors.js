import React, { useEffect, useState } from 'react';
import Counselors from '../Counselors/Counselors';
import './AllCounselors.css'

const AllCounselors = () => {
    const [counselors, setCounselors] = useState([]);
    useEffect(() => {
        fetch('../../../counselorsImg.json')
            .then(res => res.json())
            .then(data => setCounselors(data));
    }, [])
    return (
        <div className=" all-counselors p-5 bg-success bg-opacity-10">
            {
                counselors.map(counselor => <Counselors key={counselor.id} counselor={counselor}></Counselors>)
            }
        </div>
    );
};

export default AllCounselors;