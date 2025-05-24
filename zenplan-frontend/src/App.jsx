import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import DailyTasks from "./pages/DailyTasks";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans min-w-screen">
      <Routes>
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="daily/:date" element={<DailyTasks />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
