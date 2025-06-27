import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router";

import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUser, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const imgurl = form.imgurl.value;
    const password = form.password.value;
    if (name.length < 4) {
      toast.error("Name must be at least 4 characters long.");
      return;
    }

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and 6+ characters."
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateUser(name, imgurl).then(() => {
          //success
        });
        toast.success('Sign Up Successfull')
        setUser(res.user);
        navigate("/");
      })
      .catch((error) => toast.error("Email already registered"));
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((res) => {
        toast.success('Login Successfull')
        setUser(res.user);
        navigate("/");
      })
      .catch((error) => toast.error('Something Went Wrong'));
  };
  return (
    <>
      <div className="card my-10 bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold font-primaryFont text-primary">
            Create Account
          </h1>
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="imgurl"
              className="input w-full"
              placeholder="Photo URL"
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
              Signup
            </button>
          </form>
          <div>
            <p className="pt-2 pb-4  text-center">Or</p>
            <div
              className="btn w-full flex items-center justify-center hover:btn-primary"
              onClick={handleGoogleLogIn}
            >
              <FcGoogle size={25} />
              <span>Sign up with Google</span>
            </div>

            <p className="py-4 text-center">
              Already have an account?{" "}
              <Link className="underline text-primary" to={"/login"}>
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
