import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  //creating user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
 

  //log out 
  const logOut =()=> {
    return signOut(auth)
    
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth)
  }
 

  //updating user
  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name
     

    })
    .then(() => {
    
      console.log("user name updated")

    })
    .catch(error => {
      toast.error(error.message)
      console.log(error.message)
    })

  }
// observer user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    setUser,
    updateUserData,
    googleSignIn
  };
  return (
    
    <AuthContext.Provider value={authInfo}>{children}
    <Toaster/>
    </AuthContext.Provider>
  );
};

export default AuthProviders;
