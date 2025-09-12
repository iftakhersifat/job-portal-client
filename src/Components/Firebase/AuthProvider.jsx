import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    // update user
    const UpdateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData).then(() => {
      // force refresh local state
      setUser({...auth.currentUser});
    });
  };
    const authInfo ={
        loading,
        setLoading,

        user,
        setUser,

        createUser,
        loginUser,
        logOut,
        loginWithGoogle,
        UpdateUser,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;