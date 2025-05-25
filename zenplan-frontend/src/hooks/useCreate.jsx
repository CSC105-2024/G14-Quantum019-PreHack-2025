import axiosInstance from "@/axiosInstance";
import React, { useState } from "react";
import { useDataContext } from "./useDataContext";

export const useCreate = () => {
  const [createError, setCreateError] = useState(null);
  const { data, setData } = useDataContext();

  const createList = async (list) => {
    try {
      const payload = {
        title: list.title,
        category: list.category,
        time: list.time,
        description: list.description,
        note: list.note,
      };

      const { data } = await axiosInstance.post("/list/create", payload);
      setData((d) => [...d, data.data]);

      return data;
    } catch (error) {
      console.error(error);
      setCreateError(error.response?.data?.msg || "Something went wrong");
      throw new Error("Error");
    }
  };

  return { createList, createError, setCreateError };
};
