import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (user && user.email) {
    return children;
  } else {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
};

export default PrivateRoute;
