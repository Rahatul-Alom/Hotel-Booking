import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {AuthContext} from "../../../Context/AuthProvider"
import { BsMoonFill } from 'react-icons/bs';

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [mode, setMode] = useState('light')

   function changeTheme () {
    const html = document.documentElement

    if (mode === 'light') {
      html.setAttribute('data-theme', 'dark');
      setMode('dark');
      localStorage.setItem('mode', 'dark')
    } else {
      html.setAttribute('data-theme', 'light');
      setMode('light');
      localStorage.setItem('mode', 'light')
    }
    
  }

  useEffect(()=>{
    const currentMode = localStorage.getItem('mode') || 'light'
    setMode(currentMode)
    const html = document.documentElement
    html.setAttribute('data-theme', currentMode)
  },[])

  const handleSingOut = () =>{
    logOut()
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })
}
  const links = (
    <>
      <li className="font-semibold mr-4"><NavLink to={"/"}>Home</NavLink></li>
      <li className="font-semibold mr-4"><NavLink to={"/rooms"}>Rooms</NavLink></li>
      <li className="font-semibold mr-4"><NavLink to={"/mybooking"}>My Bookings</NavLink></li>
      <li className="font-semibold mr-4"><NavLink to={"/About"}>About Us</NavLink></li>
      <li className="font-semibold mr-4"><NavLink to={"/contuctUs"}>Contuct Us</NavLink></li>

    </>
  );

  return (
    <div className="navbar bg-blend-multiply">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {links}
          </ul>
        </div>
          <Link to="/"><img src="https://i.ibb.co/PDpkttq/2543694.png" className="h-12" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-amber-600">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
      {
            user?. email ? 
              <>
             <span className="mr-3 font-semibold"> {user.displayName} </span>
                <div className="w-10 rounded-full mr-3">
                  <img className="rounded-full" src={user.photoURL} />
                </div>
                 <button onClick={handleSingOut} className="btn bg-amber-700 text-white font-semibold">Sing Out</button>
              </>
            :
             <>
            <div className="w-10 rounded-full mr-4">
               <img className="rounded-full" src="https://i.ibb.co/XsDHQ4n/user-Defaulf.png" />
             </div>
            <Link to="/Login"><button className="btn bg-amber-700 text-white font-semibold">Login</button></Link>
            </>
        }
        <button onClick={changeTheme} className="btn bg-amber-700"><BsMoonFill className="text-white"></BsMoonFill></button>
      </div>
    </div>
  );
};

export default NavBar;
