import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "bg-gray-300 rounded-full px-4 py-2" : "";

  return (
    <nav className="flex items-center gap-6 px-6 py-4">
      <Link to="/" className={isActive("/")}>Dashboard</Link>
      <Link to="/book-room" className={isActive("/book-room")}>Book Room</Link>
      <Link to="/view-timetable" className={isActive("/view-timetable")}>View Timetable</Link>
    </nav>
  );
}