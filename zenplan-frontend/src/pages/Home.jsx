import React, { useEffect } from "react";
import ActivityBox from "@/components/activities/ActivityBox";
import WeeklyCalender from "@/components/calender/WeeklyCalender";
import { useDataContext } from "@/hooks/useDataContext";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const { data, setData } = useDataContext();
  const { fetchLists } = useFetch();

  useEffect(() => {
    const func = async () => {
      const lists = await fetchLists();
      setData(lists);
    };

    func();
  }, []);

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-[var(--color-nav)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className=" bg-neutral-50 flex flex-col ">
      <main className="flex-1 px-4 py-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-800">
              Weekly Calendar
            </h1>
            <p className="text-neutral-500">
              Plan and track your wellness activities
            </p>
          </div>

          <ActivityBox mode={"create"} text={"Add Activity"} />
        </div>
        <WeeklyCalender />
      </main>
    </div>
  );
};

export default Home;
