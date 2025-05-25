import React, { useEffect } from "react";
import ActivityBox from "@/components/activities/ActivityBox";
import WeeklyCalender from "@/components/calender/WeeklyCalender";

const Home = () => {
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
