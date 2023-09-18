<template>
    <div>
        Add product
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    permission: 'product:create',
    middleware: 'auth'
})
</script>

<style scoped>

</style>