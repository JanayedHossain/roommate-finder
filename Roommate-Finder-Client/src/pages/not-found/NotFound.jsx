import { NavLink } from "react-router";
import notFoundImage from "../../assets/notfound.jpg";

const NotFound = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col gap-5">
        <img
          src={notFoundImage}
          alt=""
          className="w-[55%] sm:w-[45%] md:w-[40%] lg:w-[30%] mx-auto"
        />
        <p className="text-gray-600 w-11/12 text-center text-sm sm:text-base">
          We can’t find the page you’re looking for. It might be missing or no
          longer available.
        </p>
        <NavLink
          to={"/"}
          className="btn btn-sm md:btn-md btn-primary hover:btn-outline hover:bg-transparent mt-2 hover:text-primary"
        >
          Back To Home
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
