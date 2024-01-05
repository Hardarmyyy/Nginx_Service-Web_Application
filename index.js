require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const cron = require('node-cron')
const axios = require('axios');

const userRoutes = require('./routes/userRoutes')


//connect to database
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})  
.then(() => {

    // Middlewares
    app.use(express.json())

    app.use(cors())

    app.use((req, res, next) => {
        console.log(req.path, req.method)  
        next()
    })

    // define cron job to keep server up and running
    const serverUrl = 'https://stage-two-cronjob.vercel.app/api/'
    cron.schedule('*/2 * * * *', async () => {
        try {
            // Send an HTTP GET request to server to keep it active
            const response = await axios.get(serverUrl);
            console.log(`Pinged ${serverUrl} at ${new Date().toLocaleTimeString()}`);
        } catch (error) {
            console.error(`Error pinging ${serverUrl}: ${error.message}`);
        }
    });


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

// Export the Express API for vercel build up process
module.exports = app;