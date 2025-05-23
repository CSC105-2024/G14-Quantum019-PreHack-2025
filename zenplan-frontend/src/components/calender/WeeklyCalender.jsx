import React, { useEffect, useState } from "react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";
import CalenderHeader from "./CalenderHeader";
import { Link } from "react-router-dom";
import { mockLists } from "@/mocklist";

const categoryColors = {
  Nutrition: "bg-green-100 text-green-800 border-green-200",
  Selfcare: "bg-pink-100 text-pink-800 border-pink-200",
  Exercise: "bg-blue-100 text-blue-800 border-blue-200",
  Hobbies: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Stress Management": "bg-purple-100 text-purple-800 border-purple-200",
  "Medical Checkups": "bg-red-100 text-red-800 border-red-200",
  Hydration: "bg-cyan-100 text-cyan-800 border-cyan-200",
  Health: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Emotional Wellness": "bg-rose-100 text-rose-800 border-rose-200",
  "Social Wellness": "bg-indigo-100 text-indigo-800 border-indigo-200",
};

const WeeklyCalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekStart = startOfWeek(currentDate);

  const days = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

  const lists = days.reduce((acc, day) => {
    const dateKey = format(day, "yyyy-MM-dd");
    acc[dateKey] = mockLists.filter(
      (list) => format(list.time, "yyyy-MM-dd") === dateKey
    );
    return acc;
  }, {});

  console.log(lists);

  return (
    <div className="mb-8">
      <CalenderHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />

      <div className="grid grid-cols-7 gap-2 mb-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm font-medium text-neutral-500 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dateFormatted = format(day, "yyyy-MM-dd");
          const isToday = isSameDay(day, new Date());
          const daily = lists[dateFormatted];

          return (
            <div
              key={dateFormatted}
              className={`min-h-[120px] sm:min-h-[150px] bg-white rounded-lg border overflow-hidden ${
                isToday ? "border-[var(--color-primary)] shadow" : ""
              }`}
            >
              <div
                className={`text-center py-1 text-sm ${
                  isToday
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-neutral-50 text-neutral-700"
                }`}
              >
                <div>{format(day, "d")}</div>
              </div>
              <Link to={`/daily/${dateFormatted}`} className="block p-1"></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyCalender;
