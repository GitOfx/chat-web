<template>
  <div style="textAlign:center">
    <h1>vue 自定义控件</h1>
    <h3>样式参照 <a href="https://onsen.io/theme-roller/">onsern</a></h3>
    <h3>实现参照 <a href="https://github.com/ElemeFE/element">elementUI</a></h3>
    <Vbutton :clickCb="click" @clickme="click">button</Vbutton>
    <br>
     <br>
     <Vbutton :clickCb="click" @clickme="clickLoading" :loading="isLoading">loading button</Vbutton>
      <br>
     <br>
     <Vbutton :clickCb="click"  :icon="iconstr">img button</Vbutton>
      <br>
     <br>
     <Vbutton :clickCb="click"  :icon="iconstr" style="font-size:10px">img button</Vbutton>
      <br>
     <br>
     <Vbutton :clickCb="click"  :icon="iconstr" :loading="isLoading" style="font-size:20px">img button</Vbutton>
      <br>
     <br>
     <Vbutton :clickCb="click"  :icon="iconstr" :loading="isLoading" style="font-size:20px" :disabled="true">disable button</Vbutton>
      <br>
     <br>
     <Vbutton :clickCb="click"   :icon="iconstr" :loading="isLoading" style="font-size:20px" >outline button</Vbutton>
     <Banner></Banner>

     
  </div>
</template>

<script>
import Vbutton from "./v-button";
import Banner from './Banner'

export default {
  components: {
    Vbutton,Banner
  },

  data() {
    return {
      isLoading:true,
      iconstr:"../assets/icon1.png"
    };
  },
  methods: {
      click(){
        console.log('click123')
      },
      clickLoading(){
          this.isLoading = !this.isLoading;
      }
      
  },

};
</script>

<style lang="scss" scoped>

</style>