const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
const {mongoose} = require('./lib/db/mongoose')

app.use(bodyParser.json())

app.get("/log", (req, res) => {
    const eventlogger = require('./lib/services/eventlogger')()
    eventlogger.logEvent(req.query.type).then(result => {
        res.send(JSON.stringify(result, null, 2))
    }).catch(err => {
        res.send(err)
    })
})

app.get("/history", (req, res) => {
    const eventlogger = require('./lib/services/eventlogger')()
    eventlogger.getHistory().then(result => {
        res.send(JSON.stringify(result, null, 2))
    }).catch(err => {
        res.send(err)
    }) 
})

app.listen(port, () => {
    console.log(`server up in port ${port}.`)
})