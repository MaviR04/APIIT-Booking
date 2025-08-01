import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BookRoom from "./pages/BookRoom";
import ViewTimetable from "./pages/ViewTimetable";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/book-room" element={<BookRoom />} />
        <Route path="/view-timetable" element={<ViewTimetable />} />
      </Routes>
    </Router>
  );
}