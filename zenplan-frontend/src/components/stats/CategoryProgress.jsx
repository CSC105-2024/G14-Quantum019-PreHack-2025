import React from "react";

// Category color mapping
const categoryColors = {
  Nutrition: {
    bg: "bg-orange-100",
    text: "text-orange-900",
    fill: "bg-orange-200",
  },
  Selfcare: {
    bg: "bg-fuchsia-100",
    text: "text-fuchsia-900",
    fill: "bg-fuchsia-200",
  },
  Exercise: {
    bg: "bg-sky-100",
    text: "text-sky-900",
    fill: "bg-sky-200",
  },
  Hobbies: {
    bg: "bg-amber-100",
    text: "text-amber-900",
    fill: "bg-amber-200",
  },
  "Stress Management": {
    bg: "bg-violet-100",
    text: "text-violet-900",
    fill: "bg-violet-200",
  },
  "Medical Checkups": {
    bg: "bg-slate-100",
    text: "text-slate-900",
    fill: "bg-slate-200",
  },
  Hydration: {
    bg: "bg-teal-100",
    text: "text-teal-900",
    fill: "bg-teal-200",
  },
  Health: {
    bg: "bg-lime-100",
    text: "text-lime-900",
    fill: "bg-lime-200",
  },
  "Emotional Wellness": {
    bg: "bg-rose-100",
    text: "text-rose-900",
    fill: "bg-rose-200",
  },
  "Social Wellness": {
    bg: "bg-indigo-100",
    text: "text-indigo-900",
    fill: "bg-indigo-200",
  },
};

const CategoryProgress = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-6">
      <h3 className="text-lg font-medium text-neutral-800 mb-4">
        Category Progress
      </h3>

      <div className="space-y-6">
        {stats.categoriesStats.map((categoryStat) => {
          const completionPercentage =
            categoryStat.total > 0
              ? Math.round((categoryStat.completed / categoryStat.total) * 100)
              : 0;

          const color = categoryStat.category.replace(/_/g, " ");

          const { bg, text, fill } = categoryColors[color];

          return (
            <div key={categoryStat.category}>
              <div className="flex justify-between items-center mb-1">
                <div
                  className={`text-sm font-medium ${text} ${bg} px-2 py-0.5 rounded`}
                >
                  {categoryStat.category}
                </div>
                <div className="text-sm text-neutral-500">
                  {categoryStat.completed} / {categoryStat.total}
                  <span className="ml-2">({completionPercentage}%)</span>
                </div>
              </div>

              <div className="w-full bg-neutral-100 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${fill}`}
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProgress;
