import axiosInstance from "@/axiosInstance";
import React, { useState } from "react";
import { useDataContext } from "./useDataContext";
import { toast } from "sonner";

export const useEdit = () => {
  const [editError, setEditError] = useState(null);
  const { data, setData } = useDataContext();

  const editList = async (updatedFields, oldFields, id) => {
    try {
      const payload = {
        title: updatedFields.title,
        category: updatedFields.category,
        time: updatedFields.time,
        description: updatedFields.description,
        note: updatedFields.note,
      };

      console.log(oldFields);

      const isUnchanged = [oldFields].every(
        (list) =>
          list.title === updatedFields.title &&
          list.category === updatedFields.category &&
          list.time === updatedFields.time &&
          list.description === updatedFields.description &&
          list.note === updatedFields.note
      );

      if (isUnchanged) {
        // toast.error("No changes detected.");
        throw new Error("No changed detected.");
      }

      const { data } = await axiosInstance.put(`/list/edit/${id}`, payload);

      setData((prevData) => {
        const index = prevData.findIndex((list) => list.id === data.data.id);
        if (index === -1) return [...prevData, data.data];

        const updated = [...prevData];
        updated[index] = data.data;
        return updated;
      });

      return data;
    } catch (error) {
      console.error(error);
      setEditError(error.response?.data?.msg || "Something went wrong");
      throw new Error(error);
    }
  };

  return { editList, editError, setEditError };
};
