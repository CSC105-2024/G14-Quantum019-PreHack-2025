import React from "react";

// Category color mapping
const categoryColors = {
  Physical: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    fill: "bg-blue-500",
  },
  Nutrition: {
    bg: "bg-green-100",
    text: "text-green-800",
    fill: "bg-green-500",
  },
  "Self-care": {
    bg: "bg-accent-100",
    text: "text-accent-800",
    fill: "bg-accent-500",
  },
  Medical: {
    bg: "bg-red-100",
    text: "text-red-800",
    fill: "bg-red-500",
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

          const { bg, text, fill } = categoryColors[categoryStat.category];

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
