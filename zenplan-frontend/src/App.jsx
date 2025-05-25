import React from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useAuthContext } from "./hooks/useAuthContext";
import DailyTasks from "./pages/DailyTasks";
import Settings from "./pages/Settings";
import { Toaster } from "sonner";

const App = () => {
  const { user, dispatch, loading } = useAuthContext();
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans min-w-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="daily/:date" element={<DailyTasks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Toaster richColors />
    </div>
  );
};

export default App;
