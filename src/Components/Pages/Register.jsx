import Lottie from 'lottie-react';
import React from 'react';

import registerLottie from '../../assets/lotties/Register.json'

const Register = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   {/* lottie */}
   <Lottie style={{width:"400px"}} animationData={registerLottie} loop={true}></Lottie>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;