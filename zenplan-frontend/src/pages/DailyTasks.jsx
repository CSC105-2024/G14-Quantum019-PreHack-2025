import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Calendar } from "lucide-react";
import ActivityBox from "@/components/activities/ActivityBox";
import ActivityList from "@/components/activities/ActivityList";
import { useDataContext } from "@/hooks/useDataContext";
import { useToggleList } from "@/hooks/useToggleList";

const DailyTasks = () => {
  const { date } = useParams();
  const formattedDate = format(date, "EEEE, MMMM d, yyyy");
  const { data } = useDataContext();
  const { toggleList } = useToggleList();

  const lists = data.filter((list) => format(list.time, "yyyy-MM-dd") === date);

  const deleteList = (id) => {
    console.log(id);
  };

  const toggleComplete = async (id) => {
    await toggleList(id);
  };

  if (!date) {
    return <div>Invalid date</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 px-4 py-6 max-w-3xl mx-auto w-full">
        <div className="mb-6">
          <Link
            to="/dashboard/home"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Calendar
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-primary-400 mr-2" />
              <h1 className="text-2xl font-semibold text-neutral-800">
                {formattedDate}
              </h1>
            </div>

            <ActivityBox mode={"create"} text={"Add Activity"} />
          </div>
        </div>

        <ActivityList
          lists={lists}
          onDeleteList={deleteList}
          onToggleComplete={toggleComplete}
        />
      </main>
    </div>
  );
};

export default DailyTasks;
