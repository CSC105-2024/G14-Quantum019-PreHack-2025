import { useState } from "react";
import axiosInstance from "@/axiosInstance";
import { useDataContext } from "./useDataContext";
import { toast } from "sonner";

export const useDeleteList = () => {
  const [toggleError, setToggleError] = useState(null);
  const { setData } = useDataContext();

  const deleteList = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/list/delete/${id}`);

      setData((d) => d.filter((list) => list.id !== data.data.id));

      if (data.data) {
        toast.success("List has been deleted");
      }

      return data;
    } catch (error) {
      console.error("Toggle error:", error);
      setToggleError(error.response?.data?.msg || "Failed to toggle list");
    }
  };

  return { deleteList };
};
