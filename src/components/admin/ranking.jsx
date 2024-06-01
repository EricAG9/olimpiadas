import React, { useState } from 'react';

export const Ranking = () => {
    const [rankings, setRankings] = useState([]);

    const adicionarRanking = (ranking) => {
        setRankings([...rankings, ranking]);
    };

    return (
        <div>
            <h2>Ranking</h2>
            {/* Formulário para adicionar novo ranking */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const modalidade = e.target.modalidade.value;
                const pontuacao = e.target.pontuacao.value;
                adicionarRanking({ modalidade, pontuacao });
            }}>
                <input type="text" name="modalidade" placeholder="Modalidade" required />
                <input type="number" name="pontuacao" placeholder="Pontuação" required />
                <button type="submit">Adicionar Ranking</button>
            </form>
            <ul>
                {rankings.map((ranking, index) => (
                    <li key={index}>{ranking.modalidade} - {ranking.pontuacao}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ranking;