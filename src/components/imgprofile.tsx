import React, {memo} from "react";
import { BillionaireDataPropType } from "../types/billionaireDataPropType";

function ImgProfile({currentBillionaireData}: BillionaireDataPropType) {


  const imageExists: boolean =  currentBillionaireData["person"]["imageExists"];
  let imageUrl = "";

  if(imageExists) {

    imageUrl = currentBillionaireData["person"]["squareImage"];

  } else{
    imageUrl = "https://i.pinimg.com/564x/16/18/20/1618201e616f4a40928c403f222d7562.jpg"
  }

  return (

    




    <div className="w-[300px] x-sm:w-[350px] aspect-square lg:w-[420px] overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-[100%] aspect-square object-cover"
      />
    </div>
  );
}

export default memo(ImgProfile);
