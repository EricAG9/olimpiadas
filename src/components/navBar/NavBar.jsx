import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='home'>
        <Link className="navbar-brand" to="/">Olimpíadas</Link> {/* Colocar logo do projeto */}
      </div> 
    
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Games">Jogos</Link>
          </li>
        </ul>
      <div className='login'>
        <form class="d-flex" role="Login">
          <button class="btn btn-outline-success" type="submit">
            <Link to='/login' className='link'>Login</Link>
          </button>
        </form>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
