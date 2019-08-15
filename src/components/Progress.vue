<template>
  <div>
    <h2>进度条的不同实现方式</h2>
    <progress value="0.6" label="12"></progress>
    <!-- <progress  ></progress> -->
    <p>自定义圆形滚动条</p>
    <div class="progress-circle">
      <div class="circle-chart">
        <div class="donut-chart">
          <div id="section1" class="clip">
            <div class="item"></div>
          </div>
          <div id="section2" class="clip">
            <div class="item"></div>
          </div>
          <div id="section3" ref="section3" class="clip">
            <div class="item" ref="section3Item"></div>
          </div>
          <div class="center">
            <a>
              <span class="percent" ref="percent">0</span>
              <small>%</small>
            </a>
            <p>已完成</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.updateDonut(40); // 初始化百分比
  },
  methods: {
    updateDonut(percent) {
      // 圆形进度
      let offset = 0;
      let $el = this.$refs.section3;
      let $elItem = this.$refs.section3Item;
      let $txt = this.$refs.percent;
      if (percent < 50) {
        offset = (360 / 100) * percent;
        $el.style.webkitTransform = $el.style.msTransform = $el.style.MozTransform =
          "rotate(" + offset + "deg)";
        $elItem.style.webkitTransform = $elItem.style.msTransform = $elItem.style.MozTransform =
          "rotate(" + (180 - offset) + "deg)";
        $elItem.style.backgroundColor = "#e3e3e3";
      } else {
        offset = (360 / 100) * percent - 180;
        $el.style.webkitTransform = $elItem.style.msTransform = $el.style.MozTransform =
          "rotate(180deg)";
        $elItem.style.webkitTransform = $elItem.style.msTransform = $elItem.style.MozTransform =
          "rotate(" + offset + "deg)";
        $elItem.style.backgroundColor = "#2ACBF8";
      }
      $txt.innerHTML = percent;
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-circle {
  .circle-chart {
    // margin: 0 85px 0 45px;
    .donut-chart {
      position: relative;
      width: 140px;
      height: 140px;
      margin: 55px auto;
      // border-radius: 100%;
    }
    .donut-chart .center {
      background: #fff;
      // border-radius: 50%;
      width: 70%;
      height: 70%;
      left: 15%;
      top: 15%;
      position: absolute;
      a {
        color: #2acbf8;
        display: block;
        font-size: 24px;
        font-weight: 600;
        left: 50%;
        position: absolute;
        top: 40%;
        transform: translate(-50%, -50%);
        small {
          font-size: 14px;
        }
      }
      p {
        font-size: 14px;
        color: #9b9b9b;
        left: 50%;
        position: absolute;
        bottom: 20%;
        transform: translate(-50%, -50%);
      }
    }
    .clip {
      border-radius: 50%;
      clip: rect(0px 140px 140px 70px);
      height: 100%;
      position: absolute;
      width: 100%;
    }
    .item {
      // border-radius: 50%;
      // clip: rect(0px 70px 140px 0px);
      height: 100%;
      position: absolute;
      width: 100%;
    }
    #section1 {
      transform: rotate(0deg);
    }
    #section1 .item {
      background-color: #2acbf8;
      transform: rotate(100deg);
    }
    #section2 {
      transform: rotate(140deg);
    }
    #section2 .item {
      background-color: #e3e3e3;
      transform: rotate(80deg);
    }
  }
}
progress {
  color: rebeccapurple;
  width: 200px;
  // height: 100px;
  border: none;
  // inset: none;
  background: black;
  -webkit-appearance: none;
  &::-webkit-progress-bar {
    background: red;
  }

  border-radius: 8px;
}
</style>