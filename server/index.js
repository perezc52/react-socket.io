const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

const server = http.createServer(app)


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
// })

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on('send_message', (data) => {
        const messageObject = {
            username: data.username,
            message: data.message
        }
        io.emit('receive_message', messageObject)
    })

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`)
    })

})

server.listen(3001, () => {
    console.log("listening on port 3001")
})