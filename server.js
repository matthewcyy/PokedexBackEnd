const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/api', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});