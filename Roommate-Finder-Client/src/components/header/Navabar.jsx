import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, LogOut } = useContext(AuthContext);
  const [ishover, setIsHover] = useState(false);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        toast.success("Log Out successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-posts"}>All Posts</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink to={"/Dashboard"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="w-full bg-white shadow-sm sticky z-[99] top-0">
      <nav className=" navbar bg-white w-[95%] mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden pr-1 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a
            className="flex items-center text-xl sm:text-2xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="" className="w-9 sm:w-14" />
            <h1 className="font-seconderyFont text-2xl sm:text-3xl">
              Roommate<span className="text-[#F67326]">Finder</span>
            </h1>
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
        </div>
        <div className="navbar-end flex items-center gap-20 relative">
          {user ? (
            <div
              className="avatar avatar-online avatar-placeholder cursor-pointer"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div className="bg-neutral text-neutral-content w-9 sm:w-12 rounded-full">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="image" />
                ) : (
                  <span className="text-xl">
                    {(user?.displayName && user.displayName[0]) || "?"}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-2 sm:gap-5">
              <a
                className="btn btn-primary btn-outline btn-sm sm:btn-md"
                onClick={() => navigate("/signup")}
              >
                Signup
              </a>
              <a
                className="btn btn-primary btn-sm sm:btn-md"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </div>
          )}
          <div
            className={` absolute min-w-42 top-[100%] rounded-xl border-gray-200 shadow-xs flex flex-col items-center border py-4 gap-3 bg-white  ${
              ishover ? "flex" : "hidden"
            }`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <p className="px-4 font-primaryFont text-center">
              {user?.displayName}
            </p>
            <div className="flex">
              <button
                className="btn btn-primary btn-sm hover:btn-outline hover:bg-transparent hover:text-[#F67326]"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
