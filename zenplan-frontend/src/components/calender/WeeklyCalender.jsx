import React, { useState } from "react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";
import CalenderHeader from "./CalenderHeader";

const WeeklyCalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekStart = startOfWeek(currentDate);

  console.log(weekStart);
  return (
    <div className="mb-8">
      <CalenderHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
    </div>
  );
};

export default WeeklyCalender;
