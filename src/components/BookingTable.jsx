import React from "react";

const bookings = [
  {
    id: 54023,
    time: "8.30am - 11.00am",
    location: "APIIT City Campus",
    venue: "L4CR5",
  },
  {
    id: 54089,
    time: "11.30am - 1.30pm",
    location: "APIIT City Campus",
    venue: "L4CR2",
  },
  {
    id: 81623,
    time: "1.45pm - 4.30pm",
    location: "APIIT City Campus",
    venue: "L3CR1",
  },
];

export default function BookingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-teal-600 text-white text-left">
            <th className="px-4 py-2">Booking ID</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Venue</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b">
              <td className="px-4 py-3">{booking.id}</td>
              <td className="px-4 py-3">{booking.time}</td>
              <td className="px-4 py-3">{booking.location}</td>
              <td className="px-4 py-3">{booking.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}