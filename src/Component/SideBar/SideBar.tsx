import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import style from "./sideBar.module.css"
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../Context/AuthContext";

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    interface User {
      id: number;
      name: string;
      email: string;
      firstName: string;
      lastName: string;
      image: string;
    }
  
    interface AuthcontextType {
      userData: User | null;
    }
    const { userData } = useContext(AuthContext) as AuthcontextType;
    console.log(userData);
    // logout
    const logOut = () => {
      localStorage.removeItem("userToken");
      navigate("/login");
    };
    return (
      <div className="  h-full overflow-hidden">
        <Sidebar
          collapsed={collapsed}
          className={` ${style.sidecontainer} h-full bg-sidebg `}
        >
          <div className="flex items-center justify-between px-4 py-4">
            {!collapsed && (
              <h1 className="lef relative text-xl font-bold">UMS</h1>
            )}
            {collapsed ? (
              <FaArrowRight
                onClick={toggleCollapsed}
                className="cursor-pointer"
                size={25}
              />
            ) : (
              <FaArrowLeft
                onClick={toggleCollapsed}
                className="cursor-pointer"
                size={25}
              />
            )}
          </div>
  
          <div className="data flex flex-col my-10 justify-center items-center">
            <img
              src={userData?.image}
              alt=""
              className={`${collapsed ? "w-16 h-16" : "w-28 h-28"} rounded-full `}
            />
            <h4
              className={`my-2 text-center font-bold ${
                collapsed ? "text-xs" : "text-lg"
              } `}
            >
              {userData?.firstName} {userData?.lastName}
            </h4>
            <p className={`text-yellow-500 font-bold ${collapsed && "text-xs"}`}>
              Admin
            </p>
          </div>
  
          <Menu className="flex flex-col justify-center items-center">
            <MenuItem
              className="text-center"
              icon={<IoHomeOutline size={24} />}
              component={<Link to="/dashboard" />}
            >
              {!collapsed && "Home"}
            </MenuItem>
            {/* <MenuItem
                className="text-center"
                icon={<TbUsersGroup size={24} />}
                component={<Link to="/dashboard/userlist" />}
              >
                {!collapsed && "Users"}
              </MenuItem> */}
            <MenuItem
              className="text-center"
              icon={<IoPersonAddOutline size={24} />}
              component={<Link to="/dashboard/adduser" />}
            >
              {!collapsed && "Add User"}
            </MenuItem>
            <MenuItem
              className="text-center"
              icon={<CgProfile size={24} />}
              component={<Link to="/dashboard/profile" />}
            >
              {!collapsed && "Profile"}
            </MenuItem>
            <MenuItem
              className="text-center mt-28"
              icon={<CiLogout size={24} />}
              component={<Link to="" />}
              onClick={logOut}
            >
              {!collapsed && "Log Out"}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    );
}
