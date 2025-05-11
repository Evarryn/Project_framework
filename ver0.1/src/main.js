import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 导入路由
import { createPinia } from 'pinia' // 导入 Pinia

// 导入全局样式
import './styles/index.scss'

const app = createApp(App)

// 使用 Pinia
app.use(createPinia())
// 使用路由
app.use(router)

app.mount('#app') 