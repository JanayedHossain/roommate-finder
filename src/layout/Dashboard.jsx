import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navabar";
import SideNav from "../components/header/SideNav";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-2">
          <SideNav />
        </div>
        <div className="lg:col-span-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
