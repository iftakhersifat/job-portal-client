import React from 'react';
import Banner from './Banner.jsx';
import Steps from './steps.jsx';
import Recent from './Recent.jsx';
import Testimonial from './Testimonial.jsx';
import HotJobs from '../Jobs/HotJobs.jsx';

// fetch jobs api
const jobsPromise =fetch('http://localhost:3000/jobs').then(res=>res.json())
const Home = () => {
    
    return (
        <div className=''>
            <Banner></Banner>

            <Steps></Steps>
            <Recent></Recent>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
            <Testimonial></Testimonial>

            

        </div>
    );
};

export default Home;