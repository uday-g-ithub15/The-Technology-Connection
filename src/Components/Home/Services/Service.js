import React from 'react';
import './Services.css'

const Service = ({service}) => {
    const {picture, price, name, description} = service ;
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
                <button style={{display:'block'}}>BOOK NOW</button>
        </div>
    );
};

export default Service;