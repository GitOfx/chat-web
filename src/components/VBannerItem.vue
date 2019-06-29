<template>
  <div class="banner-item " :style="itemStyle">
    <!-- {{index}} -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VBannerItem",
  props: {
   
  },
  data() {
    return {
      offset: 0,
      style:{},
      index:0
    };
  },
  computed: {
    itemStyle() {
      let tranValue = `translateX(${this.offset}px)`;
      const style1 = {
        transform:tranValue,
        
        // color:'red',
        // width:this.offset+"px"
      };
      console.log("itemStyle ",style1)
      this.style = style1;
      return style1;
    }
  },
  methods: {
    updataItem(index, selectIndex, oldIndex) {
      this.index = index
      let width = this.$el["offsetWidth"];
      this.offset = width * (index - selectIndex);
      console.log("updataItem ", index, width,this.offset);
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-item {
  // width: 100%;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
  transition: all .5s ease-in-out 1s;
  // -ms-flex-negative: 0;
  // flex-shrink: 0;
  // z-index: 10;
  // min-height: 100px;
}

.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
</style>