import React, { createContext, useEffect,  useState } from "react";
import app from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,

 

 

 

  sendPasswordResetEmail,

 

 

 

  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleAuth = new GoogleAuthProvider()
const githubAuth = new GithubAuthProvider()

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  
  //creating user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
 

  //log out 
  const logOut =()=> {
    setLoading(true)
    return signOut(auth)
    
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth)
  }

  const githubSignIn = ()=> {
    return signInWithPopup(auth, githubAuth)
  }

  const sendEmailVerificationLink = (user)=> {
    setLoading(true)
     sendEmailVerification(user)
    .then(result => {
      console.log(result)
      toast.success("an email verification link sent to your email, Please verify")
    })
    .catch(error => {
      toast.error(error.message)
    })
  }

  const resetBtn = (email) => {
    // const form = e.target;
    // const email = form.email.value;
    
   
    if (!email) {
      alert("please type ur registered email associate with ur account");
      console.log(email);
      return;
    }
   
    sendPasswordResetEmail(auth,email)
      .then((result) => {
        console.log(result);
        toast.success("reset email sent");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  
 

  //updating user
  const updateUserData = (user, name) => {
    setLoading(true)
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
    googleSignIn,
    githubSignIn,
    sendEmailVerificationLink,
    resetBtn
  
    
  };
  return (
    
    <AuthContext.Provider value={authInfo}>{children}
    <Toaster/>
    </AuthContext.Provider>
  );
};

export default AuthProviders;
