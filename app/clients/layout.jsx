import ClientCard from "@/Components/clientCard/ClientCard";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between px-4 items-center">
        <h2 className=" text-3xl font-semibold py-4  ">Your Clients</h2>
        <div className="flex gap-3">
          <button className="px-2 py-1 bg-white shadow-md rounded-md border text-sm">
            Import
          </button>
          <button className="px-2 py-1 bg-violet-700 shadow-lg rounded-md border text-sm text-white">
            add customer
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7 px-4 my-4">
        <ClientCard title="Total Client" total="1025" rate="0.43%" levelUp />
        <ClientCard
          title="New Clients This Month"
          total="+12"
          rate="0.43%"
          levelUp
        />
        <ClientCard title="Active Now" total="316" rate="0.43%" levelUp />
      </div>
      {children}
    </div>
  );
}
