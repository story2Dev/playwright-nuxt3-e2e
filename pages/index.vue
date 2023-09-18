<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
    <h1>Hello, Nuxt 3!</h1>
    <nuxt-link to="/pos">POS</nuxt-link>
    <nuxt-link to="/todo">Todo</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <hr />
    <button>test</button>
    <hr>
    <nuxt-link to="/product/"> product</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style scoped></style>
