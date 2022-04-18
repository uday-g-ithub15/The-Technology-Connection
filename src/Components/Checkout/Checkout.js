import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const {courseId} = useParams();
    const [services, setServices] = useState([]);
    useEffect(   () => {
        fetch('/data.json').then(res => res.json()).then(data => setServices(data));
        }
    ,[courseId])
    const singleService = services.find(service => service._id === courseId);
    console.log(singleService);
    return (
        <div className='checkout'>
            <img src={singleService?.picture} alt="" />
            <h3>Course title : {singleService?.name}</h3>
            <h3>Description : {singleService?.description}</h3>
            <h3>Price : {singleService?.price}</h3>
            <button className='btn' onClick={() => toast('Your booking is successful.Thanks')}>Book</button> <br />
            <Link to={'/'} >Back to home</Link>
            <ToastContainer/>
        </div>
    );
};

export default Checkout;