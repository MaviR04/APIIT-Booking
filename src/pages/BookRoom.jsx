import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function BookRoom() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="px-6 py-4">
        <h1 className="text-xl font-semibold">Book Room</h1>
        <p className="text-gray-600 mt-2">Booking functionality coming soon.</p>
      </main>
    </div>
  );
}