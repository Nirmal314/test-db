import React from "react";
import mongoose from "mongoose";
import Schemes from "../models/Schemes";

export default function getSchemes({schemes}) {
    return (
        <>
          <div className="flex flex-col w-full h-screen justify-center items-center">
            {schemes.map((scheme, i) => (
              <p key={i} className="text-2xl">
                {scheme.name}
              </p>
            ))}
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
