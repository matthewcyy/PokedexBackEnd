
const express = require('express');
const app = express();

app.use('/api', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

  app.listen(3000, () => console.log('API is running on http://localhost:3000/api'));