<script setup lang="ts">
import {state, socket} from '../socket'

function bruh(): void {
    console.log('bruh')
    if (state.connected) {
        socket.disconnect()
    } else {
        socket.connect()
    }
}
</script>

<template>
    <h1>game</h1>
    <p>{{ state }}</p>
    <button @click="bruh">click</button>
</template>