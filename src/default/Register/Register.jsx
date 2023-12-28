import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser,setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password =form.password.value;
    console.log(name,email,password)
    createUser(email,password)
    .then(result => {
        const newUser= result.user;
        console.log(newUser)
        setUser(newUser)
        toast.success('User has been Created successfully')
        form.reset();
    })
    .catch(error => {
        toast.error(error.message)
    })
  };

  const signAccount = "Already Have an account?";
  return (
    <div>
        <Toaster/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
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
                <label className="label">
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
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Register</button>
              </div>
            </form>
            <p className="text-center">{signAccount}</p>{" "}
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
