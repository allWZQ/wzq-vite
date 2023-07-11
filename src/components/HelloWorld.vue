<script setup lang="ts">
import { ref } from "vue";
import { Button } from "ant-design-vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <Button @click="count++">count is {{ count }}</Button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
