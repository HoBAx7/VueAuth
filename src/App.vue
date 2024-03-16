<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/navbar.vue'
</script>

<template>
  <main class="flex flex-col min-h-screen bg-slate-200">
    <Navbar />
    <div class="min-w-full min-h-screen">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
