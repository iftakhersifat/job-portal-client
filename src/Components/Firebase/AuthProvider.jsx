import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './FB';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[loading, setLoading]=useState(true);
    const [user, setUser]= useState(null);

    // new user create
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    // after user create now login 
    const loginUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // for user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    // log out
    const logOut =()=>{
        return signOut(auth);
    }
    const authInfo ={
        loading,
        setLoading,

        user,
        setUser,

        createUser,
        loginUser,
        logOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;