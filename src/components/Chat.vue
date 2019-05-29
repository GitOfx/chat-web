<template>
  <div class="chat-bg">
    <div class="chat-contain">
      <div class="chat-head">
        <span>{{name}}</span>
        <span>正在与 {{selectItem}} 聊天</span>
        <div style="float:right;margin-right:20px">
          <button @click="clickOnline" style="margin-left:10px">点击{{online ? "下线":"上线"}}</button>
        </div>
      </div>

      <div class="chat-body">
        <div class="chat-list-contain">
          <div>
            <ol>
              <li
                v-for="(item,$index) in contactList"
                :key="$index"
                @click="clickItem(item)"
                v-bind:class="{selectname:item==selectItem,unselectname:item != selectItem}"
              >
                <span>{{item}}</span>
              </li>
            </ol>
          </div>
        </div>
        <div class="chat-content-contain">
          <div class="chat-content" id="chatContainer">
            <ol>
              <li
                v-for="(item,$index) in recordList"
                :key="$index"
                 
              >
                <p v-bind:class="{righitem:item.sendUser == name,leftspan:item.sendUser != name}">{{item.text}}</p>
              </li>
            </ol>
          </div>
          <div class="chat-content-input">
            <textarea type="text" v-model="sendMsg"></textarea>
            <p @click="send" v-on:keyup.enter="send">发送</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "../api";
export default {
  data() {
    return {
      socket: {},
      contactList: [],
      name: "",
      count: 0,
      sendMsg: "",
      selectItem: "",
      recordList: [],

      online: true
    };
  },

  methods: {
    clickOnline() {
      if (this.online) {
        this.socket.close();
        this.online = false;
      } else {
        this.initSocket();
      }
    },

    send() {
      if (this.socket.readyState == 1) {
        let param = {
          send_user: this.name,
          rece_user: this.selectItem,
          message: this.sendMsg
        };
        console.log("send " + JSON.stringify(param));
        this.socket.send(JSON.stringify(param));
      } else {
        console.log("this.socket.readyState " + this.socket.readyState);
        this.initSocket();
      }
    },
    clickItem(item) {
      this.selectItem = item;
      fetchData("/getReceord", {
        send_user: this.name,
        rece_user: this.selectItem
      }).then(res => {
        this.recordList = res.data;
      });
    },

    initSocket() {
      console.log("init websocket");

      // //判断当前浏览器是否支持WebSocket
      if ("WebSocket" in window) {
        this.socket = new WebSocket(
          "ws://182.61.47.1:8080/websocket?name=" + this.name
        );
        //连接发生错误的回调方法
        this.socket.onerror = () => {
          console.log("onerror ");
        };

        //连接成功建立的回调方法
        this.socket.onopen = event => {
          console.log("onopen", event);
        };

        //接收到消息的回调方法
        this.socket.onmessage = event => {
          console.log("onmessage.errorMsg", event);

          let dataStr = event.data;
          let dataObj = JSON.parse(dataStr);
          if (dataObj.code == 2) {
            this.contactList = dataObj.data.nameList.filter(item => {
              return item != this.name;
            });
            console.log("contactList", this.contactList);
            if (!this.selectItem) {
              this.selectItem = this.contactList[0];
              this.clickItem(this.selectItem);
            }
            this.count = dataObj.data.count;
          } else if (dataObj.code == 0) {
            this.sendMsg = "";
            // { "sendUser": "newName", "receUser": "asd", "text": "1111", "time": "2019-05-26 04:47:42" }
            let para = {
              sendUser: dataObj.data.send_user,
              receUser: this.selectItem,
              text: dataObj.data.text,
              time: dataObj.data.time
            };
            this.recordList.push(para);
            this.scroll();
          }

          //   printState();
        };

        //连接关闭的回调方法
        this.socket.onclose = () => {
          //   this.printState();
          console.log("onclose");
        };

        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = () => {
          this.socket.close();
        };
      } else {
        alert("Not support websocket");
      }
    },

    scroll() {
      console.log("chatlog change");
      this.$nextTick(() => {
        var container = this.$el.querySelector("#chatContainer");
        console.log(container);
        container.scrollTop = container.scrollHeight;
      });
      // document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight+150;
    }
  },

  created() {
    document.onkeydown = e => {
      var key = e.keyCode;
      if (key == 13) {
        this.send();
      }
    };
  },

  // watch: {
  //  chatlog() {
  //   console.log("chatlog change");
  //   this.$nextTick(() => {
  //    var container = this.$el.querySelector("#chatContainer");
  //    console.log(container);
  //    container.scrollTop = container.scrollHeight;
  //   })
  //   // document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight+150;

  //  }

  beforeMount() {
    this.name = this.$route.query.name;
  },
  mounted() {
    this.initSocket();
  }
};
</script>

<style lang="scss" scoped>
.righitem {
  float: right;
  background-color: rgb(18, 183, 245);
}

.selectname {
  background-color: rgba(31, 113, 168, 0.658);
}

.unselectname {
  background-color: rgba(31, 33, 36, 0.5);
}

.leftspan {
  background-color: #b0aeaf ;
}
.chat-bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #353535;
}

.chat-body {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(31, 33, 36, 0.5);
}

.chat-contain {
  box-sizing: border-box;
  width: 50%;
  height: 80%;
  margin: auto;
  margin-top: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(31, 33, 36, 0.5);
}

.chat-list-contain {
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #c4c2c3;

  ol {
    padding-left: 0px;
  }
  li {
    list-style: none;
    margin-top: 3px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    color: white;
    &:hover {
      background-color: rgba(31, 113, 168, 0.658);
    }
  }
}

.chat-content-contain {
  box-sizing: border-box;
  width: 75%;
  height: 100%;
  float: right;
  margin: 0px auto 0px auto;
}

.chat-content {
  width: 100%;
  box-sizing: border-box;
  height: 65%;
  margin-right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #c4c2c3;
  overflow-y: auto;
  overflow-x: hidden;
  ol {
    width: 100%;
    padding-left: 0px;
  }
  li {
    box-sizing: border-box;
    list-style: none;
    margin-top: 20px;
    width: 100%;
    overflow: hidden;
    p {
      
      
      margin-left: 20px;
      display: inline-block;
      margin-right: 20px;
      border-radius: 10px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 8px;
      padding-bottom: 8px;
      overflow: hidden;
      word-break: break-all;
    }
  }
}

.chat-content-input {
  width: 100%;
  height: 35%;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #aca8aa;

  textarea {
    box-sizing: border-box;
    height: 60%;
    width: 100%;
    border: none;
    resize: none;
    font-size: 20px;
  }
  p {
    float: right;
    width: 100px;
    background-color: #140d12;
    border-radius: 5px;
    margin-right: 10px;
    text-align: center;
    color: white;
    padding: 7px;
    &:hover {
      background-color: #4d4a4c;
    }
  }
}

.chat-head {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  span:last-of-type {
    color: white;
    text-align: center;
    font-size: 20px;
  }

  span:first-of-type {
    margin-left: 20px;
    float: left;
    color: white;
    text-align: center;
    font-size: 20px;
  }
}
</style>