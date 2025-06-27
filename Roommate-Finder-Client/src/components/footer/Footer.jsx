import { NavLink } from "react-router";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Footer = () => {
  const {user}=useContext(AuthContext)
  return (
    <footer className="bg-[#1F2937] text-white py-10">
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <a
            className="flex items-center text-xl sm:text-2xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="" className="w-9 sm:w-14" />
            <h1 className="font-seconderyFont text-2xl sm:text-3xl">
              Roommate<span className="text-[#F67326]">Finder</span>
            </h1>
          </a>
          <p className="mt-4 text-gray-300 text-sm">
            Find your perfect roommate easily and safely.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-posts">All Posts</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {user?.email && (
              <li>
                <NavLink to="/Dashboard">
                Dashboard</NavLink>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#3b5998] hover:bg-opacity-90 p-2 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0077b5] hover:bg-opacity-90 p-2 rounded-full"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} RoommateFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
