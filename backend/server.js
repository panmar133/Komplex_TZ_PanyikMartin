const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'megnemtudom',
    port: 3307
  })

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Fut a backend!')
})

app.listen(3001, () => {
  console.log(`Fut a backend a 3001-es porton.`)
})