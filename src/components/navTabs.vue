<template>
    <div class="nav" :class="[$route.path ==='/home/searchPage'?'homeColor':'']">
        <div class="Navtabs fixedCenterStyle" :class="[$route.path ==='/home/searchPage'?'homeColor':'']">
            <el-menu 
            :default-active="activeIndex"
            class="el-menu-demo"
            :router=true 
            mode="horizontal" 
            @select="handleSelect"
            :active-text-color="$route.path ==='/home/searchPage'?'#fff':'#3e97df'">
            <el-menu-item index="/home/testlayout">首页</el-menu-item>
            <el-menu-item index="2">自然人办事</el-menu-item>
            <el-menu-item index="3">法人办事</el-menu-item>
            <el-menu-item index="4">便民服务</el-menu-item>
            <el-menu-item index="5">权责清单</el-menu-item>     
            <el-menu-item index="6">政务公开</el-menu-item>
            </el-menu>
        </div>
        <div class="line"></div>
    </div>
</template>
<script>
    export default {
  data() {
    return {
     activeIndex:'',
     restaurants: [],
        state3: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
    },
    querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
  },
};
</script>
<style scope lang="less">
.nav{
    .homeColor{
             background: #3B8BB8;
             .el-menu.el-menu--horizontal{
                 border:none
             }
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, 
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
            background-color: #3B8BB8;
            border-bottom: 2px solid #fff;
        }
        .el-menu-demo{
             background-color: #3B8BB8;
             .el-menu-item{
                 color:#fff;
             }
             .el-menu-item:hover{
                 background-color: none
             }
             
        }

    }
    margin-left: -32px;
    .line {
    border-bottom: 1px solid #ccc;
    }
    .el-menu-item{
        font-size: 16px; 
        padding:0 35px;
        .el-input__inner{
            height:30px
        }
        .my-autocomplete {
        li {
            line-height: normal;
            padding: 7px;

            .name {
            text-overflow: ellipsis;
            overflow: hidden;
            }
            .addr {
            font-size: 12px;
            color: #b4b4b4;
            }

            .highlighted .addr {
            color: #ddd;
            }
        }
        }
    }
}
</style>
