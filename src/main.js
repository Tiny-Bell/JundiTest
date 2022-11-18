import Vue from 'vue'
import App from './App.vue'

// 引入router
import VueRouter from 'vue-router'
// 引入路由
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 使用vue-router插件
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
