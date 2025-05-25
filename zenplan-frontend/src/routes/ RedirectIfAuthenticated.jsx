import { useAuthContext } from "@/hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }) => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/dashboard/home" replace />;
  }

  return children;
};

export default RedirectIfAuthenticated;
