import Lottie from 'lottie-react';
import React, { use } from 'react';

import registerLottie from '../../assets/lotties/Register.json'
import { AuthContext } from '../Firebase/AuthProvider';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';

const Register = () => {

    // for create user
    const {createUser} =use(AuthContext)

    const handelRegister = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        // create user
        createUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })

    }


    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   {/* lottie */}
   <Lottie style={{width:"400px"}} animationData={registerLottie} loop={true}></Lottie>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        
        <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>

          <SocialLogin></SocialLogin>

          <Link to="/login">Do you have an account? <span className="text-red-500 underline">Login</span></Link>
        </fieldset>
        </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default Register;