import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData()
    console.log(job)
    return (
        <div className='container mx-auto mt-10 mb-20 p-4 md:p-0'>
            <div className="border border-blue-300 bg-blue-100 hover:border-blue-500 hover:border-2 p-4 rounded-xl h-[500px] flex flex-col justify-between"
                      >
                        {/* Company Info */}
                        <div className="flex justify-between items-center">
                          <div className='flex gap-4 items-center'>
                            <img src={job.company_logo} className="w-16 h-16 object-contain" alt="Company Logo" />
                          <div>
                            <h2 className="font-semibold">{job.jobType}</h2>
                            <p className="text-sm text-gray-600">{job.location}</p>
                          </div>
                          </div>
                          <div>
                            <button className='btn bg-[#613FE5] text-white px-4 py-2 rounded-xl'>{job.jobType}</button>
                          </div>
                        </div>
            
                        {/* Job Details */}
                        <div className="space-y-3 flex-1">
                          <h2 className="font-bold text-xl">{job.title}</h2>
                          <p className="text-sm font-medium">Salary: {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}</p>
                          <p className="text-gray-700 text-sm">{job.description}</p>
            
                          <div className="flex flex-wrap gap-2 mt-3">
                            {job.requirements.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 border border-blue-300 bg-gray-100 text-xs rounded-full hover:text-blue-500 transition duration-150"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2 mt-3"> 
                            <h1 className='text-xl font-bold'>Responsibilities:</h1>
                            {job.responsibilities.map((responsibility, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 border border-blue-300 bg-gray-100 text-xs rounded-full hover:text-blue-500 transition duration-150">
                                {responsibility}
                              </span>
                            ))}
                          </div>

                          <div className='space-y-3'>
                            <p>Email: <span className='text-blue-500'>{job.hr_email}</span></p>
                            <p>HR Name: <span className='text-blue-500'>{job.hr_name}</span></p>
                          </div>
                        </div>
            
                        {/* Apply Button */}
                        <div className="text-right">
                          <Link to={`/apply/${job._id}`}><button className="btn bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
                            Apply Now
                          </button></Link>
                        </div>
                      </div>
                   
        </div>
    );
};

export default JobDetails;