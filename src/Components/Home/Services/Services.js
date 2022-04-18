// import React, { useEffect, useState } from 'react';
import useServices from '../../../CustomHook/useServices';
import Service from './Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
    return (
        <div id='services' className='services-container'>
            {
                services.map(service =><Service key={service._id} service = {service} />)
            }
        </div>
    );
};

export default Services;