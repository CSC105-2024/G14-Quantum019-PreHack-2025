import React, { useState } from "react";
import { Calendar, User, Settings, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import AlertBox from "../alert_box/AlertBox";
import { useLogout } from "@/hooks/useLogout";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "bg-[var(--color-pale)] text-[var(--color-nav)]"
      : "text-neutral-600 hover:bg-neutral-100";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex-shrink-0 flex items-center">
              <Calendar className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-semibold text-[var(--color-nav)]">
                Zen Plan
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/dashboard/home"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                "/dashboard/home"
              )}`}
            >
              Calendar
            </Link>
            <Link
              to="/dashboard/settings"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                "/dashboard/settings"
              )}`}
            >
              Profile & Stats
            </Link>
            <AlertBox
              btnName={"Log out"}
              css={
                "ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-[var(--color-secondary)] hover:bg-[var(--color-primary)]"
              }
              title={"Are you sure you want to log out?"}
              onClick={handleLogout}
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-nav)] hover:text-neutral-500 hover:bg-neutral-100 bg-white border border-[var(--color-nav)]"
            >
              {menuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link
              to="/home"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(
                "/home"
              )}`}
              onClick={() => setMenuOpen(false)}
            >
              Calendar
            </Link>
            <Link
              to="/settings"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(
                "/settings"
              )}`}
              onClick={() => setMenuOpen(false)}
            >
              Profile & Stats
            </Link>
            <button
              onClick={handleLogout}
              className="w-full mt-2 text-left px-3 py-2 rounded-md text-base font-medium text-white "
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
