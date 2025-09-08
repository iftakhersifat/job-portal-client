import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from './FB';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[loading, setLoading]=useState(true);

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }
    const authInfo ={
        loading,
        setLoading,

        createUser,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;