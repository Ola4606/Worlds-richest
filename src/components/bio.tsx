import React from "react";
import ReadMoreBtn from "./readmorebtn";

function Bio() {
  return (
    <div className="w-[300px] x-sm:w-[350px] text-center lg:w-[350px]">
      <p className="text-3xl font-bold font-header">1. Jeff Bezos</p>
      <p className="text-lg font-casual">Ceo of Amazon</p>
      <div className="block">
        <span className="text-xl font-bold font-casual">Networth: </span>
        <span className="text-xl font-casual">$11 Billion</span>
      </div>
      <div className="block mb-4 lg:mb-6">
        <span className="text-lg font-bold font-casual">Industry: </span>
        <span className="text-lg font-casual">Technology</span>
      </div>
      <ReadMoreBtn />
    </div>
  );
}

export default Bio;
