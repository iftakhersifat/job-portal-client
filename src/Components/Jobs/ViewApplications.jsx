import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const {id}=useParams();
    const load = useLoaderData();

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
        <div className='container mx-auto'>
            <h1>{id} : {load.length}</h1>
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
              {/* <div className="text-sm opacity-50">{lists.title}</div> */}
            </div>
          </div>
        </td>
        <td>
          {post.resume}
        </td>
        <td><select
  value={post.status || "Updated Status"}
  onChange={(e) => handleStatus(e, post._id)}
>
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