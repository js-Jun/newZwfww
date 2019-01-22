<template>
    <div class="searchPage">
        <div class="fixedCenterStyle">
           <div class="searchContent">
               <h4>湖北政务服务一网通办</h4>
               <h3>欢迎来到湖北省</h3>
                <div class="searchInputBox clearfix">
                    <input type="text" placeholder="请输入您想要搜索的事项" @keyup.enter="searchEvent" v-model="searchText" class="searchText">
                    <input type="button" value="搜索" class="searchBtn" @click="searchEvent">
                </div>
           </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
        searchText:''
        }
    },
    methods:{
        searchEvent(){
            // if(this.searchText === ''){
            //     this.$message({
            //     message: '请输入您想搜索的关键词',
            //     type: 'warning'
            //     });
            //     return
            // }
            this.$store.state.userCearchText = this.searchText
            this.$router.push('/home/searchResultes')
        }
    }
}
</script>
<style scoped lang="less">
.searchPage{
    height: 580px;
    background-color:#3B8BB8;
    padding-top: 100px;
    .searchContent{
        width: 100%;
        height: 260px;
        h4{
            color:#fff;
            margin-bottom: 30px;
        }
        h3{
          color: #fff;  
          font-size: 45px  
        }
        .searchInputBox{
            width: 635px;
            height: 60px;
            background-color: #fff;
            margin-top: 40px;
            .searchText{
                font-size: 20px;
                border: none;
                outline:none;
                width: 545px;
                height: 101%;
                padding-left: 10px;
                float: left;
            }
            .searchBtn{
                width: 80px;
                height: 105%;
                float: left;
                border:none;
                background-color: #f13939;
                color: #FFF;
                font-size: 20px;
                cursor:pointer;
            }
        }
    }
}
</style>
