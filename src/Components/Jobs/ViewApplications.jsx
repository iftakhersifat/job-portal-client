import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const {id}=useParams();
    const load = useLoaderData();
    // console.log(id);

    // status change
    const handleStatus =(e, applicationID)=>{
        console.log(e.target.value, applicationID)
       axios.patch(`http://localhost:3000/applications/${applicationID}`, { status: e.target.value })
    .then(res => {
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: "Status Updated!",
          timer: 1500,
          showConfirmButton: false
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
    }
    return (
        <div className='container mx-auto py-12'>
            <h1 className='text-center text-2xl font-bold mb-4'>Total Application List : <span className='text-blue-500'>{load.length}</span></h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>List</th>
        <th>Email</th>
        <th>Resume & Others Link</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        load.map((post, index)=>
            <tr key={post._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{post.applicant}</div>
            </div>
          </div>
        </td>
        <td> {post.resume}
        </td>
        <td>
        <select  value={post.status}  onChange={(e) => handleStatus(e, post._id)}>
          <option disabled value="">Updated Status</option>
          <option>Under Review</option>
          <option>Call For Interview</option>
          <option>Hired</option>
          <option>Rejected</option>
        </select>

        </td>
        
      </tr>
        
        )
       }
      
      
      
    </tbody>

  </table>
</div>
        </div>
    );
};

export default ViewApplications;