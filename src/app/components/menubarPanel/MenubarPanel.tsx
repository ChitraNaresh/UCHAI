import React, { ReactNode } from "react";

type MenubarPanelProps = {
  children: ReactNode;
};

const MenubarPanel: React.FC<MenubarPanelProps> = ({ children }) => {
  return (
    <div className="bg-black h-[100vh] flex py-[14px] pr-[16px]">
      <div className="w-[70px]">Hi</div>
      <div className="bg-zinc-700 w-full rounded-xl py-[14px] pl-[14px] pr-[10px]">{children}</div>
    </div>
  );
};

export default MenubarPanel;
