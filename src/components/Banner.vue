<template>
  <!-- banneritem 横排  动画计算便宜  最后一张就将前面的补上去 -->
  <div class="banner-contain clearfix">
    <div class="banner-content clearfix">
      <VBannerItem v-for="item in bannerList" :key="item.img" >
        <img :src="item.img">
      </VBannerItem>
    </div>
    <!-- <div style="float:left;">left</div> -->
    <!-- <div style="float:right">right</div> -->
  </div>
</template>

<script>
import VBannerItem from "./VBannerItem";
import { clearInterval } from "timers";
export default {
  name: "VBanner",
  components: { VBannerItem },
  props: {},

  data() {
    return {
      timer: null,
      index: 0,
      selectIndex:0,
      items: [],
      
      bannerList: [
        {
          type: "1",
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172411843341.jpg;",
          url: ""
        },
        {
          type: "1",
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172434968049.jpg;",
          url: ""
        },
        {
          type: "1",
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172503906167.jpg;",
          url: ""
        },
        {
          type: "1",
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172518390352.jpg;",
          url: ""
        },
        {
          type: "1",
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172540250495.jpg;",
          url: ""
        },
        {
          type: "1",
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172552359735.jpg;",
          url: ""
        }
      ]
    };
  },

  watch: {
    selectIndex(nval,oval){
      this.updatePos(oval);
    }
  },
  methods: {
    updatePos(oindex){
      this.items.forEach((item, index) => {
        item.updataItem(index, this.selectIndex, oindex);
      });
    },
    startBanner() {
      this.timer = setInterval(() => {
        this.selectIndex = this.selectIndex % this.bannerList.length;
        this.selectIndex ++;
        console.log("selectIndex", this.selectIndex);
      }, 2 * 1000);
    }
  },

  mounted() {
    // 子组件的 name属性
    this.items = this.$children.filter(child => {
      // console.log("potionms", child.$options.name);
      return child.$options.name === "VBannerItem";
    });
    this.updatePos(this.selectIndex)
    // console.log("potionms2", this.items);
    // this.startBanner();
  },

  created() {},

  
  destroyed() {
    clearInterval();
     console.log("destroyed clearInterval");
  }
};
</script>

<style lang="scss" scoped>
.banner-contain {
  
  overflow: hidden;
  // width: 100%;
  // width: 500px;
  border: 1px solid red;
}
.banner-content {
  // width: 100%;
  position: relative;
  // display: inline-block;
  min-height: 200px;
  border: 1px solid blue;
  background: rebeccapurple;
  
}

.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
 
 
</style>