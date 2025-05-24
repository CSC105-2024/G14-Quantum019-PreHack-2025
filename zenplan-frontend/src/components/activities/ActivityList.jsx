import { categoryColors } from "@/constants/categoryColors";
import React from "react";
import { Trash2, CheckCircle, Clock, Tag } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../ui/button";
import AlertBox from "../alert_box/AlertBox";
import ActivityBox from "./ActivityBox";

const ActivityList = ({ lists, onDeleteList, onToggleComplete }) => {
  if (lists.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow-sm border border-neutral-200">
        <p className="text-neutral-500">
          No activities scheduled for this day.
        </p>
        <p className="text-neutral-400 text-sm mt-1">
          Use the "Add Activity" button to schedule something.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {lists.map((list) => (
        <div
          key={list.id}
          className={`bg-white rounded-lg shadow-sm border p-4 transition-all ${
            list.is_completed
              ? "border-neutral-200 opacity-70"
              : "border-l-4 border-l-primary-400"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <button
                onClick={() => onToggleComplete(list.id)}
                className="flex-shrink-0 mt-1"
                aria-label={
                  list.is_complete ? "Mark as incomplete" : "Mark as complete"
                }
              >
                <CheckCircle
                  size={20}
                  className={
                    list.is_complete ? "text-green-500" : "text-neutral-300"
                  }
                />
              </button>

              <div>
                <h3
                  className={`font-medium ${
                    list.is_complete
                      ? "line-through text-neutral-500"
                      : "text-neutral-800"
                  }`}
                >
                  {list.title}
                </h3>

                {list.description && (
                  <p className="text-sm text-neutral-600 mt-1">
                    {list.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center mt-2 gap-2">
                  <span
                    className={`inline-flex items-center text-xs px-2 py-0.5 rounded border ${
                      categoryColors[list.category]
                    }`}
                  >
                    <Tag size={12} className="mr-1" />
                    {list.category}
                  </span>

                  {list.time && (
                    <span className="inline-flex items-center text-xs text-neutral-500">
                      <Clock size={12} className="mr-1" />
                      {format(list.time, "hh:mm a")}
                    </span>
                  )}
                </div>

                {list.note && (
                  <div className="mt-2 text-sm text-neutral-500 border-t border-neutral-100 pt-2">
                    {list.note}
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-1">
              {/* <Button
                variant="text"
                size="sm"
                onClick={() => onEditActivity(activity)}
                aria-label="Edit activity"
                className="p-1"
              >
                <Edit size={16} />
              </Button>

              <
              <Button
                variant="text"
                size="sm"
                onClick={() => deleteActivity(activity.id)}
                aria-label="Delete activity"
                className="text-error-500 p-1"
              >
                <Trash2 size={16} />
              </Button> */}
              <ActivityBox mode={"edit"} oldForm={list} />
              <AlertBox
                icon={Trash2}
                title={"Are you sure you want to delete this?"}
                onClick={() => onDeleteList(list.id)}
                css={
                  "bg-white shadow-none text-black hover:bg-white hover:text-[var(--color-nav)]"
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
