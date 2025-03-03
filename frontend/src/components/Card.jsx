import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import InfoCard from "./InfoCard";

const GET_PLAYERS = gql`
query GetAllPlayers {
  getAllPlayers {
    age
    height
    id
    name
    number
    photo
    position
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

const Card = ({ show, playerData, openInfoCard }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const {
    data: getPlayersData,
    error: getPlayersError,
    loading: getPlayersLoading,
  } = useQuery(GET_PLAYERS);

  if (getPlayersLoading) return <p>Loading...</p>;
  if (getPlayersError) return <p>{getPlayersError.message}</p>;

  const playersToDisplay = playerData || getPlayersData?.getAllPlayers;

  if (!playersToDisplay || playersToDisplay.length === 0) {
    return <p>No players found.</p>;
  }

  const handleOpenInfoCard = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseInfoCard = () => {
    setSelectedPlayer(null);
  };

  return (
    <div
      className={`max-w-[1200px] max-h-1 mx-auto my-auto grid lg:grid-cols-1 md:grid-cols-3  xl:grid-cols-4 sm:grid-cols-3 gap-7 p-6 transition-all duration-500 ease-in-out transform  ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {playersToDisplay.map((player, index) => (
        <div
          key={index}
          className="w-full h-120 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white"
        >
          <div className="w-full h-[200px] sm:h-[200px] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <img
              src={player.photo}
              alt={player.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <h2 className="text-lg font-bold mb-2">{player.name}</h2>
          <p className="text-gray-600">Position: {player.position}</p>
          <p className="text-gray-600">Height: {player.height}</p>
          <p className="text-gray-600">Age: {player.age}</p>
          <p className="text-gray-600">Number: {player.number}</p>

          <button
            className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={() => handleOpenInfoCard(player)}
          >
            Learn More
          </button>
        </div>
      ))}

      {selectedPlayer && (
        <InfoCard player={selectedPlayer} onClose={handleCloseInfoCard} />
      )}
    </div>
  );
};

export default Card;
