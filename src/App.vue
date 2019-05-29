<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style lang="scss" >

html, body{
  padding: 0px;
  margin: 0;
  width: 100%;
  height: 100%;
}

#app{
  width: 100%;
  height: 100%;
}

</style>
