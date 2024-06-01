import React, { useState } from 'react';
import { addGame } from '../../api';

function AdminAddGameForm({ onAddGame }) {
  const [game, setGame] = useState({
    sport: '',
    team1: '',
    team2: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addGame(game);
      onAddGame(response.data);
      setGame({
        sport: '',
        team1: '',
        team2: '',
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('Erro ao adicionar jogo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="sport"
        value={game.sport}
        onChange={handleChange}
      >
        <option value="">Selecione o esporte</option>
        <option value="Futebol">Futebol</option>
        <option value="Basquete">Basquete</option>
        <option value="Vôlei">Vôlei</option>
        {/* Adicione mais opções de esportes conforme necessário */}
      </select>
      <input
        type="text"
        name="team1"
        value={game.team1}
        onChange={handleChange}
        placeholder="Time 1"
      />
      <input
        type="text"
        name="team2"
        value={game.team2}
        onChange={handleChange}
        placeholder="Time 2"
      />
      <input
        type="date"
        name="date"
        value={game.date}
        onChange={handleChange}
        placeholder="Data"
      />
      <input
        type="time"
        name="time"
        value={game.time}
        onChange={handleChange}
        placeholder="Horário"
      />
      <button type="submit">Adicionar Jogo</button>
    </form>
  );
}

export default AdminAddGameForm;
