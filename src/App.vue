<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <ul>
    <li><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
    <li><RouterLink :to="{name: 'game', params: { id: 'bruh'}}">Game</RouterLink></li>
    <li><RouterLink :to="{name: 'about'}">About</RouterLink></li>
  </ul>
  <RouterView />
</template>
