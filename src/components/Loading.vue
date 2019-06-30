<template>
  <div class="ddr-contain">
    <div class="ddr ddr1"></div>
    <div class="ddr ddr2"></div>
    <div class="ddr ddr3"></div>
    <div class="ddr ddr4"></div>
    <div class="ddr ddr5"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ddr-contain{
    display: inline-block;
    width: 1em;
    height: 1.2em;
}
.ddr{
    vertical-align: middle;
    width: 0.1em;
    height: 1.2em;
    display: inline-block;
    margin: 1px;
    background-color: #d6a00c;
    animation: loading 1s infinite ease-in-out;
    
}
.ddr2{
    animation-delay: -0.9s; 
}
.ddr3{
    animation-delay: -0.8s;
}
.ddr4{
    animation-delay: -0.7s;
}
.ddr5{
    animation-delay: -0.6s;
}
@keyframes loading {
    0%,40%,100%{ 
        -webkit-transform: scaleY(0.5);
    }
    20%{
        -webkit-transform: scaleY(1);
    }
}
</style>