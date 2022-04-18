// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../CustomHook/useServices';

const Checkout = () => {
    const {courseId} = useParams();
    const [services] = useServices();
    console.log(services,courseId);
    return (
        <div>
            <h1>This is checkout section : {courseId} {services?.length}</h1>
            <Link to={'/'} >Back to home</Link>
        </div>
    );
};

export default Checkout;