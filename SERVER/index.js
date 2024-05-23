require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const {corsOptions} = require('./utilities/corsOptions')
const app = express()


const userRoutes = require('./routes/userRoutes')


//connect to database
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})  
.then(() => {

    // Middlewares
    app.use(express.json())

    app.use(cors(corsOptions));

    app.use((req, res, next) => {
        console.log(req.path, req.method)  
        next()
    })


    app.use('/api', userRoutes)

    //listen for requests
    const server = app.listen(process.env.PORT || PORT, ()=> {
        console.log('Connected to Database and Server is listening and running on port ' + process.env.PORT)
        process.send('ready', () => {
            console.log('Server is ready to receive requests')
        })
    })
    
    // Handling graceful shutdown 
    process.on('message', (msg) => {
        if (msg == 'shutdown') {
            console.log('Shutdown signal is received')
            console.log('Closing all connections...and getting ready to close server')
    
            setTimeout(() => {
                console.log('Shutting down server and all database connection...')
                server.close(() => {
                    mongoose.connection.close(false, () => {
                        console.log('MongoDB connection closed')
                    })
                    console.log('server closed successfully')
                    process.exit(0)
                })
            }, 1500)
        }
    })
})
.catch((err) => {
        console.log(err)  
}) 


module.exports = app;