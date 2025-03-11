import React, { useState } from "react";
import Card from "../components/Card";
import { useQuery, gql } from "@apollo/client";
import TitleBox from "../components/TitleBox";
import SearchBox from "../components/SearchBox";

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
    <div className="w-full flex flex-col items-center justify-center bg-black">
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
        <TitleBox
          showSearchBox={showSearchBox}
          toggleSearchBox={toggleSearchBox}
        />

        <SearchBox
          showSearchBox={showSearchBox}
          searchPlayer={searchPlayer}
          setSearchPlayer={setSearchPlayer}
          handleSearchPlayer={handleSearchPlayer}
        />
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
