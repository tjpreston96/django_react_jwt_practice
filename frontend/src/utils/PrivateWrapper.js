import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateWrapper = () => {
  const { user } = useContext(AuthContext).contextData;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateWrapper;
