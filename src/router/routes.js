
// // 路由懒加载 一级路由
// const Home = ()=>import('../views/Home')
// const Electric = ()=>import('../views/Electric')
// 引入组件
import Home from '../views/Home'
import Electric from '../views/Electric'
import Test from '../views/Test'


export default [
    // 重定向 第一次打开展示哪个路由
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/electric',
        component: Electric,
    },
    {
        path: '/test',
        component: Test,
    },
]