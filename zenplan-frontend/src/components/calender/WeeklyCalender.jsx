import React, { useEffect, useState } from "react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";
import CalenderHeader from "./CalenderHeader";
import { Link } from "react-router-dom";
import { mockLists } from "@/mocklist";
import { PlusCircle, CheckCircle } from "lucide-react";
import ActivityBox from "../activity_box/ActivityBox";

const categoryColors = {
  Nutrition: "bg-orange-100 text-orange-900 border-orange-200", // warm, but distinct from greens
  Selfcare: "bg-fuchsia-100 text-fuchsia-900 border-fuchsia-200", // vibrant and distinct
  Exercise: "bg-sky-100 text-sky-900 border-sky-200", // lighter than your nav green
  Hobbies: "bg-amber-100 text-amber-900 border-amber-200", // different from green/yellow
  "Stress Management": "bg-violet-100 text-violet-900 border-violet-200", // richer purple tone
  "Medical Checkups": "bg-slate-100 text-slate-900 border-slate-200", // neutral and clinical
  Hydration: "bg-teal-100 text-teal-900 border-teal-200", // blue-green, avoiding your mint
  Health: "bg-lime-100 text-lime-900 border-lime-200", // fresher tone, away from emerald
  "Emotional Wellness": "bg-rose-100 text-rose-900 border-rose-200", // close to red but muted
  "Social Wellness": "bg-indigo-100 text-indigo-900 border-indigo-200", // social and calm
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

      <div className="grid md:grid-cols-7 md:w-auto gap-2 gird-cols-1 w-50 mx-auto">
        {days.map((day) => {
          const dateFormatted = format(day, "yyyy-MM-dd");
          const isToday = isSameDay(day, new Date());
          const daily = lists[dateFormatted];

          return (
            <div
              key={dateFormatted}
              className={`min-h-[120px] sm:min-h-[150px] bg-white rounded-lg border overflow-hidden hover:border-[var(--color-nav)] ${
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
              <Link to={`/daily/${dateFormatted}`} className="block p-1">
                <div className="max-h-[100px] overflow-y-auto">
                  {daily.slice(0, 3).map((list) => (
                    <div
                      key={list.id}
                      className={`text-xs p-1 mb-1 rounded border flex items-center justify-between  hover:border-[var(--color-nav)] ${
                        categoryColors[list.category]
                      } ${list.is_complete ? "line-through" : ""}`}
                    >
                      <span className="truncate flex-1">{list.title}</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCompletion(activity.id);
                        }}
                        className="flex-shrink-0 ml-1"
                      >
                        <CheckCircle
                          size={14}
                          className={list.is_complete ? "text-green-600" : ""}
                        />
                      </button>
                    </div>
                  ))}
                  {daily.length > 3 && (
                    <div className="text-xs text-center text-neutral-500 pt-1">
                      + {daily.length - 3} more
                    </div>
                  )}
                </div>
              </Link>

              <ActivityBox
                text={"Add"}
                mode={"home"}
                value={{ time: day.toISOString() }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyCalender;
