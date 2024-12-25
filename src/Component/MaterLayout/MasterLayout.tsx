import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

export default function MasterLayout() {
  return (
    <div className=" grid grid-cols-[.1fr_6fr] h-full">
    <div className="">
      <SideBar />
    </div>
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  </div>

  )
}
