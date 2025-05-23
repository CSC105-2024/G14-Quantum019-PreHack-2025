import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addWeeks, subWeeks } from "date-fns";
import { Button } from "../ui/button";

const CalenderHeader = ({ currentDate, setCurrentDate }) => {
  const previousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const nextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const today = () => {
    setCurrentDate(new Date());
  };

  const startOfWeekDate = format(currentDate, "MMMM d");
  const endOfWeekDate = format(addWeeks(currentDate, 1), "MMMM d, yyyy");

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-neutral-800 mb-2 sm:mb-0">
        {startOfWeekDate} - {endOfWeekDate}
      </h2>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={previousWeek}
          icon={<ChevronLeft size={16} />}
          aria-label="Previous week"
        />
        <Button variant="outline" size="sm" onClick={today}>
          Today
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextWeek}
          icon={<ChevronRight size={16} />}
          aria-label="Next week"
        />
      </div>
    </div>
  );
};

export default CalenderHeader;
