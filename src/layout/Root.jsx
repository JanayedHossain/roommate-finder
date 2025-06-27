import { Outlet } from "react-router";
import Navbar from "../components/header/Navabar";

import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
