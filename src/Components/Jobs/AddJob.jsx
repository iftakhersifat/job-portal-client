import React from 'react';

const AddJob = () => {
    const handleJobAdd=e=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data)

    }
    return (
        <div className='container mx-auto py-12 px-6 md:px-0'>

            {/* form for add a job */}
            <form onSubmit={handleJobAdd} className='max-w-2xl mx-auto'>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                <legend className="fieldset-legend">Basic Info</legend>
              
                <label className="label">Job Title</label>
                <input type="text" name='title' placeholder="Job title" className="input input-bordered w-full" required />
              
                <label className="label">Company Name</label>
                <input type="text" className="input input-bordered w-full" name='company' placeholder="Company Name" />
              
                <label className="label">Location</label>
                <input type="text" className="input input-bordered w-full" name='location' placeholder="Company Location" />
              
                <label className="label">Company Logo</label>
                <input type="url" className="input input-bordered w-full" name='logo' placeholder="Company URL" />
            </fieldset>

            {/* job-type */}
            <fieldset className="fieldset max-w-2xl mx-auto bg-base-200 border-base-300 rounded-box  border p-4">
                <legend className="fieldset-legend">Job Type</legend>
            <div className="filter">
                <input className="btn filter-reset" type="radio" name="job-type" aria-label="All"/>
                <input className="btn" type="radio" name="job-type" aria-label="On-Site"/>
                <input className="btn" type="radio" name="job-type" aria-label="Remote"/>
                <input className="btn" type="radio" name="job-type" aria-label="Hybrid"/>
            </div>
            </fieldset>

            {/* job-categories */}
            <fieldset className="fieldset max-w-2xl mx-auto bg-base-200 border-base-300 rounded-box  border p-4">
                <legend className="fieldset-legend">Job Categories</legend>
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Select a Job Category</option>
              <option>Software Engineer</option>
              <option>Marketing Specialist</option>
              <option>Finance Manager</option>
              <option>Project Manager</option>
            </select>
            </fieldset>

            {/* application-deadline */}
            <fieldset className="fieldset max-w-2xl mx-auto bg-base-200 border-base-300 rounded-box  border p-4">
                <legend className="fieldset-legend">Application Deadline</legend>
                <input type="date" name='deadline' className="input" />
            </fieldset>

            {/* job salary range */}
            <fieldset className="fieldset max-w-2xl mx-auto bg-base-200 border-base-300 rounded-box  border p-4">
                <legend className="fieldset-legend">Application Deadline</legend>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

             {/* Minimum Salary */}
             <div>
               <label className="label font-medium">Minimum Salary</label>
               <input type="text" name='min' placeholder="Enter minimum salary" className="input input-bordered w-full" required />
             </div>
         
             {/* Maximum Salary */}
             <div>
               <label className="label font-medium">Maximum Salary</label>
               <input   type="text"   name='max'   placeholder="Enter maximum salary"   className="input input-bordered w-full" />
             </div>
         
             {/* Currency Selection */}
             <div>
               <label className="label font-medium">Currency</label>
               <select   defaultValue=""   className="select select-bordered w-full"   name="currency"  required>
                 <option disabled value="">Select a Currency</option>
                 <option>BDT</option>
                 <option>USD</option>
                 <option>EU</option>
               </select>
             </div>
           </div>
            </fieldset>

            {/* Description */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <legend className="fieldset-legend">Job Description</legend>
              <textarea className="textarea w-full" name='description' placeholder="Job Description"></textarea>
            </fieldset>

            {/* requirements: */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Job Requirements:</legend>
            <textarea className="textarea w-full" name='requirements' placeholder="requirements (separate by comma)"></textarea>
            </fieldset>
        
            {/* responsibilities */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Responsibilities</legend>
            <textarea className="textarea w-full" name='responsibilities' placeholder="responsibilities (separate by comma)"></textarea>
            </fieldset>

            {/* hr name & email */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <legend className="fieldset-legend">HR Info</legend>
            
              <label className="label">HR Name</label>
              <input type="text" name='hr_name' placeholder="HR Name..." className="input input-bordered w-full" required />
            
              <label className="label">HR Email</label>
              <input type="text" className="input input-bordered w-full" name='hr_email' placeholder="HR Email..." />
            </fieldset>

            {/* job add button */}
            {/* button */}
            <button type="submit" className="btn mt-4 rounded-xl w-full bg-blue-500 text-white hover:bg-blue-600 px-6">Add Job </button>

            </form>
        </div>
    );
};

export default AddJob;