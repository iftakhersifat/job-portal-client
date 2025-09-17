import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplicationList = ({ list }) => {
  const [card, setCard] = useState([]);

  // set initial state from list promise
  useEffect(() => {
    list.then(data => setCard(data));
  }, [list]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/applications/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Application has been deleted.', 'success');
              setCard(prev => prev.filter(user => user._id !== id));
            }
          })
          .catch(err => console.log(err));
      }
    });
  };

  return (
    <div className='container mx-auto px-6 md:px-0 py-12'>
      <h1>All Application List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Job</th>
              <th>Job-Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {card.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.company}</td>
                <td>{user.category} <br />
                  <span className="badge badge-ghost badge-sm">{user.location}</span>
                </td>
                <td>{user.jobType}</td>
                <td>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
