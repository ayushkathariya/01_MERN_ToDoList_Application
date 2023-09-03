import React from "react";
import { KEY_ACCESS_TOKEN, getItem } from "../utils/localStorageManager";
import { Navigate, Outlet } from "react-router-dom";

const IfNotLoggedIn: React.FC = () => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);

  return !accessToken ? <Outlet /> : <Navigate to="/" />;
};

export default IfNotLoggedIn;
