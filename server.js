const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})