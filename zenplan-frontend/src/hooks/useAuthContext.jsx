import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
