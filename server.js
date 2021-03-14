require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors: { origin: "*" }
})


const cors = require('cors')

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended: false}))



io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('message', (inPos) => {
        console.log(inPos)
        socket.broadcast.emit('message', inPos)
    })
})


http.listen(process.env.PORT || 8100, () => {
  console.log('Now your playing with Power.....Port 8000 Power')
})

