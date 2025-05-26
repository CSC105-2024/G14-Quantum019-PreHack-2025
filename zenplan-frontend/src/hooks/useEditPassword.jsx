import axiosInstance from "@/axiosInstance";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";

export const useEditPassword = () => {
  const [editPasswordError, setEditPasswordError] = useState(null);

  const { dispatch } = useAuthContext();

  const editPassword = async (password, newPassword, cofirmPassword) => {
    try {
      if (newPassword !== cofirmPassword) {
        toast.error("new password and confrim password must be the same.");
        return;
      }

      if (newPassword === password) {
        toast.error("No changed dected");
        return;
      }

      const { data } = await axiosInstance.patch("/user/edit/password", {
        password: password,
        newPassword: newPassword,
      });

      if (data.success) {
        toast.success("Your password has been changed");
        setTimeout(() => {
          localStorage.removeItem("zenplan_user");

          dispatch({ type: "LOGOUT" });
          setData(null);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.msg);
      //setEditPasswordError(error.response.data.msg);
    }
  };

  return { editPassword, editPasswordError, setEditPasswordError };
};
