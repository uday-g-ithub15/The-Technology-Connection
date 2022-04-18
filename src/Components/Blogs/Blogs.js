import React from 'react';
import './Blogs.css'
const About = () => {
    return (
        <div className='about-container'>
            <article>
                <h3>Difference between authorization and authentication ? </h3>
                <p>
                Authorization is process of verifying not only user but also more specific actions of user.
                    As a simple example Authorization related to admin and user means a system where have some private content, a normal user can't access there.
                </p>
                <p>Authentication is a user verifying process.That means this process trying to verify the given data of user.</p>
            </article>
            <article>
                <h3>Why are you using firebase? What other options do you have to implement authentication? </h3>
                <p>
                    I use firebase because of it's advantage.Then the firebase is a google backend application that give us access to develop games, app development, web development etc.Then firebase firebase managaes all data real-time in database and for this we can database easily and quickly.
                </p>
                <p>The other options i've to implement are : </p>
                <ol>
                    <li>Cards</li>
                    <li>Retina Scans</li>
                    <li>Finger prints</li>
                </ol>
            </article>
            <article>
                <h3>What other services does firebase provide other than authentication ?</h3>
                <p><ol>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                </ol></p>
            </article>
        </div>
    );
};

export default About;