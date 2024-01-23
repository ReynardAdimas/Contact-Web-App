const express = require('express') 
const mongoose = require('mongoose') 
const cors = require('cors') 
const routes = require('./routes/routes') 

const app = express() 
const port = process.env.PORT || 2000
// middleware setup
app.use(express.json())
app.use(cors()) 
// database setup
require('dotenv').config() 
const mongoString = process.env.DATABASE_URL 
mongoose.connect(mongoString) 
const database = mongoose.connection 
database.on('error', (error) => {
    console.log(error)
}) 
database.once('connected', () => {
    console.log('Database Connected')
})

app.use('/api',routes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})