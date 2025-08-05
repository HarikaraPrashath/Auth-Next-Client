"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiMiniBell } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const storeUser = localStorage.getItem("user");

    if (storeUser) {
      try {
        const parseUser = JSON.parse(storeUser);
        const name = parseUser?.user?.name;

        if (name) setUserName(name);
      } catch (error) {
        console.error("Error parsing user from localStorage", error);
      }
    }
  }, []);

  return (
    <div className="w-full flex mt-6  text-black ">
      <div className="w-[400px] h-[50px] mr-80  flex justice-end relative mx-2 ">
        <IoSearchSharp className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl" />
        <input
          placeholder="Search here..."
          className="w-full h-full pl-12 pr-4 rounded-full border border-green-200 focus:outline-none"
        />
      </div>
      <HiMiniBell className="w-8 h-8 mt-3" />
      {/* Profile placeholder */}
      <div className="ml-6 mt-1 border-l w-[200px] h-10 border-2px flex justify-end items-center space-x-2 pl-2">
        <div>
          <Image
            src="/face.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold">{userName || "Guest"}</p>
          <p className="text-sm text-gray-600">Jun 25 2024 06:00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
