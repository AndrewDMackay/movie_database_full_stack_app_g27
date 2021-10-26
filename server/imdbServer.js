
const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27018', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('imdbData');
    const imdbCollection = db.collection('imdbDataSet');
    const imdbRouter = createRouter(imdbCollection);

    app.post('/api/imdb', (req, res) => {
      const newData = req.body;
      if (newData.hasOwnProperty("originalTitle") && newData.hasOwnProperty("genres")) {
        usersCollection
          .insertOne(newData)
          .then((result) => {
            res.json(result.ops[0]);
          })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      } else {
        res.status(400);
        res.send("please make movie has title and genre");
      }
    });

    app.use('/api/imdb', imdbRouter);
  })
  .catch(console.error);

app.listen(5001, function() {
  console.log(`IMDB server running on port ${this.address().port}`);
});