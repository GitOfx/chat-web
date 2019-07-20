<template>
  <div style="border:blue solid 1px; marginLeft:100px">
    <canvas 
      id="board"
      width=600
      height=700
      @mousedown="canvasDown($event)"
      @mouseup="canvasUp($event)"
      @mousemove="canvasMove($event)"
      @touchstart="canvasDown($event)"
      @touchend="canvasUp($event)"
      @touchmove="canvasMove($event)"
    ></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: {},
      path: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = document.getElementById("board");
      this.context = canvas.getContext("2d");
      this.context.strokeStyle = "red";
    //   this.context.moveTo(10, 10);
    //   this.context.lineTo(150, 50);
    //   this.context.lineTo(10, 50);
    //   this.context.stroke();
     this.context.fillStyle="white";
    this.context.fillRect(0, 0, 600, 700);  
    },
    canvasDown(event) {
      const x = event.clientX - event.target.parentNode.offsetLeft;
      const y = event.clientY - event.target.parentNode.offsetTop;
      this.context.moveTo(x, y);
    },
    canvasMove(event) {
      const x = event.clientX - event.target.parentNode.offsetLeft;
      const y = event.clientY - event.target.parentNode.offsetTop;
      this.context.lineTo(x, y);
      this.context.stroke();
      console.log(
        "canvasMove x y clientY top ",
        x,
        y,
        event.clientY,
        event.target.parentNode.offsetTop
      );
    },
    canvasUp(event) {},
    draw() {}
  }
};
</script>

<style lang="scss" scoped>
#board {
  width: 600px;
  height: 700px;
}
</style>