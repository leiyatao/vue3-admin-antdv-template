<script >
import {defineComponent,h,resolveComponent} from 'vue'
import { StepBackwardOutlined, CarOutlined, HomeOutlined } from '@ant-design/icons-vue'
</script>
<template>
     <a-menu theme="light" mode="inline">
             <a-sub-menu title="基础数据管理" key="1"> 
                <a-menu-item key="11">机构管理</a-menu-item>
                <a-menu-item key="12">机构作业范围</a-menu-item>
                <a-menu-item key="13">运费管理</a-menu-item>
            </a-sub-menu>  
            <a-sub-menu title="车辆管理" key="2"><CarOutlined />
                <a-menu-item key="21">车型管理</a-menu-item>
                <a-menu-item key="22">车辆列表</a-menu-item>
                <a-menu-item key="23">回车管理</a-menu-item>
             </a-sub-menu>  
            </a-menu>
</template>
<style lang="scss" scoped>
    
</style>