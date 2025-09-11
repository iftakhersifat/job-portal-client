import React from 'react';
import Banner from './Banner.jsx';
import Steps from './steps.jsx';
import Recent from './Recent.jsx';
import Testimonial from './Testimonial.jsx';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='bg-gradient-to-r from-purple-50 to-white'>
            <Steps></Steps>
            <Recent></Recent>
            <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;