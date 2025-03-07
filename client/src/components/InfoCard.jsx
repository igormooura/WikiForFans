import React from "react";
import { motion } from "framer-motion"
import ReactDOM from "react-dom";

const InfoCard = ({ player, onClose }) => {
  if (!player) return null;

  return ReactDOM.createPortal(
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-mono">Characters about: {player.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
            >
              &times;
            </button>
          </div>

          <div className="space-y-4">
            <p className="font-mono">
              <strong>Position:</strong> {player.position}
            </p>
            <p className="font-mono">
              <strong>Team:</strong> {player.team.name}
            </p>
            <p className="font-mono">
              <strong>Number:</strong> {player.number}
            </p>
            <p className="font-mono">
              <strong>Age:</strong> {player.age}
            </p>
            <p className="font-mono">
              <strong>Height:</strong> {player.height}
            </p>
            <p className="font-mono">
              <strong>Weight:</strong> {player.weight}
            </p>
            <p className="font-mono">
              <strong>Games Played:</strong> {player.stats?.gamesPlayed}
            </p>
            <p className="font-mono">
              <strong>Touchdowns:</strong> {player.stats?.touchdowns}
            </p>
            <p className="font-mono">
              <strong>Yards:</strong> {player.stats?.yards || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>,
    document.body
  );
};

export default InfoCard;
