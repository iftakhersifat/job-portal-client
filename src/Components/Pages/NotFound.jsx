import React from 'react';
import Navbar from './Navbar';
import Lottie from 'lottie-react';
import Error from "../../assets/lotties/404 Error.json"
const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center'>
                <Lottie style={{width: "400px"}} animationData={Error} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default NotFound;