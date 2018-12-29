<template>
    <div class="searchResultes">
        <div class="topSearch">
            <div class="searchInputBox fixedCenterStyle clearfix">
                <input type="text" placeholder="请输入你想要搜索的事项" @keyup.enter="searchEvent" v-model="newSearchVal" class="searchText">
                <input type="button" value="搜索" class="searchBtn" @click="searchEvent">
                <div class="searchCount">为您找到相关结果约{{searchResData.totalSize ? searchResData.totalSize : 0}}个</div>
            </div>
        </div>
       <div class="search_quyu fixedCenterStyle">
            <span>区域选择：</span>
            <!-- 一级区域 -->
            <div class="quyu" @mouseover="quyu_mouseover" @mouseout="quyu_mouseout">
                <span>{{municipalShow ? municipalShow === '全部' ? '湖北省': municipalShow : '湖北省'}}</span>
                <i class="el-icon-arrow-down" :class="{'active':quyu_isShow}"></i> 
                <div class="options quyu-options" v-show="quyu_isShow">
                    <ul>
                        <li v-for="(item,index) in municipalArea" :key="index" 
                        :title="item.name"
                        @click="quyu_click(item.code,item.parentCode,item.name,item.grade)">
                        {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 二级区域 -->
             <div class="quyu" @mouseover="district_mouseover" @mouseout="district_mouseout" v-show="districtArea.length">
                <span>{{districtShow ? districtShow === '全部' ? '请选择县区' : districtShow : '请选择县区'}}</span>
                <i class="el-icon-arrow-down" :class="{'active':district_isShow}"></i> 
                <div class="options quyu-options" v-show="district_isShow">
                    <ul>
                        <li v-for="(item,index) in districtArea" :key="index" 
                        :title="item.name"
                        @click="quyu_click(item.code,item.parentCode,item.name,item.grade)">
                        {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 三级区域 -->
             <div class="quyu" @mouseover="street_mouseover" @mouseout="street_mouseout" v-show="streetArea.length">
                <span>{{streetShow ? streetShow === '全部' ? '请选择乡镇' : streetShow : '请选择乡镇'}}</span>
                <i class="el-icon-arrow-down" :class="{'active':street_isShow}"></i> 
                <div class="options quyu-options" v-show="street_isShow">
                    <ul>
                        <li v-for="(item,index) in streetArea" :key="index" 
                        :title="item.name"
                        @click="quyu_click(item.code,item.parentCode,item.name,item.grade)">
                        {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 四级区域 -->
            <div class="quyu" @mouseover="rc_mouseover" @mouseout="rc_mouseout" v-show="rcArea.length">
                <span>{{rcShow ? rcShow === '全部' ? '请选择乡镇' : rcShow : '请选择乡镇'}}</span>
                <i class="el-icon-arrow-down" :class="{'active':rc_isShow}"></i> 
                <div class="options quyu-options" v-show="rc_isShow">
                    <ul>
                        <li v-for="(item,index) in rcArea" :key="index"
                        :title="item.name" 
                        @click="quyu_click(item.code,item.parentCode,item.name,item.grade)">
                        {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <el-checkbox v-model="checked" @change="lyLocalLevel">仅显示本级</el-checkbox>
        </div>
        <div class="search_filter fixedCenterStyle">
            <!-- 选择条件 -->
            <div class="choose_conditions">
                <div class="choose_result">全部结果 ></div>
                <div v-if="searchParameter.filterMap.orgShortName">部门分类:<span>{{searchParameter.filterMap.orgShortName[0]}}</span><i @click.stop="deleteShixiang" class="el-icon-close"></i></div>
                <div v-if="searchParameter.filterMap.titleName">事项分类:<span>{{searchParameter.filterMap.titleName[0]}}</span><i @click.stop="deleteBumen" class="el-icon-close"></i></div>
                <span>“{{searchParameter.keyWord}}”</span>
            </div>
            <!-- 条件选项 -->
            <div class="conditions_option" v-if="calculateResult.filterMap">
                <!-- 事项选项 -->
                <div class="bumen_option clearfix" v-if="calculateResult.filterMap.orgShortName.length">
                    <div class="option_title">
                        <span>部门分类:</span>
                    </div>
                    <div class="option_list" :class="{'active':bumen_isShow}">
                        <ul>
                            <li v-for="(item,index) in calculateResult.filterMap.orgShortName" :key="index" :title="item" @click="bumen_click(item)">
                                {{item}}
                            </li>
                        </ul>
                        <div class="isShow" @click="bumen_isShow = bumen_isShow ? false : true">
                            {{bumen_isShow?'收起':'更多'}}<i class="el-icon-arrow-down"></i>
                        </div>
                    </div>
                </div>
                <div class="shixiang_option clearfix" v-if="calculateResult.filterMap.titleName.length">
                    <div class="option_title">
                        <span>事项分类:</span>
                    </div>
                    <div class="option_list" :class="{'active':shixiang_isShow}">
                        <ul>
                            <li v-for="(item,index) in calculateResult.filterMap.titleName" :key="index" :title="item" @click="shixiang_click(item)">
                                {{item}}
                            </li>
                        </ul>
                        <div class="isShow" @click="shixiang_isShow = shixiang_isShow ? false : true">
                            {{shixiang_isShow?'收起':'更多'}}<i class="el-icon-arrow-down"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="showEvent fixedCenterStyle">
            <div class="showEvent_item" v-for="item in searchResData.result" :key="item.id">
                <div class="showEvent_title">
                    <span>[{{item.regionName}}]</span>
                    <span v-html="item.itemName"></span>
                </div>
                <div class="item_detailed_info clearfix">
                    <div>
                        <span>受理机构:</span><span>{{item.agentName}}</span>
                    </div>
                    <div>
                        <span>服务对象:</span><span>{{item.serviceObjectName}}</span>
                    </div>
                    <div>
                        <span>办件类型:</span><span>{{item.assortName}}</span>
                    </div>
                    <div>
                        <span>申请形式:</span><span>{{item.isOnlineNmae+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+item.onlineDepthName}}</span>
                    </div>
                    <div>
                        <span>收费情况:</span><span>{{item.isChargeName}}</span>
                    </div>
                    <div>
                        <span>材料物流:</span><span>{{item.delivery ? item.delivery : '无'}}</span>
                    </div>
                    <div>
                        <el-button type="primary"><a :href="item.serviceGuide" target="_blank" class="btn_a"></a>办事指南</el-button>
                        <el-button type="primary"><a :href="item.onlineApplication" target="_blank" class="btn_a"></a>在线申请</el-button>
                        <el-button type="danger"><a :href="item.advisory" target="_blank" class="btn_a"></a>我要咨询</el-button>
                        <el-button type="danger"><a :href="item.appraise" target="_blank" class="btn_a"></a>查看评价</el-button>
                    </div>
                </div>
            </div>

            <div class="dataNull" v-if="!isShow">很抱歉，未能检索出相关事项</div>
        </div>
        <div class="block pagBox" v-if="isShow">
            <el-pagination
            class="paging"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="searchParameter.pageSize"
            layout="prev, pager, next,jumper"
            :page-sizes="[10, 20, 50, 100]"
            prev-text="上一页"
            next-text="下一页"
            :total="searchResData.totalSize > 10000 ? 10000 : searchResData.totalSize">
            </el-pagination>
    </div>
    </div>
</template>
<script>
import {UserSearchData,getArea} from '@/api/index.js'
import Vue from 'vue'
    export default{
        data(){
            return {
                 currentPage1: 1,
                 newSearchVal:'',  //搜索的关键字
                 checked:false,
                 searchParameter:{ //用户搜索的参数 
                     currentPage:1,
                     pageSize:10,
                     keyWord:this.$store.state.userCearchText,
                     grade:'2',
                     onlyLocalLevel:0,
                     filterMap:{
                        regionCode:['420000000000']
                     }
                 },
                totalPage:'',
                searchResData:{   //搜索到的数据
                    filterMap:{
                        titleName: [],
                        orgShortName: [] 
                     }
                },
                bumen_isShow:false,
                shixiang_isShow:false,
                // 四个级别的区划
                municipalArea:[],  //一级
                districtArea:[],   //二级
                streetArea:[],     //三级
                rcArea:[],         //四级
                isShow:false, 
                currentParentCode:'',//当用户点击全部时
                quyu_isShow:false,//区域一级选项盒子隐藏
                municipalShow:'', //区域一级选择后显示

                district_isShow:false,//区域二级选项盒子隐藏
                districtShow:'', //区域二级选择后显示

                street_isShow:false,//区域三级选项盒子隐藏
                streetShow:'', //区域三级选择后显示

                rc_isShow:false,//区域四级选项盒子隐藏
                rcShow:'', //区域四级选择后显示
            }
        },
        computed:{
            calculateResult(){
                return this.searchResData
            }
        },
        created(){
            this.querySearchData(this.searchParameter);
            this.getmunicipalArea('420000000000');
        },  
        methods: {
              handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.searchParameter.currentPage = val;
                this.querySearchData()
            },
            querySearchData(parameter){ //发送数据请求
                UserSearchData(parameter)
                .then(res => {
                    if(res.code === 1){
                        //获取数据成功
                        this.searchResData = res.data
                        console.log(res.data.result)
                        if(!res.data.result){
                            this.searchResData = []
                            this.isShow = false
                        }else{
                            this.searchResData = res.data
                            this.isShow = true
                        }
                    }
                })
            },
            searchEvent(){
                this.searchParameter.keyWord = this.newSearchVal
                this.searchParameter.currentPage = 1
                this.currentPage1 = 1
            },
            bumen_click(item){
                let arr = []
                arr[0] = item
                this.$set(this.searchParameter.filterMap, 'orgShortName', arr);
            },
            shixiang_click(item){
                let arr = []
                arr[0] = item
                this.$set(this.searchParameter.filterMap, 'titleName', arr);
            },
            deleteBumen(){ //删除部门选项
                Vue.delete(this.searchParameter.filterMap,'titleName')
            },
            deleteShixiang(){ //删除事项选项
                Vue.delete(this.searchParameter.filterMap,'orgShortName')
            },
            quyu_mouseover(){ //鼠标移入区域1
                this.quyu_isShow = true
            },
            quyu_mouseout(){  //鼠标移出区域1
                this.quyu_isShow = false
            },
            district_mouseover(){ //鼠标移入区域2
                this.district_isShow = true
            },
            district_mouseout(){  //鼠标移出区域2
                this.district_isShow = false
            },
            street_mouseover(){ //鼠标移入区域3
                this.street_isShow = true
            },
            street_mouseout(){  //鼠标移出区域3
                this.street_isShow = false
            },
            rc_mouseover(){ //鼠标移入区域4
                this.rc_isShow = true
            },
            rc_mouseout(){  //鼠标移出区域4
                this.rc_isShow = false
            },
            //获取区域
            getmunicipalArea(code){
                getArea(code).then(res => {
                    if(!res.body.length) return
                    if(res.header.retCode === "1"){ //获取数据成功
                        let grade = res.body[0].grade
                        let parentCode = res.body[0].parentCode
                        switch (grade)
                        {
                            case '2':
                            case '3':
                            this.municipalArea = res.body;
                            this.municipalArea.unshift({name:'湖北省',code:'420000000000',grade:'2'});
                            break;
                            case '4':
                            this.districtArea = res.body;
                            this.districtArea.unshift({name:'全部',code:parentCode,grade:'3'});
                            break;
                            case '5':
                            this.streetArea = res.body;
                            this.streetArea.unshift({name:'全部',code:parentCode,grade:'4'});
                            break;
                            case '6':
                            this.rcArea = res.body;
                            this.rcArea.unshift({name:'全部',code:parentCode,grade:'5'});
                            break;
                        }
                    }
                })
            },
            quyu_click(code,parentCode,name,grade){
                        this.$set(this.searchParameter, 'grade', grade);
                        this.$set(this.searchParameter.filterMap, 'regionCode', [code]);
                        if(name !== '全部') {
                        this.getmunicipalArea(code)
                        switch (grade)
                        {
                            case '2':
                            case '3':
                            this.districtArea = [] 
                            this.streetArea=[]   
                            this.rcArea=[]
                            console.log(this.municipalShow)
                            this.districtShow = '';
                            this.streetShow = '';
                            this.rcArea=[]
                            this.municipalShow = name
                            this.quyu_isShow = false;
                            break;
                            case '4':
                            this.streetArea=[]   
                            this.rcArea=[]
                            this.districtShow = '';
                            this.streetShow = '';
                            this.districtShow = name
                            this.district_isShow = false;
                            break;
                            case '5':
                            this.rcArea=[]
                            this.streetShow = '';
                            this.streetShow = name
                            this.street_isShow = false;
                            break;
                            case '6':
                            this.rcShow = name
                            this.rc_isShow = false;
                            break;
                        }
                    }else{
                         switch (grade)
                         {
                            case '3':
                            this.districtShow = '';
                            this.streetArea=[];
                            this.rcArea=[];
                            break;
                            case '4':
                            this.streetShow = '';
                            this.rcArea=[];
                            break;
                            case '5':
                            this.rcShow=''
                         }
                    }

                },
                lyLocalLevel(val){
                    this.$set(this.searchParameter, 'onlyLocalLevel', val ? 1 : 0);
                }
        },
        watch:{
            searchParameter:{//深度监听，可监听到对象、数组的变化
                handler(newval, oldVal){
                   this.querySearchData(newval)
                },
                deep:true
            }
        }
    }
</script>
<style scoped lang="less">
.searchResultes{
    .topSearch{
        height: 160px;
        background-color: #09294d;
        padding-top: 20px;
         .searchInputBox{
            height: 60px;
            margin-top: 40px;
            position: relative;
            .searchCount{
                position: absolute;
                top: 80px;
                left: 0px;
                color: #fff;
                font-size: 14px
            }
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
     .search_quyu{
        font-size: 14px;
        >div{
            display: inline-block;
            padding: 20px 10px;
            Cursor : pointer;
            font-weight: bold;
            position: relative;
            >i{
                font-weight: bold; 
                transition: 0.3s all;
                &.active{
                    transform: rotate(180deg);
                }
            }
            >.options{
                width: 400px;
                padding: 20px;
                min-height: 150px;
                background-color: #fff;
                position: absolute;
                top: 100%;
                left: 10px;
                box-shadow: 0px 1px 10px #ccc;
                color: #606266;
                font-weight: normal;
                z-index: 10;
                >ul{
                    display: inline-block;
                    >li{
                        width: 80px;
                        display: inline-block;
                        padding: 10px 0px;
                        transition: 0.3s all;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        overflow:hidden; 
                        &:hover{
                            transform: scale(1.3);
                            color: #09294d;
                        }
                    }
                }
            }
        }
    }
    .search_filter{
        margin-top: 10px;
        .choose_conditions{
            >div{
                display: inline-block;
                margin-right: 10px;
                &:not(.choose_result){
                    border:1px solid #333;
                    padding:3px;
                    cursor:pointer;
                }
                i{
                    margin-left: 5px;
                    &:hover{
                        color: #f13939;
                    }
                }
            }
        }
        .conditions_option{
            margin-top: 10px;
            border-top:1px solid #ddd;
            background-color: #f3f3f3;
            .option_title{
                width: 100px;
                padding:15px 0 0 10px;
                float: left;
                font-size: 14px;
                box-sizing: border-box;
            }
            .option_list{
                font-size: 14px;
                float: left;
                width: 1100px;
                max-height: 45px;
                overflow: hidden;
                background: #fff;
                position: relative;
                transition: all 0.3s;
                 ul{
                     padding-right: 120px;
                    li{
                        display: inline-block;
                        padding: 15px 5px;
                        box-sizing: border-box;
                        cursor:pointer;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        overflow:hidden; 
                        &:hover{
                            color: #f13939;
                        }
                    }
                }
                .isShow{
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        padding: 3px;
                        cursor:pointer;
                        &:hover{
                            color:#f13939;
                        }
                        >i{
                            transform: all 0.3s;
                        }
                }
                &.active{
                    max-height: 500px;
                    i{
                        transform: rotate(180deg);
                        transform: all 2s;
                    }
                }
            }
            .bumen_option{
                border-bottom: 1px solid #DDD;
                .option_list{
                    ul{
                        li{
                              width: 115px;
                              margin-right: 7px;
                        }
                    }
                }
            }
            .shixiang_option{
                border-bottom: 1px solid #DDD;
                li{
                   width: 85px;
                    margin-right: 4px;
                }
            }
        }
    }
    .pagBox{
        .paging{
            margin:20px auto;
            width: 638px;
            text-align: center;
        }
    }
    .showEvent{
        min-height: 300px;
        overflow: hidden;
        .showEvent_item{
            padding:20px 0;
            border-bottom: 1px dashed #ddd;
            box-sizing: border-box;
            .showEvent_title{
                font-size: 18px;
                margin-bottom: 10px;
                cursor:pointer;
                &:hover{
                    font-weight: bold;
                }
                >span:last-of-type{
                        display: inline-block;
                        width: 1000px;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        overflow:hidden; 
                    }
            }
            .item_detailed_info{
                border-top: 1px solid #ccc;
                box-sizing: border-box;
                >div{
                    width: 400px;
                    float: left;
                    padding: 10px;
                    font-size: 14px;
                    color:#000;
                    text-align: left;
                    border-right: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    box-sizing: border-box;
                    >span:first-of-type{
                        margin-right: 10px;
                    }
                }
                >div:first-of-type,>div:nth-of-type(4){
                    border-left: 1px solid #ccc;
                }
                >div:last-of-type{
                    border-left: 1px solid #ccc;
                    width: 100%;
                    .el-button{
                        padding:8px;
                        position: relative;
                    }
                    .btn_a{
                        position: absolute;
                        top:0;
                        left: 0;
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        // background-color: pink;
                    }
                }
            }
        }
    }
    .dataNull{
        width: 210px;
        margin: 150px auto 0;
        z-index: 10
    }
}
</style>
