import React, { useState, useEffect } from 'react';
import AdminAddGameForm from '../components/admin/AdminAddGameForm';
import { getGames } from '../api';

export const AdmPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const response = await getGames();
      setGames(response.data);
    }
    fetchGames();
  }, []);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div>
      <h1>Página de Administração</h1>
      <AdminAddGameForm onAddGame={addGame} />
      <div>
        <h2>Jogos Adicionados</h2>
        <ul>
          {games.map((game, index) => (
            <li key={index}>
              {game.sport}: {game.team1} vs {game.team2} em {game.date} às {game.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdmPage;