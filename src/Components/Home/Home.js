import React from 'react';
import About from '../About/About';
import './Home.css'
import Services from './Services/Services';
const Home = () => {
    
    return (
        <div className='home-container'>
           <About/>
           <Services/>
        </div>
    );
};

export default Home;