<template>
    <div  style="background-color:#eff0f8;">
        <!--top -->
        <div class="top">
            <div class="top_left">电费追踪</div>
            <div style="font-size:20px">∨</div>
        </div>
        <!-- tab -->
        <div class="top_tab">
            <div class="tab-left">
                <i  class="iconfont icon-quanchangniaokantu"></i>
                <span>余额追踪</span>
            </div>
            <div class="tab-right">
                <i class="iconfont icon-jiancedianduibifenxi"></i>
                <span>收支分析</span>
            </div>
        </div>
        <!-- 一断电 -->
        <div class="probably">
            <Probably name="已断电（户数）" number="1" color="a3b2cb" icon="icon-riyongdianliangchaxun"></Probably>
            <Probably name="已欠费（户数）" number="16" color="df5c5b" icon="icon-jienenggaizaoduibi"></Probably>
            <Probably name="余额不足（户数）" number="3" color="ecc742" icon="icon-quanchangniaokantu"></Probably>
            <Probably name="欠票（户数）" number="0" color="68b8d7" icon="icon-sanjicaidan"></Probably>
        </div>
        <!-- table -->
        <div class="table">
            <Table></Table>
        </div>
    </div>
</template>

<script>
import '@/assets/font/iconfont.css'
import Probably from '@/components/Probably.vue';
import Table from '@/components/Table.vue';

export default {
    name: "ElectricPage",
    components: { Probably ,Table},
}
</script>

<style scoped>
/* 头部 */
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top_left {
    color: #69b8ce;
    margin: 10px 0;
    padding-bottom: 7px;
    font-size: 14px;
    border-bottom: 3px solid #69b8ce;
}

/* tab */
.top_tab {
    line-height: 50px;
    background-color: white;
    box-shadow: 0 0 6px #ccc;
    font-size: 16px;
    margin-top: -10px;
}

.tab-left {
    float: left;
    margin: 0 40px;
    font-weight: 600;
    color: #69b8ce;

}

/*  余额追踪*/
.tab-left i {
    padding: 12px;
    border-bottom: 3px solid #69b8ce;
}
.tab-right i{
    padding: 12px;
}
/* 以断电 */
.probably {
    display: flex;
    justify-content: center;
    margin-top: 35px;
    margin-bottom:25px;
}
/* 表格 */
.table {
    width: 1600px;
    /* height: 200px; */
    position: relative;
    left: 70px;
    background-color: white;
    margin: 15px auto;
    margin-bottom: 0;
    padding-top: 15px;
}
</style>