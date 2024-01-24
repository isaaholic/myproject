import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Context from "./ContextWrapper";
import Mainpage from "./mainpage/MainPage";

const RequireAuth = () => {
  const { authorized } = useContext(Context);
  
  return authorized ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
