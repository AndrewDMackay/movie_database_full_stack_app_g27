
const express = require('express');
const ObjectID = require('mongodb').ObjectID

const imdbRouter = function (collection) {

    const router = express.Router();


    // INDEX - Get all users from MongoDB and serve as JSON..

    router.get('/', (req, res) => {
        console.log(req)
        collection.find().toArray()
            .then((docs) => { res.json(docs) })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })


    // SHOW - Get one user back from its ID and serve as JSON..

    router.get('/:id', (req, res) => {
        const id = req.params.id
        collection.findOne({ _id: ObjectID(id) })
            .then((doc) => { res.json(doc) })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })

    router.get('/:originalTitle', (req, res) => {
        const originalTitle = req.params.originalTitle
        collection.findOne({ originalTitle: originalTitle })
            .then((doc) => { res.json(doc) })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })

    // router.get('/:genre', (req, res) => {
    //     const genre = req.params.genre
    //     collection.find({ genres: {$regex: genre} }).toArray()
    //         .then((docs) => { res.json(docs) })
    //         .catch((err) => {
    //             console.error(err)
    //             res.status(500)
    //             res.json({ status: 500, error: err })
    //         })
    // })


    // CREATE - Post new user and persist to the database..

    router.post('/', (req, res) => {
        const newData = req.body
        collection.insertOne(newData)
            .then((result) => { res.json(result.ops[0]) })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })


    // // DESTROY - Delete a user by its ID..

    // router.delete('/:id', (req, res) => {
    //     const id = req.params.id
    //     collection.deleteOne({ _id: ObjectID(id) })
    //         .then((result) => { res.json(result) })
    //         .catch((err) => {
    //             console.error(err)
    //             res.status(500)
    //             res.json({ status: 500, error: err })
    //         })
    // })

    
    // // UPDATE - Update a user that already exisits..
    // router.put('/:id', (req, res) => {
    //     const id = req.params.id
    //     const updatedData = req.body
    //     collection.updateOne(
    //         { _id: ObjectID(id) },
    //         { $set: updatedData }
    //     )
    //         .then((result) => { res.json(result) })
    //         .catch((err) => {
    //             console.error(err)
    //             res.status(500)
    //             res.json({ status: 500, error: err })
    //         })
    // })

    return router;

};

module.exports = imdbRouter;

