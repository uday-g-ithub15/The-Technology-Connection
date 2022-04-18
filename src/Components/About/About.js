import React from 'react';

const About = () => {
    const about = {
        width:'80%',
        height:'100vh',
        margin:'auto',
        marginTop:'10px',
        marginBottom:'100px',
        backgroundColor:'aliceblue',
        padding:'12px',

    }
    return (
        <div style={about}>
            <h2>Name : Uday Hasan</h2>
            <p>
                Currently my goal is complete this course.For this reason i almost leave my all indoor and outdoor work.Hope I'll complete this course properly.
            </p>
        </div>
    );
};

export default About;