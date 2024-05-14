import React from 'react';


const RegisterPage = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="blue-container">
            <h2 className="text-center mb-4 text-white">Cadastro</h2>
            <input type="text" className="input-field" placeholder="Nome" />
            <input type="email" className="input-field" placeholder="Email" />
            <input type="password" className="input-field" placeholder="Senha" />
            <button type="submit" className="btn btn-primary">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
