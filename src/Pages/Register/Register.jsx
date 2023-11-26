import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const Register = () => {
    const [singUpError, setSingUpError] = useState('')
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const handleRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password)

    if(password.length < 6){
        setSingUpError('')
        toast('Password should be at least 6 characters or longer')
        return
    }
    else if(!/^(?=.*[!@#$%^&*])(?=.*[A-Z])/.test(password)){
      setSingUpError('')
      toast('Your Password Must have a special charecter and a capital letter')
      return
    }

     // reset error
    setSingUpError('')

    // create user
    createUser(email, password)
        .then(result =>{
            console.log(result)
            Swal.fire({
              title: 'Success!',
              text: 'Registration Successful',
              icon: 'success',
              confirmButtonText: 'Go Back'
            })
        })
        .catch(error =>{
            console.log(error)
            toast(error.message)
        })

}
    return (
        <div>
        <h1 className="text-5xl text-center font-bold mb-5 text-amber-500">
        Register your account
        </h1>
        <div className="hero min-h-screen">
          <div className="hero-content ">
            <div className="text-center"></div>
            <div className="card  shadow-2xl bg-base-100">
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
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
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
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-amber-700 text-white font-semibold">Register</button>
                </div>
                <p className="text-center mt-3">
                  Already have an account ? Please{" "}
                  <Link className="text-amber-600 font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    );
};

export default Register;