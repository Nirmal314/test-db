import React from "react";

export default function Navitems(item) {
  return (
    <>
      <div className="text-black ease-in-out px-4 py-2 font-normal text-base transition-all duration-[250ms] hover:bg-[#1048ffb6] hover:rounded-xl hover:text-white">
        <p className="cursor-pointer">{item.title}</p>
      </div>
    </>
  );
}