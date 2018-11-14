"use strict"
module.exports = () => {
    const express = require('express')
    const bodyParser = require('body-parser')
    
    const app = express.Router()

    app.use(bodyParser.json())

    app.get("/log", (req, res) => {
        const eventlogger = require('../services/eventlogger')(req.query.type)
        eventlogger.run().then(result => {
            res.send(JSON.stringify(result, null, 2))
        }).catch(err => {
            res.send(err)
        })
    })

    app.get("/history", (req, res) => {
        const gethistory = require('../services/gethistory')()
        gethistory.run().then(result => {
            res.render("history", { history : result })
        }).catch(err => {
            res.send(err)
        }) 
    })

    return app
}

