import React from 'react';
import { useNavigate, useParams } from 'react-router';
import Hook from '../Hook/Hook';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} =useParams();
    const {user}=Hook();
    console.log(id, user);

    // navigate 
    const navigate = useNavigate();

    // handel form
    const handleApplyForm= e =>{
        e.preventDefault();

        const linkedIn = e.target.linkedin.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;
        console.log(linkedIn, github, resume);

        // job info related application
        const application = {
      id,
      applicant: user.email,
      linkedIn,
      github,
      resume,
     
    };

    axios.post("http://localhost:3000/applications", application)
    .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
            icon: "success",
            title: "Your Application has been Submitted",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate("/my-applications");
          });
        }
    }).catch(err=>{
        console.log(err)
    })


    }
    return (
        <div className='container mx-auto py-12'>
            <div className='px-6 md:px-0'>
              {/* Title */}
              <h1 className="text-2xl md:text-2xl  font-bold text-gray-800 dark:text-gray-100 text-center mb-4">
                Apply for Your <span className='text-blue-600'>Dream</span> Job
              </h1>
        
              {/* Description */}
              <p className="text-center mx-auto text-gray-600 dark:text-gray-300 max-w-lg mb-8">
                Provide your LinkedIn, GitHub, and Resume links to apply for exciting job opportunities.
                Get noticed by top recruiters and take the first step toward your dream career!
              </p>
            </div>
            
            {/* form create for apply job */}
            <form 
  onSubmit={handleApplyForm} 
  className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0"
>
  <fieldset className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md">
    <legend className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Provide Your Details</legend>

    {/* LinkedIn */}
    <div className="mb-4">
      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        LinkedIn Profile
      </label>
      <input
        type="url"
        id="linkedin"
        name="linkedin"
        placeholder="Your LinkedIn profile link"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-100"
      />
    </div>

    {/* GitHub */}
    <div className="mb-4">
      <label htmlFor="github" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        GitHub Profile
      </label>
      <input
        type="url"
        id="github"
        name="github"
        placeholder="Your GitHub profile link"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-100"
      />
    </div>

    {/* Resume */}
    <div className="mb-6">
      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        Resume Link
      </label>
      <input
        type="url"
        id="resume"
        name="resume"
        placeholder="Your Resume link"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-100"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
    >
      Apply Now
    </button>
  </fieldset>
</form>

        </div>
    );
};

export default JobApply;