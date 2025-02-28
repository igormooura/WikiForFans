import React, { useState } from "react";
import backgroundImage from "../img/nfl.jpg";
import Card from "../components/Card";

const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`bg-white opacity-90 p-4 rounded-lg shadow-lg text-center transition-all duration-500 ease-in-out
          w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-xl
          ${
            showSearchBox
              ? "w-[500px] h-[200px] translate-y-[-70%]"
              : "w-[400px]"
          }
        `}
      >
        <h1 className="text-2xl font-mono text-whitex mb-12">
          NFL/NBA WIKI FOR FANS
        </h1>

        <button
          className="bg-[#d1afaf] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 relative z-10"
          onClick={toggleSearchBox}
        >
          <p className="font-bold">
            {showSearchBox ? "Close Search" : "Start Trial"}
          </p>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showSearchBox ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Search NFL characters..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
          />
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          showSearchBox
            ? "transform translate-y-[-50px]"
            : "transform translate-y-0"
        }`}
      >
        <Card show={showSearchBox} />
      </div>
    </div>
  );
};

export default Home;