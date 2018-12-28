<template>
  <div class="login bgcGradient">
      <div class="loginBtn" @click="userlogin">登陆</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    userlogin(){
      this.$router.push('/home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{
  height: 100%;
  position: relative;
  .loginBtn{
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #243C62;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    font-size: 30px;
    line-height: 150px;
    cursor:pointer;
    transition: all 0.5s;
  }
  .loginBtn:hover{
    background-color: #86BCD9;
    color: #243C62;
    box-shadow: #fff 0px 0px 35px
  }
}
</style>
