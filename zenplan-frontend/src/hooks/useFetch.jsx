import axiosInstance from "@/axiosInstance";
import React, { useState } from "react";
import { useDataContext } from "./useDataContext";

export const useFetch = () => {
  const [fetchError, setFetchError] = useState(null);
  const { setData } = useDataContext();

  const fetchLists = async () => {
    try {
      const { data } = await axiosInstance.get("/list/get");

      setData(data.data);

      return data.data;
    } catch (error) {
      console.error(error);
      setFetchError(error.response?.data?.msg || "Something went wrong");
    }
  };

  return { fetchLists, fetchError, setFetchError };
};
