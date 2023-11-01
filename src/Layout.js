import React from "react";
import SideBar from "./components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row  ">
      <div className="flex flex-row" >
        <SideBar />
      </div>

      <div  >
        {children}
        </div>
    </div>
  );
};

export default Layout;
