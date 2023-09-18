<template>
  <div>
    <h1>Product</h1>
    <Permission resource="product" action="create">
      <nuxt-link to="/product/add">add product</nuxt-link>
    </Permission>

    <nuxt-link to="/product/add">add product</nuxt-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
