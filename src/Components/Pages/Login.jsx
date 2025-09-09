import React, { use } from 'react';

import loginLottie from '../../assets/lotties/Login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Link } from 'react-router';

const Login = () => {

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
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

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