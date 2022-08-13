import React, {memo} from "react";

function NavigationBar() {
  {
    /* navigation bar */
  }
  return (
    <div className="bg-black py-1 px-1 sm:py-2 sm:px-2 md:py-4 md:px-3 rounded-md">
      <nav className="flex flex-col items-center x-sm:flex x-sm:flex-row x-sm:justify-between x-sm:items-center">
        <h1 className="font-title text-base x-sm:text-lg sm:text-xl md:text-2xl text-white">
          World's Richest (Top 100)
        </h1>

        <div className="text-xs md:text-sm font-casual font-light">
          <span className="text-white">
            Made by:{" "}
            <a
              href="https://laolu.netlify.app/"
              target="blank"
              className="text-blue-300"
            >
              Adeyemo OlaOluwa
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default memo(NavigationBar);
