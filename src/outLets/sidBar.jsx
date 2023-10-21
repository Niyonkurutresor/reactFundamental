import { Outlet } from "react-router-dom";
import { AppNav } from "../components/appNav";
export const SideBar = () => {
  return (
    <>
      <div className="lg:min-w-[30%] min-w-fit h-screen align-center p-4">
        <AppNav />
        <Outlet />
      </div>
    </>
  );
};
