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
  const { data, error, loading } = useQuery(GET_PLAYERS);

  const handleOpenInfoCard = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseInfoCard = () => {
    setSelectedPlayer(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const playersToDisplay = playerData || data?.getAllPlayers;

  if (!playersToDisplay?.length) return <p>No players found.</p>;

  return (
    <div className={`max-w-[1200px] mx-auto grid lg:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-3 gap-7 p-10 transition-all duration-500 ease-in-out ${
      show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`}>
      {playersToDisplay.map((player) => (
        <div
          key={player.id}
          className="w-full shadow-lg shadow-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white"
        >
          <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-4">
            <img
              src={player.photo}
              alt={player.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-lg font-bold mb-2 font-mono">{player.name}</h2>
          <p className="font-mono">Position: {player.position}</p>
          <p className="font-mono">Height: {player.height}</p>
          <p className="font-mono">Age: {player.age}</p>
          <p className="font-mono">Number: {player.number}</p>
          <button
            className="mt-4 font-mono bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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