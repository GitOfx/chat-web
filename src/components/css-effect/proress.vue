<template>
  <div class="contain">
    <h2>progress</h2>
    <input type="range" max="100" v-model="progress" />
    <p>css 圆形进度条</p>
    <div class="circle-css">
      <div class="circle">
        <span>loading {{progress}}%</span>
      </div>
    </div>
    <p>svg 圆形进度条</p>
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="60" cy="80" r="54" fill="none" stroke="#666" stroke-width="12" />
    </svg>

    <svg width="230" height="230" viewBox="0 0 230 230" transform="rotate(90),scale(-1,1)">
      <defs>
        <linearGradient id="orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F34D4D" />
          <stop offset="100%" stop-color="#F27D31" />
        </linearGradient>
      </defs>

      <circle cx="115" cy="115" r="87" fill="none" stroke="#f7f7f7" stroke-width="30" />

      <circle
        cx="115"
        cy="115"
        r="87"
        stroke="url(#orange)"
        stroke-width="12"
        stroke-dasharray="15 300"
        stroke-dashoffset="80px"
        stroke-linecap="round"
      />
    </svg>

    <div class="svg-anima">
      <svg width="100%" height="100">
        <text text-anchor="middle" x="50%" y="50%" class="text">hello world</text>

        <text text-anchor="middle" x="50%" y="50%" class="text t1">hello world</text>
      </svg>
    </div>

    <p>call apply bind</p>

    <div class="chrome"></div>
    <div class="linear-progress">
      <div class="value"></div>
    </div>

    <div class="rect-anima">
      <div class="a1">
     
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    };
  },
  watch: {
    progress(n, ol) {
      if (this.progress > 50) {
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.rect-anima{
  
  .a1{
    width: 200px;
    height: 100px;
    background: #5dd52f;
    position: relative;
    z-index: 1;
    &::before{
      content: "";
      z-index: -1;
      position: absolute;
      background: #8a2be2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: scaleY(0);
      // transition: transform 1s ease-in-out;
      // transform-origin: center top;
      
    }

    &:hover::before{
      transform-origin:center bottom;
      // transform: scaleY(1);
      animation: jelly 2s linear;
    }

    @keyframes jelly {
      0%,100%{
        transform: scale(1,1)
      }
      33%{
        transform: scale(0.9,1.1)
      }

      66%{
        transform: scale(1.1,0.9)
      }
    }

  }
}

.linear-progress {
  height: 20px;
  width: 500px;
  border-radius: 5px;
  background: gray;
  .value {
    height: 20px;
    width: 300px;
    background: repeating-linear-gradient(45deg,red 0px,red 15px,blue 15px,blue 30px);
    background-size: 42px 20px;
    animation: p 1s linear 0s infinite;
    border-radius: 0 5px 5px 0;
  }

  @keyframes p
   {
    from {background-position: 42px 0}
    to {background-position: 0 0}
  }
}
.chrome {
  width: 300px;
  height: 300px;
  background: radial-gradient(#419af6 26%, white 0, white 30%, transparent 0),
    linear-gradient(120deg, #5dd52f 50%, transparent 0) 0 100% / 115% 44%,
    linear-gradient(60deg, #5dd533 50%, transparent 0) 0 0/ 35% 70%,
    linear-gradient(120deg, #ff0000 50%, transparent 0) 0 0 / 50% 197%,
    linear-gradient(red, red) 0 0 / 100% 29%, linear-gradient(#fdeb35, #fce72a);
  background-repeat: no-repeat;
  border-radius: 100%;
  border: 8px solid white;
  animation: circle 2s linear 0s infinite;

@keyframes circle {
  from {transform: rotate(360deg)}
  to {transform: rotate(0deg)}
}
}
.svg-anima {
  .text {
    font-size: 64px;
    font-weight: bold;
    text-transform: uppercase;
    // fill: none;
    stroke: #8a2be2;
    stroke-width: 3px;
    stroke-dasharray: 200 200;
    animation: stroke 6s infinite linear;
    // stroke-dashoffset: -400;
  }

  .t1 {
    stroke: #e74c3c;
    animation-delay: 3s;
    text-shadow: 0 0 5px #f39c12;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: -200;
    }
  }
}

* {
  box-sizing: border-box;
}
.contain {
  margin-left: 200px;
  margin-bottom: 100px;
}
.circle-css {
  position: relative;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  .circle {
    width: 100%;
    height: 100%;
    background: black;
    border-radius: 50%;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 10;
      transform: translate(-50%, -50%);
      font-size: 20px;
      background: white;
      display: inline-block;
      width: 60%;
      height: 60%;
      line-height: 560%;
      vertical-align: middle;
      text-align: center;
      border-radius: 50%;
    }
    // border: blue 10px solid;
    &::before {
      display: block;
      width: 50%;
      height: 100%;
      content: " ";
      //   left: -10px;
      //   top: -px;

      overflow: hidden;
      background: #8a2be2;
      position: absolute;
      border-top-left-radius: 200% 100%;
      border-top-right-radius: 0 0;
      border-bottom-right-radius: 0 0;
      border-bottom-left-radius: 200% 100%;
      transform: rotate(30deg);
      transform-origin: right center;
      //   border: rgb(0, 255, 85) 10px solid;
    }

    &::after {
      display: block;
      position: absolute;
      width: 50%;
      height: 100%;
      left: 50%;
      content: " ";
      overflow: hidden;
      background: #8a2be2;
      border-top-left-radius: 0 0;
      border-top-right-radius: 200% 100%;
      border-bottom-right-radius: 200% 100%;
      border-bottom-left-radius: 0 0;
      transform-origin: left center;
      transform: rotate(180deg);
    }
  }
}
</style>