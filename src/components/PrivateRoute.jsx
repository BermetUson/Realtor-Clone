import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const loggendIn = false;

  return loggendIn ? <Outlet /> : <Navigate to="/sign-in/" />;
};

export default PrivateRoute;
