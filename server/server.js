
const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('movie_users');
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);

    // app.post('/api/users', (req, res) => {
    //   const newData = req.body;
    //   if (newData.hasOwnProperty("name") && newData.hasOwnProperty("email")) {
    //     usersCollection
    //       .insertOne(newData)
    //       .then((result) => {
    //         res.json(result.ops[0]);
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //         res.status(500);
    //         res.json({ status: 500, error: err });
    //       });
    //   } else {
    //     res.status(400);
    //     res.send("please make sure user has name and email");
    //   }
    // });

    app.use('/api/users', usersRouter);
  })
  .catch(console.error);

app.listen(5000, function() {
  console.log(`Movie Users server running on port ${this.address().port}`);
});

