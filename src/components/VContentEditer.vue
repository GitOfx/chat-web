<template>
  <!--    https://www.cnblogs.com/wangzhihui/articles/7004826.html -->
  <!--    https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand-->
  <div style="textAlign:left">
    <div class="header">
      <v-drop-list v-model="selectH" :menu-children="menuChildren" :head-style="headStyle"></v-drop-list>
      <v-drop-list v-model="selectFont" :menu-children="menuFontChildren" :head-style="headStyle"></v-drop-list>
      <span
        class="choiceItem"
        :class="{seleted:containCmd('bold')}"
        style="font-weight: bold"
        @click="clickCmd('bold')"
      >B</span>
      <span
        class="choiceItem"
        :class="{seleted:containCmd('italic')}"
        style="font-style: italic;font-family:Georgia, serif;"
        @click="clickCmd('italic')"
      >I</span>
      <span
        class="choiceItem"
        :class="{seleted:containCmd('strikeThrough')}"
        style="text-decoration: line-through"
        @click="clickCmd('strikeThrough')"
      >S</span>
      <div class="link-item">
        <img
          src="@/assets/link.png"
          class="choiceItem"
          style="width: 20px"
          @click="showLink = !showLink"
        />
        <div class="link-pop" v-if="showLink" @mouseleave="showLink = false">
          <p>
            名字
            <input type="text" placeholder="输入名字" v-model="linkName" />
          </p>
          <p>
            地址
            <input type="text" placeholder="输入地址" v-model="linkAdd" />
          </p>
          <button @click="insertLink">确定</button>
        </div>
      </div>
      <div style="display: inline-block">
        <label>
          <input
            type="file"
            name="file"
            accept="image/png, image/jpg"
            style="display: none"
            @change="selectImg"
          />
          <img src="@/assets/img.png" class="choiceItem" style="width: 25px" />
        </label>
      </div>
    </div>
    <div class="editer" contenteditable="true" placeholder="content" @input="onInput" ref="editer"></div>

    <div>Preview</div>
    <span v-html="html"></span>
  </div>
</template>

<script>
import VDropList from "@/components/VDropList";
import VDropItem from "@/components/VDropItem";

export default {
  name: "VContentEditer",
  components: { VDropItem, VDropList },
  data() {
    return {
      seletImg: "",
      linkName: "",
      linkAdd: "",
      cmd: "",
      content: "please input",
      html: "",
      selectH: "正文",
      menuChildren: ["正文", "h1", "h2", "h3", "h4", "h5"],
      selectFont: 6,
      menuFontChildren: [1, 2, 3, 4, 5, 6, 7],
      exedCmd: [],
      headStyle: {
        color: "black"
      },
      showLink: false,
    };
  },

  watch: {
    showLink: function(newValue, oldValue) {
      if (newValue) {
        // this.selectContent = window.getSelection()
      }
    },
    selectH: function(newValue, oldValue) {
      if (newValue == "正文") {
        document.execCommand("formatBlock", false, "p");
      } else {
        document.execCommand("formatBlock", false, newValue);
      }
      console.log("formatBlock", newValue);
    },
    selectFont: function(newValue, oldValue) {
      document.execCommand("fontSize", false, newValue);
      console.log("selectFont", newValue);
    }
  },
  computed: {
    containCmd() {
      return function(cmd) {
        // document.queryCommandEnabled(cmd);
        this.exedCmd.indexOf(cmd);
        let state = document.queryCommandState(cmd);
        console.log("queryCommandState", cmd, state)
        return state;
      };
    }
  },
  methods: {
    selectImg(event) {
      let file = event.target.files[0] || event.dataTransfer.files[0];
      this.seletImg = file.value;
      var fr = new FileReader();
      fr.onload = () => {
        if (file.type !== ("image/png" || "image/jpg" || "image/jpeg")) {
          alert("图片格式错误");
          return false;
        } else if (file.size > 1024 * 1024) {
          alert("图片大小不超过1M");
          return false;
        } else {
          this.seletImg = fr.result; // 图片base64
          document.execCommand("insertImage", false, this.seletImg);
          console.log(this.seletImg);
        }
      };
      fr.readAsDataURL(file);
    },
    insertLink() {
      this.$refs.editer.focus();
      this.showLink = false;
      if (!!this.linkAdd) {
        let linkHtml = `<a href='${this.linkAdd}'>${this.}</a>`;
        document.execCommand("insertHTML", false, linkHtml);
        console.log("add1", linkHtml);
        this.linkAdd = "";
      }
    },
    onInput($event) {
      // this.content = $event.target.innerText;
      // console.log("content", $event.target.innerHTML)
      this.html = $event.target.innerHTML;
    },
    clickCmd(cmd, arg) {
      this.cmd = cmd;

      let exeResult = document.execCommand(cmd, false, !!arg?arg:null);

      let index = this.exedCmd.indexOf(cmd);
      console.log("execCommand ", cmd,  !!arg?arg:null)
      if (index == -1) {
        this.exedCmd.push(cmd);
        // console.log("exe cmd ", cmd,document.queryCommandState(cmd))
      } else {
        this.exedCmd.splice(index, 1);
        // console.log("undo exe cmd ", cmd,document.queryCommandState(cmd))
      }
    }
  }
};
</script>

<style scoped lang="scss">
.link-item {
  display: inline-block;
  position: relative;

  .link-pop {
    width: 150px;
    position: absolute;
    border-radius: 4px;
    border: 1px solid #da5926;
    background: #da8d42;
    font-size: 18px;

    p {
      margin-top: 4px;
      margin-left: 4px;
      width: 100%;
      padding: 0;
    }

    input {
      float: right;
      display: inline-block;
      margin-right: 4px;
      width: 70%;
      border-radius: 4px;
      border: 1px solid #da5926;
    }
  }
}

.seleted {
  border: 1px solid wheat;
  border-radius: 4px;
}

.choiceItem {
  font-size: 25px;
  margin-left: 10px;
}

.header {
  background: #da5926;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 8px;

  span {
    padding: 1px 10px;

    &:hover {
      opacity: 0.6;
    }
  }
}

.editer {
  width: 100%;
  min-height: 100px;
  border: 1px solid grey;
  padding: 5px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
