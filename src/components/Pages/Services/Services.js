import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../../services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="services p-5 bg-success bg-opacity-10">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;