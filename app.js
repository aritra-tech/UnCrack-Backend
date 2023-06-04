require('dotenv').config();
const express = require('express');
const DB = require('./config/db.js')
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send("Databackpage")
})

app.use(express.json())

const start = async() => {
    try {
        await DB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`Server is up ${PORT}`)
        })
    } catch(err) {
        console.log(err)
    }
}

start();