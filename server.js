const express = require('express');
const db = require('./config/connection');
const routes = require('./routes'); // Ensure this path is correct

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes); // Make sure `routes` is a valid middleware

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});




//// need to doubl echeck lines 3 and 11