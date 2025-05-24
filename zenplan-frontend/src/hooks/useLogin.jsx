import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/axiosInstance";

const useLogin = () => {
  const [loginError, setLoginError] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post("user/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("zenplan_user", JSON.stringify(data.data));

      dispatch({ type: "LOGIN", payload: data.data });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setLoginError(error.response.data.msg);
    }
  };

  return { loginError, setLoginError, login };
};

export default useLogin;
