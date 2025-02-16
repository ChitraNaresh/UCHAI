import React from "react";
import { LuChartNoAxesColumnDecreasing } from "react-icons/lu";

const tabsList = [
  {
    name: "List View",
    value: "listView",
  },
  {
    name: "Board View",
    value: "boardView",
  },
];

const ViewsHeader: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[70%] bg-black px-[10px] rounded-[30px]">
        {tabsList.map((item, index) => {
          return <button key={index} className="p-[10px] text-white tracking-wide text-[13px] font-[600]">{item.name}</button>;
        })}
      </div>
      <div className="flex items-center gap-[20px]">
        <button className="p-[10px] text-white tracking-wide text-[13px] bg-black font-[600] border-solid border-[2px] border-yellow-500">View Tender Details</button>
        <button className="border-solid border-[2px] border-yellow-500 p-[10px]  font-[600] text-white tracking-wide text-[13px] rounded-[30px]">Columns</button>
      </div>
    </div>
  );
};

export default ViewsHeader;
