const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const bodyParser = require('body-parser')

const app = express()
const server = http.Server(app)
const io = socketio(server)

app.use(bodyParser.json())
app.use('/static', express.static(__dirname + '/static'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

server.listen(8080, () => {
  console.log('listening on 8080')
})


io.on('connection', (socket) => {
  console.log('socket connected')
  socket.on('test', (data) => {
    console.log(data)
  })
})