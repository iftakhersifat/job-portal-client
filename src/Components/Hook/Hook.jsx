import React, { use } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const Hook = () => {
    const useAuth =use(AuthContext)
    return useAuth;
};

export default Hook;