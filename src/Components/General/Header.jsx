import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./main-Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const MainHeader = () => {
  const nav = [
    { name: "Dashboard", path: "/startup-dashboard" },
    { name: "My Requests", path: "/requests" },
    { name: "My Professionals", path: "/professionals" },
    { name: "Contracts & Equity", path: "" },
    //{ name: "Messages", path: "" },
  ];

  return (
    <header className="flex  justify-between items-center py-5 px-5 border-b border-gray-300">
      <Link to={"/requests"} className="font-semibold w-20 text-primary">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav className="hidden md:block">
        <ul className="text-sm flex gap-10">
          {nav.map((nav) => (
            <li className="cursor-pointer">
              <NavLink to={nav.path}>{nav.name}</NavLink>{" "}
            </li>
          ))}
        </ul>
      </nav>
      <button className="font-medium text-sm border border-black rounded-md p-3  flex items-center gap-2">
        My Account
        <IoIosArrowDown />
      </button>
    </header>
  );
};

export const LandingHeader = () => {
  const navigate = useNavigate();

  const nav = [
    { name: "Startup requests", path: "/requests" },
    { name: "Find Professionals", path: "/professionals" },
    //{ name: "Contracts & Equity", path: "" },
    //{ name: "Messages", path: "" },
  ];
  return (
    <header className="flex items-center justify-between   md:px-10  ">
      <nav className=" hidden md:block">
        <ul className=" text-lg font-medium flex gap-10">
          {nav.map((nav) => (
            <li className="cursor-pointer">
              <NavLink to={nav.path}>{nav.name}</NavLink>{" "}
            </li>
          ))}
        </ul>
      </nav>

      <div className="font-semibold w-20 text-primary  ">
        <img
          className="cursor-pointer"
          onClick={() => navigate("/")}
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className=" flex gap-2 ">
        <button className="py-3 px-10 flex items-center w-fit text-white text-sm bg-[#004E64] rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
          <p className="">Login</p>
        </button>
        <button className="p-3 flex items-center w-fit border border-secondary  rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
          <MdArrowOutward />
          <p className="text-xs">Get Early Access</p>
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
