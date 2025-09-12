import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../../assets/lotties/Register.json';
import { AuthContext } from '../Firebase/AuthProvider';
import { Link, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';

const Register = () => {
  const navigate = useNavigate();
  const { createUser, UpdateUser } = useContext(AuthContext); // ✅ useContext, not use()

  const handelRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;   // ✅ get name
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log(name, email, password, photo);

    // create user
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log("New user created:", user);

        // update profile with name & photo
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
                <input type="text" name="name" className="input" placeholder="Your Name"/>

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email"/>

                <label className="label">Photo URL</label>
                <input  type="text"  name="photo"  placeholder="Enter your photo URL"  className="input input-bordered w-full"/>

                <label className="label">Password</label>
                <input  type="password"  name="password"  className="input"  placeholder="Password"/>

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
