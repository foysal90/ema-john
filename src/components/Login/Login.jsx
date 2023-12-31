import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const { logIn, setUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("user logged in ");
        setUser(loggedUser);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        console.log(newUser);
        toast.success("Successfully logged In");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const registerAccount = `Don't Have an Account?`;

  return (
    <div>
      <Toaster />
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
            <p className="py-6">
              <h3>Welcome Back</h3>
            </p>
          </div>
          <div className="card  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body ">
              <h2 className="text-center font-bold">Want to save Time ?</h2>

              <button className="bg-yellow-400" onClick={handleGoogleSignIn}>
                Continue with Google
              </button>
              <p className="flex justify-center items-center gap-1 ">
                <hr className="w-28 text-cyan-500" />
                <span className="leading-none">or</span>
                <hr className="w-28" />
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               <div className="flex relative ">
               <input 
                  type={show ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-96"
                  required
               
                />
                  <p className=" font-bold absolute right-2 top-2" onClick={() => setShow(!show)}>
                  {show ? (
                    <span>Hide</span>
                  ) : (
                    <span>Show</span>
                  )}
                </p>
               </div>
                
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-indigo-600 text-indigo-100 hover:bg-indigo-700">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">{registerAccount}</p>{" "}
            <Link to="/register" className="text-center">
              <button className="btn btn-link text-blue-500">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
