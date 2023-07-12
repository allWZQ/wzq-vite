<script setup lang="ts">
import { useRouter } from "vue-router";
import { Button } from "ant-design-vue";
import { paths } from "../../router.config";
const router = useRouter();

const gotoLogin = () => {
  router.push(paths.home);
};
</script>

<template>
  <h1>我是登录页</h1>
  <Button @click="gotoLogin">登录</Button>
</template>

<style scoped></style>
