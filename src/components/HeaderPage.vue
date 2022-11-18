<template>
    <div>
        <header>
            <div class="hearder">
                <div class="left">
                    <span class="firstSpan">2022-11-18 阴 17℃</span>
                     <span class="line">|</span>
                    <span><i class="iconfont icon-dingwei"></i> 四川成都市</span>
                </div>
                <div class="right">
                    <span><i class="iconfont icon-dianfeifenxi"></i> </span>
                    <span><i class="iconfont icon-gaojingyilan"></i> </span>
                    <span><i class="iconfont icon-chejianyongdianbaobiao "></i> </span>
                    <span><img src="../assets/logo.png" alt=""> 何正旭</span>
                    <span><i class="iconfont icon-jiaoseguanli"></i> </span>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
    name: 'HeaderPage'
}
</script>

<style scoped>
/* 头部 */
.hearder {
    display: flex;
    justify-content: space-between;
    height: 63px;
    background-color: white;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 0 6px #ccc;
    font-size: 16px;
}

.line {
    margin: 30px;
    color: #ccc5;
}
.right{
    width: 300px;
    display: flex;
    justify-content: space-around;
}
img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    float: left;
    margin-top: -5px;
}
</style>