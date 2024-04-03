import { io } from "socket.io-client";
import { reactive } from "vue";

export const state = reactive({
    connected: false
})

export const socket = io('http://localhost:3001', {
    autoConnect: false
})

socket.on('connect', () => {
    state.connected = true
    console.log('connected')
})

socket.on('disconnect', () => {
    state.connected = false
    console.log('disconnected')
})

socket.on('bruh', () => {
    console.log('bruh')
})