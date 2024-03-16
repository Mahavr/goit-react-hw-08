import { NavBar } from "./NavBar/NavBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
