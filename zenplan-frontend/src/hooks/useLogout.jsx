import axiosInstance from "@/axiosInstance";
import { useState } from "react";
import { useDataContext } from "./useDataContext";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [logoutError, setLogtoutError] = useState(null);
  const { setData } = useDataContext();

  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      const { data } = await axiosInstance.post("/user/logout");

      if (data.msg) {
        localStorage.removeItem("zenplan_user");

        dispatch({ type: "LOGOUT" });
        setData(null);
      }
    } catch (error) {
      console.error(error);
      setLogtoutError(error.response.data.msg);
    }
  };

  return { logout, logoutError, setLogtoutError };
};
