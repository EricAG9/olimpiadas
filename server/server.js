const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let games = [];

app.post('/api/games', (req, res) => {
  const game = req.body;
  games.push(game);
  res.status(201).send(game);
});

app.get('/api/games', (req, res) => {
  res.status(200).send(games);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
