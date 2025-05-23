import React, { useState } from "react";
import { Calendar, User, Settings, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "bg-primary-50 text-primary-600"
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
              to="/home"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                "/home"
              )}`}
            >
              Calendar
            </Link>
            <Link
              to="/settings"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                "/settings"
              )}`}
            >
              Profile & Stats
            </Link>
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100"
            >
              {menuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
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
              className="w-full mt-2 text-left px-3 py-2 rounded-md text-base font-medium text-white bg-primary-400 hover:bg-primary-500"
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
