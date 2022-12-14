import React, {memo} from "react";



type ArrowsPropType = {

  handleClickNext: () => void,
  handleClickBack: () => void,

}

function Arrows({handleClickNext, handleClickBack}: ArrowsPropType) {
  return (
    <div className="flex justify-center gap-6">
      <div className="btn w-7 h-7 rounded-full p-1 flex justify-center items-center mb-2" onClick={handleClickBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </div>

      <div className="btn w-7 h-7 rounded-full p-1 flex justify-center items-center mb-2" onClick={handleClickNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
}

export default memo(Arrows);
