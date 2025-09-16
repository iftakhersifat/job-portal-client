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
      status
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
            <h1 className='text-center mb-4'>Apply Job</h1>
            
            {/* form create for apply job */}
            <form onSubmit={handleApplyForm} className='flex flex-col justify-center items-center'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="text-lg font-semibold mb-4">Provide Your Details</legend>

  <label className="label">LinkedIn Profile</label>
  <input type="url" name='linkedin' className="input" placeholder="provide your LinkedIn profile link" />

  <label className="label">GitHub Profile</label>
  <input type="url" name='github' className="input" placeholder="provide your Github profile link" />

  <label className="label">Resume Link</label>
  <input type="url" name='resume' className="input" placeholder="provide your Resume link" />

  <div className="text-right">
            <button type="submit" className="btn w-full rounded-xl bg-blue-500 text-white hover:bg-blue-600 px-6">Apply Now</button>
          </div>
</fieldset>
            </form>
        </div>
    );
};

export default JobApply;