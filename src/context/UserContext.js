import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const authInfo = {user, createUser, logIn, logOut, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;