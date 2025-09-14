import React, { Suspense } from 'react';
import ApplicationList from './ApplicationList';
import Hook from '../Hook/Hook';

const list =email=>{
     return fetch(`http://localhost:3000/applications?email=${email}`)
     .then(res => res.json());
}
const MyApplications = () => {
    const {user}=Hook()
    return (
        <div className="flex justify-center items-center">
  <Suspense fallback={<span>Loading your application list...</span>}>
    <ApplicationList list={list(user.email)} />
  </Suspense>
</div>

    );
};

export default MyApplications;