import React from 'react';
import "./pages.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="blue-container">
            <h2 className="text-center mb-4 text-white">Login</h2>
            <input type="email" className="input-field" placeholder="Email" />
            <input type="password" className="input-field" placeholder="Senha" />
            <button type="submit" className="btn btn-primary">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
