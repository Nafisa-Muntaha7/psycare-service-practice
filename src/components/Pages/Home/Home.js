import React from 'react';
import Banner from '../Banner/Banner';
import ClientSays from '../ClientSays/ClientSays';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Pricing />
            <ClientSays />
        </div>
    );
};

export default Home;