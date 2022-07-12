import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateWrapper = () => {
  let isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateWrapper;
