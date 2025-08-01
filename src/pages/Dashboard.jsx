import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BookingTable from "../components/BookingTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="px-6">
        <h1 className="text-2xl font-semibold mb-4">Today’s Schedule</h1>
        <div className="flex items-center gap-2 mb-4 text-gray-700">
          <i className="fa-regular fa-calendar text-lg" />
          <span>1/8/2025</span>
        </div>
        <BookingTable />
      </main>
    </div>
  );
}