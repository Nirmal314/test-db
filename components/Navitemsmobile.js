import React from "react";

export default function Navitems(item) {
  return (
    <>
      <div className="mobile:text-sm rounded-md w-full flex justify-center items-center text-white border-none font-normal text-base px-4 mobile:py-4 nav:py-2">
        <p className="cursor-pointer">{item.title}</p>
      </div>
    </>
  );
}
