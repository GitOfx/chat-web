<template>
  <!-- http://182.61.47.1:8080/swagger-ui.html#/ -->
  <div class="login-bg">
    <div class="login-contain">
      <form>
        <div class="input-contain">
          <label>姓名</label>
          <input type="text" v-model="userName">
        </div>
        <br>
        <div class="input-contain">
          <label>密码</label>
          <input type="password" v-model="password">
        </div>
        <div class="input-submit">
          <span @click="login">登录</span>
          <span @click="regiest">注册</span>
          
        </div>
      </form>
      <div class="bottom-contain">
        {{errorMsg}}
      </div>
    </div>
  </div>
</template>

<script>
import fetech from "../api";
export default {
  data() {
    return {
      userName: "",
      password: "",
      errorMsg:""
    };
  },
  methods: {
    login() {
      fetech("/login", {
        user: this.userName,
        password: this.password
      })
        .then(res => {
          console.log("result ", res);
          
          if (res.code == 1) {
            this.$router.push({ path: `/chat?name=${this.userName}` });
          }else{
            this.errorMsg = res.message
          }
        })
        .catch(error => {
          console.log("error ", error);
        });
    },
    regiest() {
      fetech("/regester", {
        user: this.userName,
        password: this.password
      })
        .then(res => {
          if (res.code == 1) {
            this.$router.push({ path: `/chat?name=${this.userName}` });
          }else{
            this.errorMsg = res.message
          }
        })
        .catch(error => {
          console.log("error ", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #353535;
}

.login-contain {
  width: 40%;
  height: 400px;
  overflow: hidden;
  background-color: rgba(31, 33, 36, 0.5);
  margin: 100px auto;
  form {
    text-align: center;
  }
}

.input-contain {
  margin-top: 30px;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.1);

  label {
    color: azure;
    margin: 5px;
  }

  input {
    box-shadow: inset 0 0 10px 1px transparent;
    height: 30px;
    font-size: 22px;
    border: none;
  }
}

.input-submit {
  margin-top: 30px;
  text-align: center;
  span {
    padding-left: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    display: inline-block;
    background: #2f8be6;
    color: aliceblue;
    padding: 8px;
    width: 120px;
    font-size: 18px;
    &:hover {
      background: #0a79e9;
    }
  }
}

.bottom-contain {
  margin-top: 20px;
  text-align: center;
   color: wheat;
  
}
</style>