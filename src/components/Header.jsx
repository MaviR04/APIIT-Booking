import React from "react";

export default function Header() {
  return (
    <header className="bg-teal-500 flex items-center justify-between px-6 py-4">
      <img src="src/assets/logo.png" alt="APIIT Logo" className="h-6" />
      <div className="text-xl">
        <i className="fa-regular fa-user-circle text-white text-2xl" />
      </div>
    </header>
  );
}