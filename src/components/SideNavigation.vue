<template>
    <div>

        <aside class="side clearfix">
            <img src="../assets/logo.png" alt="">
            <ul class="side-ui" @click="toggleCss($event)">
                <li @click.stop="toggleCss(0)" :class="StlyeShow == 0 ? 'ClickColor' : ''">
                    <i class="iconfont icon-dianliangfenxi"></i>
                    <a :class="StlyeShow == 0 ? 'ClickColor' : ''"> 待办事项</a>
                </li>
                <li @click.stop="toggleCss(1)" :class="StlyeShow == 1 ? 'ClickColor' : ''">
                    <i class="iconfont icon-caozuorizhi"></i>
                    <a :class="StlyeShow == 1 ? 'ClickColor' : ''"> 电费追踪</a>
                </li>
                <li @click.stop="toggleCss(2)" :class="StlyeShow == 2 ? 'ClickColor' : ''">
                    <i class="iconfont icon-fenggupingdianliangbaobiao"></i>
                    <a :class="StlyeShow == 2 ? 'ClickColor' : ''">发票审核</a>
                </li>
                <li><i class="iconfont icon-baobiaoxitong"></i><a>账单管理</a></li>
                <li><i class="iconfont icon-bianyaqiyunhangpingjia"></i><a>充值审核</a></li>
                <li><i class="iconfont icon-nenghaopaiming"></i><a>能耗分析</a></li>
                <li><i class="iconfont icon-bianyaqiyunhangpingjia"></i><a>业务看板</a></li>
                <li><i class="iconfont icon-cedianliebiao"></i><a>数据报表</a></li>
                <li><i class="iconfont icon-dingweixitong"></i><a>设备管理</a></li>
                <li><i class="iconfont icon-quanxianguanli"></i><a>业主信息</a></li>
                <li><i class="iconfont icon-fuhefenxi"></i><a>系统设置</a></li>
            </ul>
        </aside>
        <HeaderPage></HeaderPage>
    </div>
</template>


<script>
import '@/assets/font/iconfont.css'
import HeaderPage from '@/components/HeaderPage.vue'
export default {
    name: 'SideNavigation',
    components: { HeaderPage },
    data() {
        return {
            StlyeShow: 0,//切换样式
        }
    },
    methods: {
        // 切换样式
        toggleCss(index) {
            this.StlyeShow = index
            if (index == 0) {
                this.$router.replace('./home')
            } else if (index == 1) {
                this.$router.replace('./electric')
            } else {
                this.$router.replace('./test')
            }
        }
    },
}
</script>

<style scoped>
/* 侧边栏 */
img {
    width: 160px;
    margin-top: -1px;
    margin-bottom: 5px;
}

.side {
    width: 160px;
    height: 960px;
    background-color: white;
    float: left;
    box-shadow: 0 0 6px #ccc;
}

.side-ui {
    display: flex;
    flex-direction: column;
}

.side-ui li {
    width: 100%;
    text-align: center;
    height: 60px;
    background-color: white;
    position: relative;
    display: flex;
}

.side-ui>li i {
    position: absolute;
    left: 15px;
    top: 11.5px;
    font-size: 20px;
}

.side-ui>li>a {
    display: block;
    width: 160px;
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    font-size: 14px;
}

/* 点击样式 */
.ClickColor {
    background-color: #effbff;
    color: #69b8ce;
    font-weight: 600;
}

/* 点击样式的左侧小栏 */
.ClickColor::before {
    content: '';
    display: block;
    position: absolute;
    width: 5px;
    height: 45px;
    background-color: #67b7d1;
}
</style>