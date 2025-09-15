import React, { Suspense } from 'react';
import Hook from '../Hook/Hook';
import PostedJobList from './PostedJobList';

const postedJobs=email=>{
    return fetch(`http://localhost:3000/jobs?email=${email}`)
     .then(res => res.json());
}
const MyPostedJobs = () => {
    const {user} =Hook();
    return (
        <div>
            <Suspense fallback={<span>Loading Posted Jobs List...</span>}>
                <PostedJobList postedJobs={postedJobs(user.email)}></PostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;