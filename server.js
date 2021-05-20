require('dotenv').config()
const express = require('express')
const app = express()
const expHbs = require('express-handlebars')

const port = process.env.PORT || 8008

app.listen(port, () => {
    console.log(`Server Started | Port : ${port}`)
})
