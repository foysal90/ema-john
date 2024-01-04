import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const { user,createUser, setUser, updateUserData,googleSignIn,sendEmailVerificationLink } = useContext(AuthContext);
 const navigate = useNavigate();


 const handleGoogleSignIn = ()=> {
  googleSignIn()
  .then(result => {
    const loggedUser = result.user;
    setUser(loggedUser)
    toast.success("User has been created")
  })
  .catch(error => {
    toast.error(error.message)
  })
 }
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);
    setError("");
    if (password !== confirm) {
      setError("Your password did not match");

      toast.error("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (password.length > 16) {
      setError("Password can not be more than 16 characters long");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("please add at least one uppercase");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("please add at least onr lower case in your password");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("please add at least one Digit in your password");
      return;
    } else if (!/(?=.*[@#$%^&*])/.test(password)) {
      setError("please add at least one @#$%^&* Character  in your password");
      return;
    }
    else if (password ==='password' || password ==='Password@123' ) {
      setError("Your password can not be password")
      return;
      
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setUser(newUser);
        toast.success("User has been Created successfully");
        navigate('/shop')
        form.reset();

        updateUserData(result.user, name);
        sendEmailVerificationLink(result.user)
     
      })
      .catch((error) => {
        toast.error(error.message);
      });

      
      
  };




  const signAccount = "Already Have an account?";
  return (
    <div>
      <Toaster />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className="text-center font-bold">Want to save Time ?</h2>

            <button className="bg-yellow-400" onClick={handleGoogleSignIn}>Continue with Google</button>
            <p className="flex justify-center items-center gap-1 "><hr className="w-28 text-cyan-500" /><span className="leading-none">or</span><hr className="w-28" /></p>
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
               
               <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex relative ">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="******"
                  className="input input-bordered w-96"
                  required
                />
                <p className="absolute top-2 right-2 text-black" onClick={()=> setShow(!show) }>
                 {
                 show ? <span>Hide</span>
                 :
                 <span>Show</span>
                 }
                </p>
               </div>
              </div>
              <div className="form-control">
                <label htmlFor="confirm" className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="flex relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirm"
                  placeholder="*******"
                  className="input input-bordered w-96"
                  required
                />
                <p className="absolute top-2 right-2" onClick={()=> setShowConfirm(!showConfirm)}>
                  {
                   showConfirm ? <span>Hide</span>
                   :
                   <span>Show</span>
                  }
                </p>
                </div>
                
              </div>
              <p className="text-error">{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-success">Register</button>
              </div>
            </form>
            <p className="text-center">{signAccount}</p>
            <hr />
            <Link to="/signin" className="text-center">
              <button className="btn btn-link text-blue-500">Sign In</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
