import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-lg max-h-screen h-screen m-auto w-full">
      <Outlet />
    </div>
  );
};

export default MainLayout;
