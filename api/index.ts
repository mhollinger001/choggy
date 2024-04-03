import express from 'express'
import { Server } from 'socket.io'

const app = express()

const server = app.listen(3001, () => {
    console.log("listening on port 3001")
})

const io = new Server(server, {
    cors: {
        origin: "http:localhost:3001"
    }
})

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});