import React, { useState, useEffect } from "react";
import Arrows from "./components/arrows";
import Bio from "./components/bio";
import ImgProfile from "./components/imgprofile";
import Loading from "./components/loading";
import NavigationBar from "./components/navigationBar";
import { getBillionaireData } from "./functions/getBillionaireData";

let currentCount = 0;
let allBillionaireData: [] = [];

function App() {
  let [currentBillionaireData, setCurrentBillionaireData] = useState({});
  // let [allBillionaireData, setAllBillionaireData] = useState([]);

  let [loadingPageState, setLoadingPageState] = useState(0); //0- loading | 1-has data | 2-no internet
  let [isReadMore, setIsReadMore] = useState(false);
  // let [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const data = await getBillionaireData();

      if (data !== null) {
        // setAllBillionaireData(data);
        allBillionaireData = data;
       
        setCurrentBillionaireData(data[currentCount]);
       
        setLoadingPageState(1);
       
      } else {
        setLoadingPageState(2);
      }
    }

    getData();
  }, []);

  function toggleReadMore() {
    setIsReadMore((prevIsReadMore) => !prevIsReadMore);
  }

  function onClickBack() {
    if (currentCount !== 0) {
      setCurrentBillionaireData(allBillionaireData[currentCount - 1]);
      currentCount--;
      if (isReadMore) {
        setIsReadMore(false);
      }
    }
  }

  function onClickNext() {
    if (currentCount !== 99) {
      setCurrentBillionaireData(allBillionaireData[currentCount + 1]);
      currentCount++;
      if (isReadMore) {
        setIsReadMore(false);
      }
    }
  }

  

  return loadingPageState !== 1 ? (
    <div className="min-h-[100vh] min-w-[100vw] p-3 flex flex-col justify-between">
      <NavigationBar />
        <Loading />
        <p></p>
    </div>
  ) : (
    <div className="min-h-[100vh] max-h-[100vh] p-3 flex flex-col justify-between">
      <NavigationBar />

      {/* main */}

      <div className="flex flex-col items-center py-2 lg:flex lg:flex-row lg:justify-center lg:items-center lg:my-5 gap-3">
        <ImgProfile currentBillionaireData={currentBillionaireData} />
        <Bio
          currentBillionaireData={currentBillionaireData}
          isReadMore={isReadMore}
          handleReadMoreClick={toggleReadMore}
        />
      </div>

      <Arrows handleClickNext={onClickNext} handleClickBack={onClickBack} />
    </div>
  );
}

export default App;
