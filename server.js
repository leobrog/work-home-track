const cluster = require("cluster")

if( cluster.isMaster ){
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < 3; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork()
    });
} else {

    const express = require('express')
    const bodyParser = require('body-parser')

    const app = express()
    const {mongoose} = require('./lib/db/mongoose')

    const services = require('./lib/routes/services')

    app.set("views", "./lib/views")
    app.set("view engine", "pug")

    app.use("/services", services())

    app.listen(process.env.PORT, () => {
        console.log(`server up in port ${process.env.PORT}.`)
        // console.log(process.env)
    })

    console.log(`Worker #${process.pid} started`)
}

