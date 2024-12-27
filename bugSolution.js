const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.is('application/json')) {
    return res.status(400).json({ error: 'Invalid Content-Type' });
  }
  console.log(req.body);
  res.send('OK');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});