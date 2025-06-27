import { useContext, useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";

import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logInUser, setUser, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        toast.success("login successfull");
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) =>
        toast.error("Login failed. Check your email and password.")
      );
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((res) => {
        toast.success('login successfull')
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) =>
        toast.error("Login failed.")
      );
  };

  return (
    <>
      <div className="card my-14 bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold font-primaryFont text-primary">
            Log In
          </h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full"
                placeholder="Password"
                required
              />
              <div className="absolute top-2 right-3 z-10">
                {showPassword ? (
                  <FaRegEyeSlash
                    className="cursor-pointer"
                    size={20}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    className="cursor-pointer"
                    size={20}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <div>
            <p className="pt-2 pb-4 text-center">Or</p>
            <div
              className="btn w-full flex items-center justify-center hover:btn-primary"
              onClick={handleGoogleLogIn}
            >
              <FcGoogle size={25} />
              <span>Log in with Google</span>
            </div>
          </div>
          <p className="py-4 text-center">
            Don't have an account?{" "}
            <Link className="underline text-primary" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
