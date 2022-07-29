import React from "react";
import Arrows from "./components/arrows";
import Bio from "./components/bio";
import ImgProfile from "./components/imgprofile";
import NavigationBar from "./components/navigationBar";

function App() {
  //  async function getData () {

  //   const res = await fetch('');
  //   const data = await res.json();

  //  }

  return (
    <div className="min-h-[100vh] max-h-[100vh] p-3 flex flex-col justify-between">
      <NavigationBar />

      {/* main */}

      <div
        className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center lg:items-center gap-3"
      >
        
       
        <ImgProfile />
        <Bio />
       
        
      </div>

      <Arrows />
    </div>
  );
}

export default App;
