import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "@/axiosInstance";
import { toast } from "sonner";

const useEditInfo = () => {
  const [editError, setEditError] = useState(null);
  const { dispatch } = useAuthContext();
  const { user } = useAuthContext();

  const editInfo = async (name, email) => {
    if (name === user.name && user.email === email) {
      toast.error("No changed detected.");
      return;
    }

    try {
      const { data } = await axiosInstance.put("user/edit/info", {
        name: name,
        email: email,
      });

      localStorage.setItem("zenplan_user", JSON.stringify(data.data));
      dispatch({ type: "LOGIN", payload: data.data });

      toast.success("Successfully changed your infomation");
    } catch (error) {
      console.error(error);
      setEditError(error.response.data.msg);
    }
  };

  return { editError, setEditError, editInfo };
};

export default useEditInfo;
