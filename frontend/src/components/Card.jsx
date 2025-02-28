import React from 'react';

const Card = ({ show }) => {
  return (
    <div
      className={`max-w-[1200px] max-h-1 mx-auto  grid md:grid-cols-4 gap-7 p-4 transition-all duration-500 ease-in-out transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="w-full h-120 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
        <div className="w-full h-[200px] sm:h-[200px] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500">futura imagem</span>
        </div>

        <h2 className="text-lg font-bold mb-2">Card Title</h2>
        <p className="text-gray-600">
          This is a sample card content. You can add more details here.
        </p>
        <p className="text-gray-600">
          This is a sample card content. You can add more details here.
        </p>
        <p className="text-gray-600">
          This is a sample card content. You can add more details here.
        </p>
        <p className="text-gray-600">
          This is a sample card content. You can add more details here.
        </p>
        <p className="text-gray-600">
          This is a sample card content. You can add more details here.
        </p>


        <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
       
    </div>
  );
};


export default Card;