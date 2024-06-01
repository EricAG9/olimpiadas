import React from 'react';

function GameCard({ game }) {
  return (
    <div className="game-card">
      <h3>{game.team1} vs {game.team2}</h3>
      <p>Data: {game.date}</p>
      <p>Horário: {game.time}</p>
    </div>
  );
}

export default GameCard;
