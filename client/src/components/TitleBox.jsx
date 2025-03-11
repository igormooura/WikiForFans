import React from "react";

const TitleBox = ({ showSearchBox, toggleSearchBox }) => {
  return (
    <div>
      <h1 className="text-2xl font-mono mb-10">NFL/NBA WIKI FOR FANS</h1>
      <h6 className="font-mono">Made by Igor Moura</h6>
      <button
        className="bg-[#921717] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 relative z-10"
        onClick={toggleSearchBox}
      >
        <p className="text-white">{showSearchBox ? "Close Search" : "Start Trial"}</p>
      </button>
    </div>
  );
};

export default TitleBox;