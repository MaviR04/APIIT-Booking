import React from "react";

export default function inputField({ type, placeholder, icon }) {
  return (
    <div className="mb-4">
      <label className="flex items-center border-b border-gray-300 pb-2">
        <span className="text-gray-500 mr-2 text-xl">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full outline-none text-gray-700"
        />
      </label>
    </div>
  );
}
