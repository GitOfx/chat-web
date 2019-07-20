<template>
  <div>
    <div id="photos">
      <img :src="pic" />
      <img :src="pic" />
      <img :src="pic" />
      <img :src="pic" />
      <img :src="pic" />
      <img :src="pic" />
      <img :src="pic" />
      <img :src="pic" />
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: require("../assets/zzz.jpg")
    };
  },
  methods: {},
  mounted() {
    var photosDom = document.getElementById("photos");
    //获取图片数组
    var images = photosDom.getElementsByTagName("img");
    //获取图片数量
    var len = images.length;
    //计算每张图片按Y轴旋转的角度
    var deg = Math.floor(360 / len);
    for (var i = 0; i < len; i++) {
      images[i].style = "transform : rotateY(" + deg * i + "deg)"; //deg前面不要加空格
      images[i].style =
        "transform : rotateY(" + deg * i + "deg) translateZ(380px)"; //deg前面不要加空格
    }

    var x = 0;
    // setInterval(function() {
    //   photosDom.style.transform =
    //     "rotateX(-10deg) rotateY(" + x++ * 0.2 + "deg)";
    // }, 30);
  }
};
</script>

<style lang="scss" scoped>
#photos {
  margin: 100px auto;
  
  width: 600px;
  height: 600px;
  transform-style: preserve-3d; /*设置3d环境*/
  perspective: 800px; /*设置景深为800px*/
  transform: rotateX(-10deg);
  div {
    width: 1200px;
    height: 1200px;
    border-radius: 50%;
    position: absolute;
    top: 102%;
    left: 50%;
    margin-left: -600px;
    margin-top: -600px;
    transform: rotateX(90deg);
    background: -webkit-radial-gradient(
      center center,
      600px 600px,
      rgba(158, 158, 222, 0.5),
      rgba(0, 0, 0, 0)
    );
  }

  img {
    width: 200px;
    margin: 0 auto;
    position: absolute;
    box-shadow: 0 0 8px #eaeaea;
    box-shadow: 1px -1px 6px #666;
    border-radius: 4px;
    -webkit-box-reflect: below 3px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
          40%, rgba(0, 0, 0, 0.5));
    cursor: pointer;
    transform: rotateY(0deg);
    //   transform: rotateX(90deg);
    //   background:-webkit-radial-gradient(center center,600px 600px,rgba(158,158,222,0.5),rgba(0,0,0,0));
  }
}
</style>