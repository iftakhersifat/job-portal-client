import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './FB';

export const AuthContext = createContext();

// for google auth
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[loading, setLoading]=useState(true);
    const [user, setUser]= useState(null);

    // for google auth
    const loginWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // new user create
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
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
        loginWithGoogle,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;