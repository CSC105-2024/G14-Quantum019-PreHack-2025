import { useState } from "react";
import axiosInstance from "@/axiosInstance";
import { useDataContext } from "./useDataContext";

export const useToggleList = () => {
  const [toggleError, setToggleError] = useState(null);
  const { setData } = useDataContext();

  const toggleList = async (id) => {
    try {
      const { data } = await axiosInstance.patch(`/list/toggle/${id}`);

      setData((prevData) => {
        const index = prevData.findIndex((list) => list.id === data.data.id);
        if (index === -1) return [...prevData, data.data];

        const updated = [...prevData];
        updated[index] = data.data;
        return updated;
      });

      return data;
    } catch (error) {
      console.error("Toggle error:", error);
      setToggleError(error.response?.data?.msg || "Failed to toggle list");
    }
  };

  return { toggleList, toggleError };
};
