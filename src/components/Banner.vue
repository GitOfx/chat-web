<template>
  <!-- banneritem 横排  动画计算便宜  最后一张就将前面的补上去 -->
  <div class="banner-contain clearfix">
    <div class="banner-content clearfix" :style="style">
      <VBannerItem v-for="(item,index) in bannerList" :key="item.img">
        <img :src="item.img" @click="clickBanner(index)" />
      </VBannerItem>
      <span class="arrow-left" @click="clickPre" v-if="showArrow"><-</span>
      <span class="arrow-right" @click="clickNext" v-if="showArrow">-></span>
      <div class="indctor">
        <span
          v-for="(item,index) in bannerList"
          :key="item.img"
          class="indict-item"
          :style="selectIndicStyle(index)"
          @click="clickItem(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import VBannerItem from "./VBannerItem";
import { clearInterval } from "timers";
export default {
  name: "VBanner",
  components: { VBannerItem },
  props: {
    showArrow:{
      type:Boolean,
      default:true
    }
  },

  data() {
    return {
      timer: null,
      index: 0,
      selectIndex: 0,
      items: [],
      width: 0,
      height: 0,
      indictor: [],
      bannerList: [
        {
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172411843341.jpg;",
          url: ""
        },
        {
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172434968049.jpg;",
          url: ""
        },
        {
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172503906167.jpg;",
          url: ""
        },
        {
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172518390352.jpg;",
          url: ""
        },
        {
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172540250495.jpg;",
          url: ""
        },
        {
          img:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172552359735.jpg;",
          url: ""
        }
      ]
    };
  },

  watch: {
    selectIndex(nval, oval) {
      this.updatePos(oval);
      this.$emit("onChange", nval);
    }
  },
  computed: {
    style() {
      const style = {
        width: this.width + "px",
        height: this.height + "px"
      };
      return style;
    },
    selectIndicStyle() {
      return function(index) {
        return { background: index == this.selectIndex ? "red" : "gray" };
      };
    }
  },
  methods: {
    clickBanner(index) {
      this.$emit("click", index);
    },
    clickItem(index) {
      this.selectIndex = index;
    },
    clickPre() {
      this.selectIndex--;
      if (this.selectIndex < 0) {
        this.selectIndex = this.bannerList.length - 1;
      }
      this.selectIndex = this.selectIndex % this.bannerList.length;
    },
    clickNext() {
      this.selectIndex++;
      this.selectIndex = this.selectIndex % this.bannerList.length;
    },
    updatePos(oindex) {
      this.items.forEach((item, index) => {
        item.updataItem(
          index,
          this.selectIndex,
          oindex,
          this.bannerList.length
        );
      });
    },
    updateStyle(style) {
      this.width = style.width;
      this.height = style.height;
    },
    startBanner() {
      this.timer = setInterval(() => {
        this.selectIndex++;
        this.selectIndex = this.selectIndex % this.bannerList.length;

        // console.log("selectIndex", this.selectIndex);
      }, 2 * 1000);
    }
  },

  mounted() {
    // 子组件的 name属性
    this.items = this.$children.filter(child => {
      // console.log("potionms", child.$options.name);
      return child.$options.name === "VBannerItem";
    });
    this.updatePos(this.selectIndex);
    // console.log("potionms2", this.items);
    this.startBanner();
  },

  created() {},

  destroyed() {
    clearInterval();
    console.log("destroyed clearInterval");
  }
};
</script>

<style lang="scss" scoped>
.indctor {
  position: absolute;
  height: 30px;
  bottom: 10px;
  left: 50%;
  cursor: pointer;
  z-index: 10;
  text-align: center;
  font-size: 22px;
  display: flex;
  transform: translateX(-50%);
}

.indict-item {
  height: 26px;
  width: 26px;
  margin-left: 8px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  background-color: hsla(27, 87%, 44%, 0.986);
  color: rgb(228, 13, 13);
  text-align: center;
  font-size: 22px;
  line-height: 26px;
  z-index: 11;
  content: " ";
  &:hover {
    opacity: 0.8;
  }
}

.arrow-left {
  position: absolute;
  top: 50%;
  left: 0;
  vertical-align: bottom;
  padding: 0;
  margin: 0;
  height: 56px;
  transform: translateY(-50%);
  width: 56px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  background-color: hsla(27, 87%, 44%, 0.986);
  color: rgb(228, 13, 13);
  z-index: 10;
  text-align: center;
  font-size: 22px;
  line-height: 56px;
  &:hover {
    opacity: 0.8;
  }
}
.arrow-right {
  position: absolute;
  top: 50%;
  right: 0;
  vertical-align: bottom;
  padding: 0;
  margin: 0;
  height: 56px;
  width: 56px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  background-color: hsla(27, 87%, 44%, 0.986);
  color: rgb(228, 13, 13);
  z-index: 10;
  text-align: center;
  font-size: 22px;
  line-height: 56px;
  &:hover {
    opacity: 0.8;
  }
}

.banner-contain {
  // overflow: hidden;
  // width: 100%;
  // width: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  justify-items: center;
}
.banner-content {
  // width: 100%;
  position: relative;
  display: inline-block;

  // min-height: 200px;
  // float: left;
  overflow: hidden;
  // margin: 0 auto;
}

.clearfix {
  &:after {
    content: "";
    display: block;
    clear: both;
    // height: 0;
  }
}
</style>