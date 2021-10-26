
const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const imdbRouter = require('./helpers/imdb_router.js');
console.log("START")
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('movie_users');
    const imdbCollection = db.collection('imdbData');
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    const imdb = imdbRouter(imdbCollection)


    
    app.use('/api/users', usersRouter);
    app.use('/api/imdb', imdb);

  })
  .catch(console.error);

app.listen(5000, function() {
  console.log(`Movie Users server running on port ${this.address().port}`);
});

