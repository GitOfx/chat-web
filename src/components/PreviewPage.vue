<template>
  <div style="margin:0 auto;width:80%">
    <h1>
      vue 自定义
      <a href="https://cn.vuejs.org/v2/guide/components.html">组件</a>
    </h1>
    <p>组件可以使代码复用，拆分逻辑，易于组织文件管理</p>

    <h3>1，从一个最简单的button开始</h3>
    <p>button内部预设样式由 外部配置 normal outline , slot占位传入内容 ，</p>
    <Vbutton @clickme="click" :modifier="'btn-normal'">button</Vbutton>&nbsp;&nbsp;&nbsp;&nbsp;
    <Vbutton @clickme="click" :modifier="'outline'">button</Vbutton>&nbsp;&nbsp;&nbsp;&nbsp;
    <Vbutton @clickme="click" :modifier="'outline'">
      <p style="background:blue">p-button</p>
    </Vbutton>
    <p>button 点击事件可以 由props传入 或者 接受里面发出的事件 ,里面会监听外面属性 如loading 样式直接用style 优先级最高</p>
    <br />
    <Vbutton :clickCb="click" @clickme="clickLoading" :loading="isLoading">loading button</Vbutton>
    <br />
    <br />
    <Vbutton :clickCb="click" :icon="iconstr">img button</Vbutton>
    <br />
    <br />
    <Vbutton :clickCb="click" :icon="iconstr" style="font-size:10px;padding:0px">img button</Vbutton>
    <br />
    <br />
    <Vbutton :clickCb="click" :icon="iconstr" :loading="isLoading">img button</Vbutton>
    <br />
    <br />
    <Vbutton
      :clickCb="click"
      :icon="iconstr"
      :loading="isLoading"
      style="font-size:20px"
      :disabled="true"
    >disable button</Vbutton>
    <br />
    <br />
    <Vbutton
      :clickCb="click"
      :icon="iconstr"
      :loading="isLoading"
      :modifier="'outline'"
    >outline button</Vbutton>

    <div style="margin-top: 26px;">
      <div>
        <h2>2.下拉菜单</h2>
        <p>分为两层 Dropitem 跟button一样 数据可配 ，droplist 控制下拉展示盒选中头部，vmodel数据向外面展示 数据结构转换 初始化高度问题</p>
        <br />
        <div style="display:flex">
          <div>
            <p>全部数据封装 {{selectValue1}}</p>
            <v-drop-list
              class="drop-list"
              :menu-children="menuChildren"
              :head-icon="true"
              v-model="selectValue1"
              :head-style="headStyle"
              @click="clickItem"
            ></v-drop-list>
          </div>

          <div>
            <div style="margin-left:20px">
              <p>手动添加item 手动同步v-model 和click {{selectValue2}}</p>
              <v-drop-list
                class="drop-list"
                :head-icon="true"
                v-model="selectValue2"
                :head-style="headStyle"
              >
                <v-drop-item
                  v-for="(menu,index) in menuChildren"
                  :key="index"
                  :item-data="menu"
                  @click="clickList2"
                ></v-drop-item>
              </v-drop-list>
            </div>
          </div>
          <div style="margin-left:30px">
            <div>
              <p>手动添加自定义 item {{selectValue3}}</p>
              <v-drop-list class="drop-list" v-model="selectValue3" :head-style="headStyle">
                <v-drop-item
                  v-for="(menu,index) in menuChildren1"
                  :key="index"
                  @click="clickList3(menu)"
                >
                  <div style="color: #00c3ac;background: #ffb836">{{menu}}</div>
                </v-drop-item>
              </v-drop-list>
            </div>
          </div>
        </div>
      </div>

      <br />
      <h3>3. 滚动Banner</h3>
      <p>绝对定位将图片重叠在一起  然后根据序号依次偏移 </p>
      <br />
      <div>
        <Banner></Banner>
      </div>

      <h3>4. 文本编辑</h3>
      <div style="margin-bottom:100px">
        <v-content-editer></v-content-editer>
      </div>
    </div>
  </div>
</template>

<script>
import Vbutton from "./v-button";
import Banner from "./Banner";
import VDropList from "@/components/VDropList";
import VDropItem from "@/components/VDropItem";
import VContentEditer from "@/components/VContentEditer";

export default {
  components: {
    Vbutton,
    Banner,
    VContentEditer,
    VDropItem,
    VDropList
  },

  data() {
    return {
      isLoading: true,
      // outline:"outline",
      iconstr: "../assets/icon1.png",
      headStyle: {
        color: "black"
      },
      selectValue1: "value1",
      selectValue2: "value2",
      selectValue3: "value3",
      name: "typeof HTMLElement",
      menuChildren: [
        { content: "111", icon: require("../assets/img.png") },
        "default2",
        "default3",
        "default4",
        "default5",
        "default6"
      ],
      menuChildren1: [
        "111",
        "default2",
        "default3",
        "default4",
        "default5",
        "default6"
      ]
    };
  },
  methods: {
    click() {
      console.log("click123");
    },
    clickLoading() {
      this.isLoading = !this.isLoading;
    },
    clickList2(item) {
      console.log("clicklist", item);
      this.selectValue2 = item.content;
    },
    clickList3(menu) {
      console.log("clicklist3", menu);
      this.selectValue3 = menu;
    },
    clickItem(item) {
      console.log("clickItem", item);
    },
    click() {
      this.name = typeof document.querySelector("#contain");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>