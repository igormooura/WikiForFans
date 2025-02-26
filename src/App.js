import React from "react";
import backgroundImage from "./img/patrick-mahomes.png";

function App() {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-mono text-whitex mb-12">NFL/NBA WIKI FOR FANS</h1>
        
        <button className="bg-[#d1afaf] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
          <p className="font-bold">
            Start Trial
            </p>
        </button>
      </div>
    </div>
  );
}

export default App;
