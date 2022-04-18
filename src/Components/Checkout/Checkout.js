import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Checkout = () => {
    const {courseId} = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setServices(data));
    },[])
    return (
        <div>
            <h1>This is checkout section : {courseId} {services?.length}</h1>
            <Link to={'/'} >Back to home</Link>
        </div>
    );
};

export default Checkout;