import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h3 className="text-[22px] font-bold text-white tracking-wide">
        Tender Tasks
      </h3>
      <div className="flex items-center gap-[14px]">
        <div className="bg-white px-[10px] flex items-center rounded-[4px] w-[400px]">
          <input
            type="text"
            className="outline-none border-none h-[34px] w-full"
            placeholder="Search for Tenders"
          />
          <button className="pl-3">
            <FiSearch className="text-gray-900 text-[20px]" />
          </button>
        </div>
        <button>
          <GrNotification className="text-white text-[20px]" />
        </button>
        <div className="bg-rose-500 h-[30px] w-[30px] border-solid border-white border-[2px] flex justify-center items-center rounded-full">
          <h1 className="font-bold text-white leading-none">N</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
