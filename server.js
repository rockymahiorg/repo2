// server.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const SECRET_VALUE = process.env.DB_PASSWORD || 'no-secret';

app.get('/', (req, res) => {
  res.send(`Hello from Docker! Secret value: ${SECRET_VALUE}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
