<template>
  <div class="main">
    <div class="child"><div class="child2">
      <span >{{msg1}}</span>
      <span >{{msg1}}</span>
    </div></div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg1:"22222123123234234234234234233333333333333333333333333333333333333333333333333333333333333"
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .main{
   width: 80%;
   height: 80%;
   margin: auto auto;
   background-color: rebeccapurple;
   position: relative;
   padding-right: 20px;
 }

  .child{
    top: 100px;
    bottom: 0;
    right: 0;
    width: 80%;
    position: relative;
    margin: auto auto;
    background-color: #83996d;
  }

  .child2{
    width: 80%;
    margin: auto auto;
    background-color: #979944;
    top: 20px;
   span:first-of-type{
     background-color: aqua;
     padding: 10px;
     display:  inline-block;
     border-radius: 7px;
     word-break: break-word;
     word-wrap: break-word;
   }

    span:last-of-type{
      background-color: #ffb836;
      padding: 10px;
      width: 60%;
      position: absolute;
      right: 0px;
      display:  inline-block;
      border-radius: 7px;
      word-break: break-word;
      word-wrap: break-word;
    }
  }

</style>
