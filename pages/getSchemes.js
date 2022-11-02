import React from "react";
import mongoose from "mongoose";
import Schemes from "../models/Schemes";
import { useRouter } from "next/router";

export default function getSchemes({ schemes, hideSidebar }) {
  const router = useRouter();
  return (
    <>
      <div className="pc:mt-24 nav:mt-24 mobile:mt-20">
        <section
          className="bg-gradient-to-br from-[rgba(255,153,51,1)] via-white to-[rgba(19,136,8,1)] relative flex justify-center overflow-y-hidden"
          onClick={hideSidebar}
        >
          {/* <section className="bg-gradient-to-br from-[rgba(255,153,51,1)] via-white to-[rgba(19,136,8,1)] relative mt-24 mobile:mt-[5rem] flex justify-center w-full h-[89.75vh] overflow-y-hidden"> */}
          <div className="mt-20 w-1/2 mobile:w-[90%] mobile:mt-2 flex flex-col h-screen">
            <div className="overflow-y-auto h-3/4">
              <table className="relative w-full text-sm text-left text-gray-200">
                <thead className="">
                  <tr>
                    <th className="sticky top-0 py-3 px-6 bg-gray-800 text-md text-white uppercase">
                      Catagory
                    </th>
                    <th className="sticky top-0 py-3 px-6 bg-gray-800 text-md text-white uppercase">
                      No.
                    </th>
                    <th className="sticky top-0 py-3 px-6 bg-gray-800 text-md text-white uppercase">
                      Schemes
                    </th>
                    <th className="sticky top-0 py-3 px-6 bg-gray-800 text-md text-white uppercase">
                      Scheme info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schemes.map((scheme, i) => {
                    return (
                      <tr className="border-b bg-gray-600" key={i}>
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-white whitespace-nowrap"
                        >
                          Catagory
                        </th>
                        <td className="py-4 px-6 cursor-pointer">
                          {scheme.id}
                        </td>
                        <td
                          className="py-4 px-6 cursor-pointer font-bold"
                          onClick={() => router.push("/")}
                        >
                          {scheme.name}
                        </td>
                        <td className="py-4 px-6 cursor-pointer">
                          {scheme.scheme_info}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const schemes = await Schemes.find();
  return {
    props: {
      schemes: JSON.parse(JSON.stringify(schemes)),
    },
  };
}
