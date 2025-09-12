import React from 'react';
import Banner from './Banner.jsx';
import Steps from './steps.jsx';
import Recent from './Recent.jsx';
import Testimonial from './Testimonial.jsx';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>

            <Steps></Steps>
            <Recent></Recent>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;