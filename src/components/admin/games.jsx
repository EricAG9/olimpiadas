import React from 'react';

export const Games = ({ tabela }) => {
    return (
        <div>
            <h2>Jogos Atuais</h2>
            <ul>
                {tabela.map((jogo, index) => (
                    <li key={index}>{jogo.modalidade} - {jogo.data}</li>
                ))}
            </ul>
        </div>
    );
};

export default Games;
