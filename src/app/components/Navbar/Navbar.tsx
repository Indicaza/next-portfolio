import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 z-20 w-full bg-gray-800 bg-opacity-75 backdrop-blur-md">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-6 h-[100px]">
        {/* Left Section */}
        <div className="flex items-center cursor-pointer">
          <Image
            src="/logoLight.svg"
            alt="Logo"
            width={75}
            height={75}
            className="mr-4 drop-shadow-lg"
          />
          <h1 className="text-4xl font-semibold italic text-white drop-shadow-md">
            OIG Case Management
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Complaints
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Investigations
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Admin
          </button>
          <button className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition">
            Logout
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition">
            Toggle Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
