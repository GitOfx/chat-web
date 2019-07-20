<template>
  <div style=" ">
    <CanvasView></CanvasView>
    <div class="weather sun"></div>
    <div class="weather cloudy"></div>
    <div class="weather"></div>
    <div class="weather">
      <label for="ck6">
        <input type="checkbox" id="ck6" checked class="ck-toggle" />
        <div class="toggle-finish">
          <div class="cookie-finish"></div>
        </div>
      </label>
    </div>
    <!-- <div >
      <canvas style="width:200px;height:200px"></canvas>
    </div> -->
    
  </div>
</template>

<script>
import CanvasView from './canvas'
export default {
  components:{CanvasView},
  mounted(){
    // this.canvas()
  },

  methods: {
    canvas() {
      let af;
      const numLasers = 250;
      const tail = 200;
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      const createLasers = n => {
        const lasers = [];
        for (let i = 0; i < n; ++i) {
          lasers.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            s: Math.random() * 2 + 1
          });
        }
        return lasers;
      };
      const renderLaser = l => {
        const grad = ctx.createLinearGradient(l.x, l.y, l.x, l.y + tail);
        const a = 1 - ((canvas.height - l.y) / canvas.height) * 0.8;
        grad.addColorStop(0, `hsla(340,100%,100%,${a})`);
        grad.addColorStop(1, "hsla(340,100%,50%,0)");
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x, l.y + tail);
        ctx.stroke();
      };
      const updateLaser = l => {
        l.y -= l.s;
        if (l.y < -tail) {
          l.y = canvas.height;
        }
      };
      const render = lasers => {
        ctx.fillStyle = "hsl(261,43%,7%)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let l of lasers) {
          renderLaser(l);
          updateLaser(l);
        }
        af = requestAnimationFrame(() => render(lasers));
      };
      const init = () => {
        cancelAnimationFrame(af);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render(createLasers(numLasers));
      };
      window.onresize = init;
      init();
    }
  }
};
</script>

<style lang="scss" scoped>
.weather {
  width: 150px;
  height: 200px;
  background: rgb(62, 209, 235);
  border-radius: 6px;
  position: relative;
}

.sun {
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    background: #f6d936;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px #ff0;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -45px 0 0 -45px;
    // transform: translate(-50%, -50%);
    width: 90px;
    height: 90px;
    background: #ffeb3b;
    clip-path: polygon(
      50% 0%,
      65.43% 25%,
      93.3% 25%,
      78.87% 50%,
      93.3% 75%,
      64.43% 75%,
      50% 100%,
      35.57% 75%,
      6.7% 75%,
      21.13% 50%,
      6.7% 25%,
      35.57% 25%
    );
    z-index: 1;
    animation: sunScale 2s linear infinite;
  }
}

@keyframes sunScale {
  0% {
    transform: scale(1) rotate(90deg);
  }
  50% {
    transform: scale(1.3) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(270deg);
  }
}

// @function shadow(){
//       return  @for $i from 1 to $shadowCount{
//                 22px -15px 0 6px white,
//         }
// }

$shadowCount: 4;
@mixin shadowValue($p...) {
  $lists: ();
  @for $i from 1 through length($p) {
    $lists: append($lists, nth($p, $i), comma);
  }
  box-shadow: $lists;
}

.cloudy {
  &::before {
    content: " ";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include shadowValue(22px -15px 0 6px white, 28px -20px 0 6px #ccc)
      // box-shadow: #{
      //     shadow()
      // }
      // box-shadow: 22px -15px 0 6px white,
      // 28px -20px 0 6px #ccc,
      // 36px -12px 0 4px white,
      // 32px -14px 0 4px #ccc,;;
  }
}

.ck-toggle {
  display: none;
}
.toggle-finish {
  cursor: pointer;
  display: inline-block;
  position: relative;
  height: 25px;
  width: 50px;
  border-radius: 4px;
  background: #cc0000;
}
.cookie-finish {
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  width: 25px;
  background: rgba(230, 230, 230, 0.9);
  border-radius: 3px;
  transition: all 0.5s;
}
input:checked + .toggle-finish {
  background: #66cc33;
}
input:checked + .toggle-finish .cookie-finish {
  left: 23px;
}
</style>