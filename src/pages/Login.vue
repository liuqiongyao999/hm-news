<template>
  <div class="login">
    <div class="close" @click="fn">
      <i class="iconfont iconicon-test"></i>
    </div>
    <div class="input-box">
      <div class="logo">
        <i class="iconfont iconnew"></i>
      </div>
      <div class="username">
        <hm-input placeholder="请输入用户名" v-model="username" :rules="/^1\d{3,12}$/" err-msg="您输入的格式有误"></hm-input>
      </div>
      <div class="password">
        <hm-input type="password" placeholder="请输入密码" v-model="password" :rules="/^\d{3,12}$/" err-msg="您输入的格式有误"></hm-input>
      </div>
    </div>

    <div class="loginbtn" @click="login">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import HmInput from '../components/HmInput'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    'hm-input': HmInput
  },
  methods: {
    async login () {
      if (!this.username || !this.password) return
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      console.log(res)
      if (res.data.statusCode === 401) {
        alert(res.data.message)
      } else {
        alert(res.data.message)
      }
    },
    fn () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    padding: 20px;
  }
  .iconicon-test {
    font-size: 27px;
  }
  .logo {
    text-align: center;
    i {
      font-size: 126px;
      color: #d81e06;
    }
  }
  .input-box {
    margin-bottom: 40px;
  }
  .loginbtn {
    background-color: #c30;
    height:48px;
    line-height: 48px;
    text-align: center;
    border-radius: 24px;
    font-size: 18px;
    button {
      color: #fff;
      background-color: transparent;
    }
  }

</style>
