const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: 'http://localhost/8081'
}

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}))

// simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Nodes API application."});
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})