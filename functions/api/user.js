const express = require('express');
const app = express();

app.get('/:username', (req, res) => {
  const username = req.params.username;
  res.json({ username });
});

module.exports = app;
