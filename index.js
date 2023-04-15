// Get the environment variables.
require('dotenv').config()

// Require needed node modules.
const express = require('express')

// Initialize the app object.
const app = express()


app.get('/', function (request, response) {
    
    request.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; ">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1> Welcome to our Resturant Page</h1>
        </body>
    `)
})

app.use('/places', require('./controllers/places'))


app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Listen to a port number defined by a local environment variable.
app.listen(process.env.PORT)


