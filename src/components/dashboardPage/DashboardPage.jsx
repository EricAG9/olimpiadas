import React from 'react';
import './dashboard.css';
import Cards from '../cards/Cards';

const DashboardPage = () => {
  return (
    <>
      <div className="container">
        <h2>Olimpiadas de Apuiarés</h2>
      </div>
        <Cards className='card' />
    </>
  );
}

export default DashboardPage;
