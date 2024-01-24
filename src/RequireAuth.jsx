import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Context from "./ContextWrapper";
import Mainpage from "./mainpage/MainPage";

const RequireAuth = () => {
  const { authorized } = useContext(Context);
  const location = useLocation();
  if (location.pathname === "/login")
    return authorized ? <Navigate to="/" replace /> : <Outlet />;
  return authorized ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
