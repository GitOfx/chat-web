<template>
  <div class="banner-item clearfix" :style="itemStyle">
    <!-- {{index}} -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VBannerItem",
  props: {},
  data() {
    return {
      offset: 0,
      style: {},
      index: 0
    };
  },
  computed: {
    itemStyle() {
      let tranValue = `translateX(${this.offset}px)`;
      const style1 = {
        transform: tranValue

        // color:'red',
        // width:this.offset+"px"
      };
      // console.log("itemStyle ", style1);
      this.style = style1;
      return style1;
    }
  },
  methods: {
    updataItem(index, selectIndex, oldIndex,total) {
      this.index = index;
      let width = this.$el["offsetWidth"];
      // index  原本的位置  selectindex  目标位置 
      // 初始化会将所有的铺开  选中后 偏移与与开始位置的距离 
      // 滑到两端时 如果不从返回开始 就要将后面的接到两端铺开
      // 
      this.offset = width * (index - selectIndex);

      let sty  = {
        width : this.$el["offsetWidth"],
        height : this.$el["offsetHeight"]
      }
      this.$parent.updateStyle(sty);
      // console.log("updataItem ", index, sty, this.offset);
    }
  },
  mounted() {
    // this.$parent.updateStyle(this.$el.width);
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
  transition: all 0.5s ease-in-out ;
  vertical-align: middle;
  // -ms-flex-negative: 0;
  // flex-shrink: 0;
  // z-index: 10;
  // min-height: 100px;
}

.clearfix::after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
</style>