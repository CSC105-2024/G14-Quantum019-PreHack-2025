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
import { useDataContext } from "./hooks/useDataContext";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import ProtectedRoute from "./routes/ProtectedRoute";
import RedirectIfAuthenticated from "./routes/ RedirectIfAuthenticated";

const App = () => {
  const { user, dispatch, loading } = useAuthContext();
  const { data, setData } = useDataContext();
  const { fetchLists } = useFetch();

  useEffect(() => {
    const func = async () => {
      const lists = await fetchLists();
    };
    if (user) {
      func();
    }
  }, [user]);

  if (loading || (user && !data))
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-[var(--color-nav)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans min-w-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectIfAuthenticated>
              <SignUpPage />
            </RedirectIfAuthenticated>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="daily/:date" element={<DailyTasks />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
      <Toaster richColors />
    </div>
  );
};

export default App;
