import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarButton from "../sideBarButton/SidebarButton.jsx";
import logo from "../../assets/logo.png";
import DB from "../../appwrite/services/db";

export default function Sidebar() {
  const selector = useSelector((state) => state.auth.status);
  const [userData, setUserData] = useState("");
  const [open, setOpen] = useState(window.innerWidth > 768); // Adjust the threshold as needed

  useEffect(() => {
    if (selector) {
      DB.getUser(JSON.parse(localStorage.user).phone.slice(3)).then((data) => {
        if (data.isAdmin) {
          setUserData(data.isAdmin);
        }
      });
    }
  }, [selector]);

  const buttonDetails = [
    {
      text: "Home",
      where: "",
    },
    {
      text: "Jobs",
      where: "jobs",
    },
    {
      text: "Courses",
      where: "courses",
    },
    {
      text: "All Course",
      where: "allcourse",
    },
    ...(userData === true
      ? [
          {
            text: "Create",
            where: "createjob",
          },
          {
            text: "Create Course",
            where: "createcourse",
          },
        ]
      : []),
  ];

  const handleResize = () => {
    setOpen(window.innerWidth > 768); // Adjust the threshold as needed
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`transition-all duration-500 ease-in right-0 h-screen w-fit px-5 py-7 sm:px-5 flex flex-col gap-5 shadow-md shadow-blue-100 ${open ? "open" : ""}`}>
      <img src={logo} alt="" className="w-32 h-5 mb-5 md:w-52 md:h-8 sm:w-96 sm:h-5 " />

      <span className="min-[1342px]:hidden text-3xl text-indigo-600 mr-1 pt-2">
        <ion-icon name="logo-iconic"></ion-icon>
      </span>

      <div onClick={() => setOpen(!open)} className="text-3xl absolute left-10 top-[103px] cursor-pointer min-[1342px]:hidden">
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      {/* Responsive Sidebar Buttons */}
      {open && (
        <div className="flex flex-col gap-5">
          {buttonDetails.map((item) => (
            <SidebarButton key={item.text} buttontext={item.text} where={item.where} icon={item.icon} />
          ))}
        </div>
      )}
    </div>
  );
}
