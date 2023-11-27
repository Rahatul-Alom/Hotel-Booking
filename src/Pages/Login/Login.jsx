import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiLogoGoogle } from 'react-icons/bi';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const {signIn} =useContext(AuthContext)
    const {googleLogIn, logout} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result => {
          console.log(result.user)
          const user = {email}
           
            
        axios.post('https://hotel-booking-webapp-server.vercel.app/jwt', user, {withCredentials:true})
          .then(res => {
            console.log(res.data)
            if(res.data.success){
              toast.success('user logedin successfull')
              navigate(location?.state ? location?.state : "/" )
            }
            else{
              logout();
            }
          })

        })
        .catch( error =>{
            console.log(error)
            toast(error.message)
        })

    }

    return (
        <div>
         <Helmet>
          <title>Hotel Booking | login</title>
        </Helmet>
        <h1 className="text-5xl text-center font-bold mx-5 pt-7 text-amber-500 ">Login your account</h1>
        <div className="hero min-h-screen">
          <div className="hero-content ">
            <div className="text-center">
            </div>
            <div className="card py-12 px-20 shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="">
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
                  <button className="btn bg-amber-600 text-white font-semibold">Login</button>
                </div>
              </form>
              <div className="text-center mt-3">
              <button onClick={googleLogIn} className="btn rounded-lg hover:bg-slate-300 bg-amber-600 text-white font-semibold lg:px-20 md:px-20">
              <BiLogoGoogle className="text-xl" ></BiLogoGoogle>
                Login wih google</button>
              </div>
              <p className="text-center mt-3">Do not have an account please <Link className="text-amber-600 font-bold" to="/register">Register</Link></p>
            </div>
          </div>
          <ToastContainer/>
        </div>
      </div>
    );
};

export default Login;