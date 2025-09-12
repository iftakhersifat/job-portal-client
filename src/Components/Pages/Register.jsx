import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import registerLottie from '../../assets/lotties/Register.json';
import { AuthContext } from '../Firebase/AuthProvider';
import { Link, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Register = () => {
  const navigate = useNavigate();
  const { createUser, UpdateUser } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false); 

  const handelRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log(name, email, password, photo);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log("New user created:", user);

        UpdateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("Profile updated!");
            navigate("/");
          })
          .catch(err => console.error("Profile update failed:", err));
      })
      .catch(error => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* lottie */}
        <Lottie
          style={{ width: "400px" }}
          animationData={registerLottie}
          loop={true}
        />

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelRegister}>
              <fieldset className="fieldset">
                {/* name input */}
                <label className="label">Name</label>
                <input type="text" name="name" className="input w-full" placeholder="Your Name"/>


                {/* email input */}
                <label className="label">Email</label>
                <input type="email" name="email" className="input w-full" placeholder="Email"/>

                {/* photo url input */}
                <label className="label">Photo URL</label>
                <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered w-full"/>

                {/* password url input */}
                <label className="label">Password</label>
                <div className="relative">
                  <input  
                    type={showPassword ? "text" : "password"}  
                    name="password"  
                    className="input w-full pr-10"  
                    placeholder="Password"
                  />
                  {/* 👁 toggle button */}
                  <button   type="button"  onClick={() => setShowPassword(!showPassword)}  className="absolute top-4 right-3 flex items-center text-gray-600">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4 bg-blue-500 hover:bg-blue-700 border-0">Register</button>

                <SocialLogin />
                <Link to="/login">
                  Do you have an account?{" "}
                  <span className="text-red-500 underline">Login</span>
                </Link>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
