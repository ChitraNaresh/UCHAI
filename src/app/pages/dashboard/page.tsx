import Navbar from "@/app/components/navbar/Navbar";
import ViewsHeader from "@/app/components/viewsHeader/ViewsHeader";
import React from "react";

const Dashboard = () => {
  return <div className="h-[100%] w-full flex flex-col gap-[14px]">
    <Navbar/>
    <hr/>
    <div>
      <ViewsHeader/>
    </div>
  </div>;
};

export default Dashboard;
