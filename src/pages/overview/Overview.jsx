// src/pages/dashboard/Overview.jsx
import { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { FaBox, FaListAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const allPost = useLoaderData();
    const myPost = allPost.filter((item) => item.userEmail===user.email);
    const pieData = [
      { name: "Total Posts", value: allPost.length },
      { name: "My Listing", value: myPost.length },
    ];
    
    
  return (
    <div className="p-6 pt-10 pb-24">
      <h2 className="text-2xl font-semibold mb-4">
        Welcome, {user?.displayName || "User"}!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 rounded-xl p-5 shadow-md flex items-center gap-4">
          <FaBox className="text-3xl text-blue-600" />
          <div>
            <h3 className="text-lg font-bold">Total Posts</h3>
            <p className="text-2xl">{allPost.length}</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-xl p-5 shadow-md flex items-center gap-4">
          <FaListAlt className="text-3xl text-green-600" />
          <div>
            <h3 className="text-lg font-bold">My Listings</h3>
            <p className="text-2xl">{myPost.length}</p>
          </div>
        </div>
        <div className="bg-yellow-100 rounded-xl p-5 shadow-md flex items-center gap-4">
          <FaUser className="text-3xl text-yellow-600" />
          <div>
            <h3 className="text-lg font-bold">{user?.displayName }</h3>
            <p className="text-md">{user?.email}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mt-10 mb-4 text-center pt-6">
          Posts Overview (Pie Chart)
        </h3>
        <div className=" p-4 rounded-xl">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                label
              >
                <Cell fill="#8884d8" /> 
                <Cell fill="#82ca9d" /> 
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
