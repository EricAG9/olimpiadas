import React, { useState } from 'react';

export const TableGames = () => {
    const [tabela, setTabela] = useState([]);

    const adicionarJogo = (jogo) => {
        setTabela([...tabela, jogo]);
    };

    return (
        <div>
            <h2>Tabela de Jogos</h2>
            {/* Formulário para adicionar novo jogo */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const modalidade = e.target.modalidade.value;
                const data = e.target.data.value;
                adicionarJogo({ modalidade, data });
            }}>
                <input type="text" name="modalidade" placeholder="Modalidade" required />
                <input type="date" name="data" required />
                <button type="submit">Adicionar Jogo</button>
            </form>
            <ul>
                {tabela.map((jogo, index) => (
                    <li key={index}>{jogo.modalidade} - {jogo.data}</li>
                ))}
            </ul>
        </div>
    );
};

export default TableGames;