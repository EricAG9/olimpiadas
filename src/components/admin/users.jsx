import React, { useState, useEffect } from 'react';

export const Users = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Simulando fetch de usuários
        const fetchedUsuarios = [
            { id: 1, nome: 'Usuário 1' },
            { id: 2, nome: 'Usuário 2' },
            // Mais usuários
        ];
        setUsuarios(fetchedUsuarios);
    }, []);

    return (
        <div>
            <h2>Usuários Cadastrados</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
