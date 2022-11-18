<template>
  <div>
    <div class="box" :style="{ backgroundColor: '#' + color }">
      <div class="BgcCircle"><i :class="`iconfont ${icon}`" :style="{ backgroundColor: '#' + color }"></i></div>
      <div class="main">
        <p>{{ name }}</p>
        <p>11-18 10:40更新</p>
      </div>
      <div>
        {{ number }}
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
  name: 'ProbablyPage',
  props: ['name', 'number', 'color','icon']
}
</script>

<style scoped>
/* 盒子 */
.box {
  width: 315px;
  height: 120px;
  /* background-color: #a3b2cb; */
  border-radius: 5px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.box div:nth-child(1) {
  /* width: 20px; */
  width: 60px;
  height: 45px;
  background-color: #ced5e2;
  border-radius: 50%;
  color: rebeccapurple;
  margin-right: 20px;
  opacity: .6;
}

.main {
  width: 210px;
}

.main p:first-child {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.main p:last-child {
  margin-top: 5px;
  color: white;
  /* font-size: 14px; */
}

.box div:nth-child(3) {
  width: 150px;
  text-align: right;
  color: white;
  font-size: 35px;
  font-weight: 800;
}

/* icon 背景 */
.BgcCircle i{
  position: relative;
  left: 13px;
  top: 12px;
}
</style>