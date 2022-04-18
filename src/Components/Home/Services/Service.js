import React from 'react';
import './Services.css'
import '../../SharedClass/Btn.css'
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    const {picture, price, name, description,_id} = service ;
    return (
        <div className='service-container'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
                <h4>Service Name : {name}</h4>
                <h4>Price : {price}</h4>
                <p>{description}</p>
            </div>
                {/* <button style={{display:'block'}} className='btn'>BOOK NOW</button> */}
                <button style={{display:'block'}} className='btn' onClick={() =>navigate('/services/'+_id) }>BOOK NOW</button>
        </div>
    );
};

export default Service;