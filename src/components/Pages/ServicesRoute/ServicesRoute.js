import React, { useEffect, useState } from 'react';
import ServiceRoute from '../ServiceRoute/ServiceRoute';
import './ServicesRoute.css'

const ServicesRoute = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../../services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="servicesRoute p-5 bg-success bg-opacity-10">
            {
                services.map(service => <ServiceRoute key={service.id} service={service}></ServiceRoute>)
            }
        </div>

    );
};


export default ServicesRoute;