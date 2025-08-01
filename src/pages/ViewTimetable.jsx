import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function ViewTimetable() {
  return (
    <div className="min-h-screen bg-white border-8">
      <Header />
      <Navbar />
      <main className="px-6 py-4">
        <h1 className="text-xl font-semibold">View Timetable</h1>
        <p className="text-gray-600 mt-2">Timetable view coming soon.</p>
      </main>
    </div>
  );
}