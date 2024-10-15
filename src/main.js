import App from './App.vue'

import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from './router'
import directive from '@/directive'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(directive)
app.mount('#app')
