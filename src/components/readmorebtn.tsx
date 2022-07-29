import React, {memo} from "react";


type ReadMoreBtnPropType = {
  handleReadMoreClick: () => void,
  isReadMore: boolean
}

function ReadMoreBtn({handleReadMoreClick, isReadMore}: ReadMoreBtnPropType) {
  return (
    <div
      className="inline-block uppercase font-mono font-medium text-white rounded-md py-1 px-3 
      btn"
      onClick={handleReadMoreClick}
    >
      <span>{isReadMore ? "Read Less" : "Read More"}</span>
    </div>
  );
}

export default memo(ReadMoreBtn);
