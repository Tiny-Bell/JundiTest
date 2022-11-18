// 引入vue
import Vue from 'vue';

// 引入router
import VueRouter from 'vue-router'

// 引入router配置对象
import routes from './routes'

// 使用router路由
Vue.use(VueRouter)


let router = new VueRouter({
    routes,
})

export default router