import React, { useState, useEffect } from 'react';

function GamesPage({ games }) {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    // Agrupar os jogos por esporte
    const sportsData = games.reduce((acc, game) => {
      if (!acc[game.sport]) {
        acc[game.sport] = [];
      }
      acc[game.sport].push(game);
      return acc;
    }, {});

    setSports(sportsData);
  }, [games]);

  return (
    <div>
      <h1>Página de Jogos</h1>

      {Object.keys(sports).map((sport, index) => (
        <div key={index}>
          <h2>{sport}</h2>
          <table>
            <thead>
              <tr>
                <th>Time 1</th>
                <th>Time 2</th>
                <th>Data</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              {sports[sport].map((game, idx) => (
                <tr key={idx}>
                  <td>{game.team1}</td>
                  <td>{game.team2}</td>
                  <td>{game.date}</td>
                  <td>{game.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default GamesPage;
 