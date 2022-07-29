import React, {memo} from "react";
import ReadMoreBtn from "./readmorebtn";

type BioPropType = {
  currentBillionaireData: any,
  isReadMore: boolean,
  handleReadMoreClick: () => void,
}

function Bio({currentBillionaireData, isReadMore, handleReadMoreClick}: BioPropType ) {
  return (
    <div className="w-[300px] x-sm:w-[350px] text-center lg:w-[350px]">
      <p className="text-3xl font-bold font-header mb-2 lg:mb-6">{currentBillionaireData["rank"]}. {currentBillionaireData["person"]["name"]}</p>

      <div className="block">
        <span className="text-xl font-bold font-casual">Networth: </span>
        <span className="text-xl font-casual">${(String(currentBillionaireData["finalWorth"]).split(".")[0] + "000000").slice(0, -9)} Billion</span>
      </div>
      <div className="block">
        <span className="text-lg font-bold font-casual">Source: </span>
        <span className="text-lg font-casual">{currentBillionaireData["source"]}</span>
      </div>
      <div className="block">
      <span className="text-lg font-bold font-casual">Residence: </span>
        <span className="text-lg font-casual">{currentBillionaireData["countryOfCitizenship"]}</span>
      </div>

      {

        isReadMore ?

        <div className="block mb-4 lg:mb-6">
        <span className="text-lg font-bold font-casual underline">Bio: </span>
        <span className="text-lg font-casual">{currentBillionaireData["bios"].map((bio: string, index: number) => {
          return <p key={index}>{bio}</p>
        })}</span>
      </div>

      :

      <div className="block mb-4 lg:mb-6">
        <span className="text-lg font-bold font-casual underline">Bio: </span>
        <span className="text-lg font-casual block">{(currentBillionaireData["bios"][0].split(' ').slice(0, 7).join(' ')) + "..."}</span>
      </div>

      }
      
      <ReadMoreBtn handleReadMoreClick={handleReadMoreClick} isReadMore={isReadMore}/>
    </div>
  );
}

export default memo(Bio);
