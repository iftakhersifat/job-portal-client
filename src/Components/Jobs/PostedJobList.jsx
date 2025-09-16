import React, { use } from 'react';
import { Link } from 'react-router';

const PostedJobList = ({postedJobs}) => {
    const postedJob= use(postedJobs)
    console.log(postedJob)
    return (
        <div className='container mx-auto px-6 md:px-0 py-12'>
            <h1>All Posted Jobs List {postedJob.length}</h1>
            {/* table form */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          List
        </th>
        <th>Company</th>
        <th>Job Category & Location</th>
        <th>Deadline</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        postedJob.map((post, index)=>
            <tr key={post._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{post.company}</div>

            </div>
          </div>
        </td>
        <td>
          {post.title}
          <br />
          <span className="badge badge-ghost badge-sm">{post.location}</span>
        </td>
        <td>{post.deadline}</td>
        <th>
          <Link to={`/applications/${post._id}`}><button className="btn bg-blue-400 text-white rounded-box px-4 py-3 hover:bg-blue-600 btn-xs">View Application</button></Link>
        </th>
      </tr>
        
        )
       }
      
      
      
    </tbody>

  </table>
</div>
        </div>
    );
};

export default PostedJobList;