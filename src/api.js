import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const addGame = (game) => {
  return axios.post(`${API_URL}/games`, game);
};

export const getGames = () => {
  return axios.get(`${API_URL}/games`);
};
