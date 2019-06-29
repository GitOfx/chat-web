
<template>
  <!-- 自定义button 
    1，不同样式 normal quite outline large
    2，加载状态及监听
    3，事件回调   外层通过:click props传回调进来  或者里面emeit函数出去 @click接收
    4, enable 状态切换
    5，ripple效果
  -->
 
  <button class="btn"  :class="modifier" @click="handleClick" :disabled="disabled">
    <img src="../assets/icon1.png" v-if="!!icon" style="width:1em" >
    <Loading class="loading" v-if="loading"></Loading>
    <span> 
      <slot>{{disabled}}</slot>
    </span>
  </button>
</template>

<script>
import Loading from "./Loading";
export default {
  components: { Loading },
  props: {
    modifier: {
      type: String,
      default: "btn-normal"
    },
    clickCb: {
      type: Function,
      default: () => {}
    },
    loading:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    icon:{
      icon:String,
      default:""
    }
  },
  data() {
    return {};
  },

  created() {
    console.log("modifier", this.modifier);
 
  },
  methods: {
    click() {},

    handleClick(evt) {
      this.$emit("clickme", evt);
    }
  }
};
</script>

<style lang="scss" scoped>
$base-color: #ef3e29;
$base-color-active: #eb6354;
$base-radius: 5px;
$base-content-padding-vertial: 8px;
$base-content-padding-horizaon: 18px;
$base-font-size: 22px;

.btn {
  border-style: none;
  border: none;
  border-radius: $base-radius;
  font-size: $base-font-size;
  padding: $base-content-padding-vertial $base-content-padding-horizaon;
  outline: none;
  vertical-align: middle;
  
  &:disabled {
    opacity: 0.5;
  }
  span {
    vertical-align: middle;
    line-height: 1.5em;
  }
  img{
    width: 1em;
    margin-right: 8px;
    vertical-align: middle;
  }
}

.btn-normal {
  background-color: $base-color;
  color: white;
  &:active,
  &:hover{
    background-color: #9c1a0c;
  };
  &:disabled {
    background: $base-color-active;
  }
}

.btnOutline {
  // display: inline-block;
  border: 1px solid $base-color;
  background: transparent;
  color: $base-color;
  &:active,
  &:hover{
    background-color: #817f7f;
  };
  &:disabled {
    border: 1px solid $base-color-active;
  }
}

.btn-large {
  @extend .btn-normal;
  width: 100%;
  margin: 0 10px;
  box-sizing: border-box;
}

.loading{
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}
  
</style>