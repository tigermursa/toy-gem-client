import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "./Private.css";
import Spinner from "./Spiner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-96 mb-96">
        <Spinner></Spinner>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    alert("User not authenticated. Redirecting to login page.");
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
