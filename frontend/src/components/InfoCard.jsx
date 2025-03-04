import React from "react";

const InfoCard = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{player.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        <div className="space-y-4">
          <p><strong>Position:</strong> {player.position}</p>
          <p><strong>Team:</strong> {player.team.name}</p>
          <p><strong>Number:</strong> {player.number}</p>
          <p><strong>Age:</strong> {player.age}</p>
          <p><strong>Height:</strong> {player.height}</p>
          <p><strong>Weight:</strong> {player.weight}</p>
          <p><strong>Games Played:</strong> {player.stats?.gamesPlayed}</p>
          <p><strong>Touchdowns:</strong> {player.stats?.touchdowns}</p>
          <p><strong>Yards:</strong> {player.stats?.yards}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;