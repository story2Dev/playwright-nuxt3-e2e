<template>
  <div>
    <h1>Product</h1>
    <Permission resource="product" action="create">
      <nuxt-link to="/product/add">add product</nuxt-link>
    </Permission>

    <nuxt-link to="/product/add">add product</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const query = gql`
  query getProducts($limit: Int!) {
    products(limit: $limit) {
      id
      name
      price
    }
  }
`;
const variables = { limit: 5 };
const { data, error } = await useAsyncQuery(query, variables);
console.log({ data, error });
</script>

<style scoped></style>
