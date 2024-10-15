<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { StepBackwardOutlined, StepForwardOutlined, HomeOutlined } from '@ant-design/icons-vue'
const theme = { token: { colorPrimary: '#e15536' } }
</script>
<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<style scoped></style>
