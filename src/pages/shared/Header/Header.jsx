import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logout} = useContext(AuthContext);


  

const handleLogout = () => {
  logout(() => {
    console.log("logout successful");
  })
}

  return (
     <div className="bg-slate-900 sticky top-0 z-30">
         <div
      
      className=" max-w-7xl mx-auto"
    >
      <nav className=" px-20 flex justify-between items-center text-white">
        <div className="py-5 text-indigo-500 font-extrabold text-4xl">
          <Link to="/">
            <span className="text-orange-600">Doll</span>Droid
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6 font-semibold">
            
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600"
                    : "hover:text-indigo-600 ease-in duration-200"
                }
              >
                Home
              </NavLink>
            </li>
           {
            user &&  <li>
            <NavLink
              to="/mytoys"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600"
                  : "hover:text-indigo-600 ease-in duration-200"
              }
            >
              My Toys
            </NavLink>
          </li>
           } <li>
                <NavLink
                  to="/alltoys"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600"
                      : "hover:text-indigo-600 ease-in duration-200"
                  }
                >
                  All Toys
                </NavLink>
              </li>
            {
              user &&  <li>
              <NavLink
                to="/addtoys"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600"
                    : "hover:text-indigo-600 ease-in duration-200"
                }
              >
                Add Toy
              </NavLink>
            </li>
            }
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600"
                    : "hover:text-indigo-600 ease-in duration-200"
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              {user ? <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img title={user && user.displayName} src={user && user.photoURL} />
                  </div>
                </label>
                <ul 
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-indigo-300 rounded-box w-52"
                >
                  <li>
                    <Link to="/" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} to="/login">Logout</Link>
                  </li>
                </ul>
              </div> : <Link to="/login"><button className="bg-indigo-500 text-white px-5 py-2 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
               Login
              </button></Link> }
            </li>
          </ul>
        </div>

        {/* Mobile Screen */}
        <div  className="lg:hidden cursor-pointer ml-10 z-50">
          <button
            title={!isMenuOpen ? "Open Menu" : "Close Menu"}
            aria-label={!isMenuOpen ? "Open Menu" : "Close Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <FaBars className="h-6 w-6 text-indigo-600" />
            ) : (
              <FaTimes className="h-6 w-6 text-indigo-600" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-700 h-96 opacity-90 z-30 absolute inset-0">
            <ul className=" grid place-items-center py-20">
              <li className="font-semibold mt-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600"
                      : "hover:text-indigo-600 ease-in duration-200"
                  }
                >
                  Home
                </NavLink>
              </li>
              {
            user &&  <li className="font-semibold mt-3">
            <NavLink
              to="/mytoys"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600"
                  : "hover:text-indigo-600 ease-in duration-200"
              }
            >
              My Toys
            </NavLink>
          </li>
           } <li className="font-semibold mt-3">
                <NavLink
                  to="/alltoys"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600"
                      : "hover:text-indigo-600 ease-in duration-200"
                  }
                >
                  All Toys
                </NavLink>
              </li>
            
             {
              user && <li className="font-semibold mt-3">
              <NavLink
                to="/addtoys"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600"
                    : "hover:text-indigo-600 ease-in duration-200"
                }
              >
                Add Toy
              </NavLink>
            </li>
             }
              <li className="font-semibold mt-3">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600"
                      : "hover:text-indigo-600 ease-in duration-200"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
              <li>
              {user ? <div title={user && user.displayName} className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user && user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-indigo-800 rounded-box w-52"
                >
                  <li className="text-white">
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link onClick={handleLogout} to="/login">Logout</Link>
                  </li>
                </ul>
              </div> : <Link to="/login"><button className="bg-indigo-500 px-5 py-2 my-5 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
               Login
              </button></Link> }
            </li>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
     </div>
  );
};

export default Header;
