import React from "react";

function ImgProfile() {
  return (
    <div className="w-[350px] aspect-square md:w-[420px] overflow-hidden rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1658932501338-c4e396dc76aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Profile Image"
        className="w-[100%] aspect-square object-cover"
      />
    </div>
  );
}

export default ImgProfile;
