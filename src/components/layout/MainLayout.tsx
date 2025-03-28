
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-fitness-primary">
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
