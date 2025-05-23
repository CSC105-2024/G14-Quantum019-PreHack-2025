import React from "react";
import Navbar from "@/components/layout/Navbar";

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

          {/* <Button
            variant="primary"
            onClick={() =>
              openActivityModal(new Date().toISOString().split("T")[0])
            }
            className="mt-3 sm:mt-0"
            //icon={<Plus size={18} className="mr-1" />}
          >
            Add Activity
          </Button> */}
        </div>

        {/* <WeeklyCalendar openActivityModal={openActivityModal} />

        <ActivityModal
          isOpen={isActivityModalOpen}
          onClose={() => setIsActivityModalOpen(false)}
          selectedDate={selectedDate}
        /> */}
      </main>
    </div>
  );
};

export default Home;
