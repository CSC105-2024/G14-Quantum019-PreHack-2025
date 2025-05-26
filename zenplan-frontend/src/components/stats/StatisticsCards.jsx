import React from "react";
import { Activity, CheckCircle, BarChart } from "lucide-react";

const StatisticsCards = ({ stats }) => {
  const completionRate =
    stats.totalActivities > 0
      ? Math.round((stats.completedActivities / stats.totalActivities) * 100)
      : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
        <div className="flex items-center">
          <div className="p-2 bg-primary-100 rounded-lg">
            <Activity className="h-6 w-6 text-primary-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-neutral-500">Total Activities</p>
            <h4 className="text-2xl font-semibold text-neutral-800">
              {stats.totalActivities}
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
        <div className="flex items-center">
          <div className="p-2 bg-success-100 rounded-lg">
            <CheckCircle className="h-6 w-6 text-success-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-neutral-500">Completed</p>
            <h4 className="text-2xl font-semibold text-neutral-800">
              {stats.completedActivities}
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
        <div className="flex items-center">
          <div className="p-2 bg-secondary-100 rounded-lg">
            <BarChart className="h-6 w-6 text-secondary-400" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-neutral-500">Completion Rate</p>
            <h4 className="text-2xl font-semibold text-neutral-800">
              {completionRate}%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;
