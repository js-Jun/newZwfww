<template>
    <div class="home">
        <el-container>
            <el-header style="height:80px" :class="[$route.path === '/home/userInfo'||'/home/guide' ? 'variableStyle' : '',$route.path ==='/home/searchPage'?'homeColor':'']">
                <div class="fixedCenterStyle headerBanner clearfix">
                    <h1 class="fl log wc" @click="$router.push('/home/searchPage')">湖北政务服务网</h1>
                    <div class="currentPageName divider fl"  v-if="$route.path === '/home/userInfo'">用户中心(个人)</div>
                    <div class="currentPageName divider fl"  v-else-if="$route.path === '/home/searchResultes'">搜索</div>
                    <div class="currentPageName divider fl"  v-else-if="$route.path === '/home/guide'">办事指南</div>
                    <div class="fr headerInfo clearfix">
                        <a href="#" class="fl wc">湖北省人民政府</a>
                        <i class="el-icon-bell divider fl wc"></i>
                       <div class="fl userInfo">
                          <span class="divider">
                              <el-dropdown @command="handleCommand">
                                <span class="el-dropdown-link wc">
                                    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="grzx">个人中心</el-dropdown-item>
                                    <el-dropdown-item command="tcdl">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                                </el-dropdown>
                          </span>
                       </div>
                    </div>
                </div>
            </el-header>
            <el-main>
                <navtab v-if="$route.path !== '/home/userInfo' && $route.path !== '/home/searchResultes'&& $route.path !== '/home/guide'"></navtab>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
import navtab from '@/components/navTabs'
import {queryUserInfo} from '@/api/index.js'
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      username:''
    };
  },
  created(){
    queryUserInfo()
    .then(res => {
      console.log(res)
      if(res.header.retStatus === 'S'){
        //获取用户信息成功
        this.$store.state.userInfo = res.body
        this.username = res.body.personName
      }
    })
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      if(command === 'grzx'){
          this.$router.push('/home/userInfo')
      }else if(command === 'tcdl'){
        this.$router.push('/')
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{navtab}
};
</script>
<style scoped lang="less">
.home {
      .variableStyle{
      box-shadow: 0 0 15px #ccc
    }
    .homeColor{
      background-color:#3B8BB8;
   .wc{
     color: #fff
   }
    }
  .el-header {
    color: #333;
    .headerBanner {
      height: 100%;
      padding: 20px 0;
      .log{
        cursor: pointer
      }
      h1,
      .currentPageName {
        font-weight: 700;
        line-height: 37px;
      }
      h1 {
        font-size: 22px;
        padding-left: 50px;
        background: url("../assets/image/Log.png") 0 no-repeat;
        background-size: 38px 38px;
        margin-right: 30px;
      }
      .currentPageName {
        position: relative;
        font-size: 18px;
      }
      .headerInfo {
        line-height: 37px;
        font-size: 14px;
        color: #999;
        a {
          margin-right: 30px;
        }
        i {
          position: relative;
          line-height: 37px;
          margin-right: 30px;
          font-size: 16px;
          cursor: pointer;
        }
        .userInfo {
          cursor: pointer;
          position: relative;
          i {
            margin: 0 0 0 10px;
          }
        }
      }
    }
  }
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 80px;
}
.el-main {
min-height: 730px;
  color: #333;
  padding: 0;
  
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
