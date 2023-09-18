<template>
  <div v-if="hasPermission()">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const user = useAuthUser();

type ACTION = "read" | "create" | "update" | "delete";
interface PermissionProps {
  resource: string;
  action: ACTION;
}

const props = defineProps<PermissionProps>();

const hasPermission = () => {
  const { resource, action } = props;
  return user.permissions.some((p: string) => p === `${resource}:${action}`);
};
</script>
