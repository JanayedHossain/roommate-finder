import { Outlet } from "react-router";
import Navbar from "../components/header/Navabar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer
        autoClose={2000}
        toastClassName="text-sm p-2 sm:text-base"
      />
    </div>
  );
};

export default Root;
