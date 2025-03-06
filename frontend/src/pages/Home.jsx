import React, { useState } from "react";
import Card from "../components/Card";
import { useQuery, gql } from "@apollo/client";

const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchPlayer, setSearchPlayer] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  const GET_PLAYER_BY_NAME = gql`
    query SearchPlayersByName($name: String!) {
      searchPlayersByName(name: $name) {
        id
        name
        height
        age
        number
        position
        photo
        stats {
          gamesPlayed
          touchdowns
          yards
        }
        team {
          id
          name
        }
        weight
      }
    }
  `;

  const { data, error, loading, refetch } = useQuery(GET_PLAYER_BY_NAME, {
    variables: { name: searchPlayer },
    skip: !searchClicked,
  });

  const handleSearchPlayer = async () => {
    if (searchPlayer.trim() === "") return;
    setSearchClicked(true);
    try {
      await refetch({ name: searchPlayer });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center bg-black">
      <div
        className={`bg-white opacity-90 p-4 rounded-lg shadow-lg text-center transition-all duration-500 ease-in-out mt-40
          w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-xl shadow-white
          ${
            showSearchBox
              ? "w-[500px] h-[200px] translate-y-[-70%]"
              : "w-[400px]"
          }
        `}
      >
        <h1 className="text-2xl font-mono text-whitex mb-10">
          NFL/NBA WIKI FOR FANS
        </h1>
        <h6 className="font-mono">Made by Igor Moura</h6>

        <button
          className="bg-[#921717] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 relative z-10"
          onClick={toggleSearchBox}
        >
          <p className=" text-white">
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-nxone focus:border-blue-500 mt-4"
            onChange={(e) => setSearchPlayer(e.target.value)}
          />
          <button
            onClick={handleSearchPlayer}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>

      <div
        className={`w-[90%] transition-all duration-500 ease-in-out ${
          showSearchBox
            ? "transform translate-y-[-10px]"
            : "transform translate-y-0"
        }`}
      >
        <Card show={showSearchBox} playerData={data?.searchPlayersByName} />
      </div>
    </div>
  );
};

export default Home;
