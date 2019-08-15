<template>
<!-- https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/ -->
<!-- https://www.zhangxinxu.com/wordpress/2015/03/css3-clip-path-polygon-shape-transition-animation/ -->
  <div>
    {{index}}
    <div>
      <img
        v-for="(item,i) in bannerList"
        :key="item.imgsrc"
        :class="{'in':index == i,'out':index != i}"
        :src="item.imgsrc"
      />
    </div>
    <div class="indic">
      <span v-for="(item,i) in bannerList" :key="item.imgsrc" :class="{'select':index == i}"></span>
    </div>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  name: "Clippathview",
  data() {
    return {
      index: 0,
      bannerList: [
        {
          imgsrc:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172411843341.jpg;"
        },
        {
          imgsrc:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172434968049.jpg;"
        },
        {
          imgsrc:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172503906167.jpg;"
        },
        {
          imgsrc:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172518390352.jpg;"
        },
        {
          imgsrc:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172540250495.jpg;"
        },
        {
          imgsrc:
            "http://www.youdingsoft.com/fileUploadsmall/20180119172552359735.jpg;"
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.index++;
      this.index = this.index % this.bannerList.length;
    }, 2000);
  },
  destroyed() {
    clearInterval();
  }
};
</script>

<style lang="scss" scoped>
div {
  position: relative;

  img {
    position: absolute;
  }

  .indic {
    margin: auto 0;
    position: absolute;

    top: 250px;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: rebeccapurple;
      border-radius: 50%;
      margin-left: 20px;
    }
  }
}

.select{
    background: red !important;
}

.out {
  display: none;
}

.in {
  display: block;
  animation: clipCircleIn 0.9s;
}
@keyframes clipCircleIn {
  0% {
    clip-path: circle(0 at 50% 50%);
  }
  100% {
    clip-path: circle(400px at 50% 50%);
  }
}
</style>