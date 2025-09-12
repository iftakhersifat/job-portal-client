import React, { use, useState } from 'react';

import loginLottie from '../../assets/lotties/Login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Link, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

  // password show & off
  const [showPassword, setShowPassword]= useState(false);

  // navigate
  const navigate = useNavigate();

    const {loginUser}=use(AuthContext);

    const handelLogin=e=>{
        e.preventDefault();

        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email, password);

        // login user
        loginUser(email, password)
        .then(result=>{
            console.log(result.user);
            navigate('/')
        }) .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   {/* lottie */}
   <Lottie style={{width:"400px"}} animationData={loginLottie} loop={true}></Lottie>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        
        <form onSubmit={handelLogin}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input w-full" placeholder="Email" />

          <label className="label">Password</label>
          <div>
            <input type={showPassword ? "text" : "password"} name='password' className="input w-full" placeholder="Password" />
            <button onClick={()=>setShowPassword(!showPassword)} className='absolute mt-4 -ml-6'>
              {
                showPassword ? <FaEyeSlash /> : <FaEye />
              }
            </button>
          </div>


          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 bg-blue-500 hover:bg-blue-700 border-0">Login</button>

          <SocialLogin></SocialLogin>

          <Link to="/register" className='mt-3'>Don't have an account? <span className='text-red-500 underline'>Register</span></Link>
        </fieldset>
        </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default Login;