<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { StepBackwardOutlined, StepForwardOutlined, HomeOutlined } from '@ant-design/icons-vue'
const theme = { token: { colorPrimary: '#e15536' } }
</script>
<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <div>Hello vue3</div>
    <a-button type="primary"><HomeOutlined />主色按钮</a-button>
    <StepBackwardOutlined />
    <StepForwardOutlined />
    <a-pagination :total="500" show-quick-jumper />
  </a-config-provider>
</template>

<style scoped></style>
