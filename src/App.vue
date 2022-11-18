<template>
  <div>
    <SideNavigation></SideNavigation>
      <router-view></router-view>
  </div>
</template>

<script>
import SideNavigation from './components/SideNavigation.vue'

export default {
  name: 'App',
  components: {
    SideNavigation
  }
}
</script>

<style>
</style>
