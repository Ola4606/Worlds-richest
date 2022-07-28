import React from "react";

function NavigationBar() {
  {
    /* navigation bar */
  }
  return (
    <div className="bg-black py-2 px-2 md:py-4 md:px-3 rounded-md">
      <nav className="flex justify-between items-center">
        <h1 className="font-header text-xl md:text-2xl text-white">
          World Richest
        </h1>

        <div className="flex">
          <p className="text-xs md:text-sm text-white font-casual font-light">
            Made by:
          </p>
          <a
            href="https://twitter.com/4real_Dev"
            target="blank"
            className="text-xs md:text-sm text-blue-300 ml-1 md:ml-2 font-casual font-light"
          >
            Adeyemo OlaOluwa
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
