import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut =()=> {
    return signOut(auth)
  }

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name
     

    })
    .then(() => {
      toast.success('user name updated')
      console.log("user name updated")

    })
    .catch(error => {
      toast.error(error.message)
      console.log(error.message)
    })

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    setUser,
    updateUserData
  };
  return (
    
    <AuthContext.Provider value={authInfo}>{children}
    <Toaster/>
    </AuthContext.Provider>
  );
};

export default AuthProviders;
