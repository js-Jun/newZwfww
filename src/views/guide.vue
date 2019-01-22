<template>
  <div class="guide">
    <div class="sidebar hidden-md-and-down">
      <ul>
        <li :class="{active:item.isSelection}" v-for="(item,index) in sidebarData" :key="index" @click="sideItemHandle(item)">
          <a href="javascript:;">
            {{item.name}}
          </a>
        </li>
      </ul>
    </div>
    <el-row>
        <el-col :md="3">
          <div class="bb hidden-xs-only"></div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18">
          <div class="guide-content bg-purple">
            <el-row>
              <el-col>
                <!-- <el-row>
                  <el-col>
                    <h1 class="guide_title">{{guideDetails.itemName}}</h1>
                  </el-col>
                </el-row> -->
                <!-- 基本信息 -->
                <div class="basic_info guide-info">
                  <div>
                    <h2 id="matters-part1">基本信息</h2>
                  </div>
                  <el-row>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>事项名称</h3>
                      <p>{{guideDetails.itemName}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3 id="box">事项类型</h3>
                      <p>{{guideDetails.itemTypeName}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>事项编码</h3>
                      <p>{{guideDetails.itemCode}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>办理数量限制</h3>
                      <p>{{guideDetails.numberLimit ? guideDetails.numberLimit : '无数量限制'}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>实施机构</h3>
                      <p>{{guideDetails.orgName}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>实施机构性质</h3>
                      <p>{{guideDetails.orgTypeName ? guideDetails.orgTypeName : '无'}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>监督机构</h3>
                      <p>{{guideDetails.regulatoryName ? guideDetails.regulatoryName : '无'}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>法定办结时限</h3>
                      <p>{{guideDetails.lawTime}} (工作日)</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>承诺办结时限</h3>
                      <p>{{guideDetails.agreeTime}} (工作日)</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>办件类型</h3>
                      <p>{{guideDetails.assortName}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>申请形式</h3>
                      <p>{{guideDetails.isOnlineName}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>在线预约</h3>
                      <p>{{guideDetails.orderOnline ? guideDetails.orderOnline : '无'}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>物流快递</h3>
                      <p>{{guideDetails.delivery ? guideDetails.delivery : '无'}}</p>
                    </el-col>
                     <el-col :xs="24" :sm="12" :md="8">
                      <h3>是否收费</h3>
                      <p>{{guideDetails.isChargeName ? guideDetails.isChargeName : '不收费'}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8">
                      <h3>网上支付</h3>
                      <p>{{guideDetails.payOnlineName ? guideDetails.payOnlineName : '无'}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                      <h3>结果名称和样本</h3>
                      <!-- {{guideDetails.papers ? JSON.parse(guideDetails.papers).length : null}} -->
                      <p v-if="JSON.parse(guideDetails.papers).length===1">
                        {{JSON.parse(guideDetails.papers)[0].name}}
                        (<a class="sampleDownload" href="javascript:void(0);" @click="sampleDownload(JSON.parse(guideDetails.papers))">样本
                          <i class="el-icon-download"></i>
                        </a>)
                      </p>
                      <p v-else-if="JSON.parse(guideDetails.papers).length>1">
                         <a class="sampleDownload" href="javascript:void(0);" @click="sampleDownload(JSON.parse(guideDetails.papers))">样本
                          <i class="el-icon-download"></i>
                        </a>
                      </p>
                      <p v-else>无</p>
                    </el-col>
                    <el-col :xs="24">
                      <h3>中介结构或特殊环节</h3>
                      <p>{{guideDetails.procedureName ? guideDetails.procedureName : '无'}}</p>
                    </el-col>
                    <el-col :xs="24">
                      <h3>联办机构</h3>
                      <p>{{guideDetails.coordinationOrgName ? guideDetails.coordinationOrgName : '无'}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                      <h3>申请人义务</h3>
                      <p>{{guideDetails.applicantBligations ? guideDetails.applicantBligations : '无'}}</p>
                    </el-col>
                    <el-col :xs="24">
                      <h3>进度与结果查询</h3>
                      <p>{{guideDetails.progress ? guideDetails.progress : '无'}}</p>
                    </el-col>
                    <el-col :xs="24">
                      <h3>责任事项</h3>
                      <p>{{guideDetails.responsibilityItem ? guideDetails.responsibilityItem : '无'}}</p>
                    </el-col>
                    <el-col :xs="24">
                      <h3>责任事项依据</h3>
                      <p>{{guideDetails.responsibilityItemAcc ? guideDetails.responsibilityItemAcc : '无'}}</p>
                    </el-col>
                  </el-row>
                </div>
                <!-- 范围与条件 -->
                <div class="condition_Range guide-info">
                  <div>
                    <h2 id="matters-part2">范围与条件</h2>
                  </div>
                  <h3>受理范围</h3>
                  <el-row class="Grade4">
                    <el-col :xs="24" :sm="12">
                        主题分类：
                        <template v-if="JSON.parse(guideDetails.titles).length">
                           <span v-for="(item,index) in JSON.parse(guideDetails.titles)" :key="index">{{item.name}}&nbsp;&nbsp;</span>
                        </template>
                        <template v-else>
                          <span>无</span>
                        </template>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        服务对象：{{guideDetails.serviceObjName ? guideDetails.serviceObjName : ''}}
                    </el-col>
                      <!-- <el-col :xs="24" :sm="12">
                        申请内容：无
                    </el-col> -->
                  </el-row>
                  <h3>受理要求</h3>
                  <p>
                    申请时限：{{guideDetails.timeLimit ? guideDetails.timeLimit : '无'}}
                  </p>
                  <p>
                    禁止性要求：{{guideDetails.prohibitive ? guideDetails.prohibitive : '无'}}
                  </p>
                  <p>
                    受理条件：
                    <!-- {{guideDetails.condition ? guideDetails.condition : '无'}} -->
                    <template v-if="guideDetails.condition && JSON.parse(guideDetails.condition).length">
                      <span v-for="(item,index) in JSON.parse(guideDetails.condition)" :key="index">{{item.name}}</span> <br>
                    </template>
                    <template v-else>
                      <span>
                        无
                      </span>
                    </template>
                  </p>
                </div>
                <!-- 办理流程 -->
                <div class="handle_process guide-info">
                  <div>
                    <h2 id="matters-part3">办理流程</h2>
                  </div>
                  <!-- <div>
                      <h3>{{JSON.parse(guideDetails.process)[0].name}}</h3>
                      <p>
                        {{JSON.parse(guideDetails.process)[0].content}}
                      </p>
                      <h3>{{JSON.parse(guideDetails.process)[1].name}}</h3>
                      <p>{{JSON.parse(guideDetails.process)[1].content | InterceptStr}}</p>
                  </div> -->
                  <div v-for="(item,index) in JSON.parse(guideDetails.process)" :key="index">
                      <h3>{{item.name}}</h3>
                      <p>
                        {{item.content}}
                      </p>
                  </div>
                  <div class="Grade4" v-if="guideDetails.processMapUrl">
                    <el-button type="primary" plain> <a :href="guideDetails.processMapUrl"> 查看流程图</a></el-button>
                  </div>  

                </div>
                <!-- 申请材料 -->
                <div class="apply_data guide-info">
                    <div>
                        <h2 id="matters-part4">申请资料</h2>
                    </div>
                    <div v-for="(item,index) in JSON.parse(guideDetails.material)" :key="index">
                        <h3>{{item.name}}</h3>
                      <el-row class="Grade4">
                        <el-col :xs="24">
                          材料来源：{{item.publisher}}
                        </el-col>
                        <el-col :xs="24">
                          介质要求：{{item.what ? item.what : '无'}}
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="8">
                          原件：{{item.origin}}
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="8">
                          复印件：{{item.copy}}
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="8">
                          资料下载：
                          <span :class="item.blank?'sampleDownload':'DownloadNull'" @click="getfilterUrl(item.blank)">空表<i class="el-icon-download"></i></span>
                           &nbsp;&nbsp;&nbsp;&nbsp;
                          <span :class="item.sample?'sampleDownload':'DownloadNull'" @click="getfilterUrl(item.sample)">样本<i class="el-icon-download"></i></span>
                        </el-col>
                      </el-row>
                    </div>
                </div>
                <!-- 窗口办理 -->
                <div class="Consultation_supervise guide-info">
                    <div>
                        <h2 id="matters-part5">窗口办理</h2>
                    </div>
                    <el-row>
                      <el-col v-for="(item,index) in JSON.parse(guideDetails.windows)" :key="index">
                        <h3>{{item.address}}</h3>
                        <p>
                          办公电话：{{item.phone ? item.phone : '无'}} <br>
                          投诉电话：{{item.complaitPhone ? item.complaitPhone : '无'}} <br>
                          办公时间：<span style="display:inline-block">{{item.officeTime ? item.officeTime : '无'}}</span> <br>
                          <span class="hidden-md-and-down">
                            地图指引：<el-button type="primary" plain @click="mapShow(item)">点击查看路线</el-button>
                          </span>
                        </p>
                      </el-col> 
                    </el-row>
                </div>
                <!-- 中介服务 -->
                <!-- 咨询监督 -->
                <div class="Consultation_supervise guide-info">
                    <div>
                        <h2 id="matters-part6">咨询监督</h2>
                    </div>
                    <el-row>
                        <el-col>
                              <h3>咨询</h3>
                              <p>
                                  {{guideDetails.consultMethod ? guideDetails.consultMethod : '无'}}
                              </p>
                        </el-col>
                        <el-col>
                              <h3>监督投诉</h3>
                              <p>
                                 {{guideDetails.superviseComplaints ? guideDetails.superviseComplaints : '无'}}
                              </p>
                        </el-col>
                    </el-row>
                </div>
                <!-- 常见问题 -->
                 <div class="Consultation_supervise guide-info">
                   <div>
                      <h2 id="matters-part7">常见问题</h2>
                   </div>
                   <div v-if="JSON.parse(guideDetails.questions).length">
                      <p v-for="(item,index) in JSON.parse(guideDetails.questions)" :key="index">
                        {{item}}
                      </p>
                   </div>
                    <p v-else>
                      暂无数据
                    </p>
                 </div>
                <!-- 设定依据 -->
                <div class="establishment_basis guide-info guide-info-last">
                    <div>
                        <h2 id="matters-part9">设定依据</h2>
                    </div>
                    <p>
                      {{guideDetails.ordinance}}
                  </p>
                </div>
                <!-- 多个样本弹窗下载 -->
                <el-dialog class="sampleDownload" :visible.sync="dialogVisible" :before-close="handleClose">
                  <el-table
                    :data="filterData"
                    style="width: 100%">
                    <el-table-column
                      type="index"
                      label="序号"
                      width="50px">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="附件名称">
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      width="80px"
                      align="center">
                        <template slot-scope="scope">
                            <div class="downloadOperation" @click="getfilterUrl(scope.row.url)">
                              <span style="margin-left: 5px">下载</span>
                              <i class="el-icon-download"></i>
                            </div>
                        </template>
                    </el-table-column>
                  </el-table>
                </el-dialog>
                <el-dialog class="mapBoxStyle hidden-md-and-down" width="80%" title="地图指引" :visible.sync="dialogVisibleMap" :before-close="handleCloseMap">
                      <iframe :src="mapStrUrl" class="mobsf" id="mobsf" scrolling="auto" frameborder="0" style="position:absolute;top:38px;left:0px;height:95%"></iframe>
                </el-dialog>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :md="3">
          <div class="bb hidden-xs-only"></div>
        </el-col>
      </el-row>
      <div id="allmap"></div>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/display.css";
import AutoLayout from '@/components/AutoLayout.vue'
import { scrollAnimation } from '@/assets/js/scrollTop.js'
import {getGuideDetails,getGuideEnclosureDownloadUrl} from '@/api/index.js'
import AMap from 'AMap'
export default {
  components: {
    AutoLayout
  },
  // filters:{
  //   InterceptStr(val){
  //     console.log(val)
  //   }
  // },
  data() {
    return {
      dialogVisible: false,
      dialogVisibleMap:false,
      guideDetails:{
        papers:'[]',
        titles:'[]',
        process:'[]',
        material:'[]',
        windows:'[]',
        condition:'[]',
        questions:'[]'
      },
      mapStrUrl:'',
       filterData: [],
       origin:'', //当前经纬度字符串
       originName:'',//当前地址
       destination:'',//终点经纬度字符串
       currentCityName:'',
      sidebarData:[
        {name:'基本信息',id:'matters-part1',isSelection:true},
        {name:'范围与条件',id:'matters-part2',isSelection:false},
        {name:'办理流程',id:'matters-part3',isSelection:false},
        {name:'申请材料',id:'matters-part4',isSelection:false},
        {name:'窗口办理',id:'matters-part5',isSelection:false},
        {name:'咨询监督',id:'matters-part6',isSelection:false},
        {name:'常见问题',id:'matters-part7',isSelection:false},
        // {name:'中介服务',id:'matters-part8',isSelection:false},
        {name:'设定依据',id:'matters-part9',isSelection:false},
      ],
    };
  },
  created(){
    // 07903DE9978946B29C43A2E44EF51B8D  this.$route.params.id
    getGuideDetails('F974C700C88B4578B899AA8230183BDD').then(res => {
      console.log(res)
      if(res.code != 1) {
        this.$message({
          showClose: true,
          message: res.msg,
          type: 'error'
        });
        return
      }
        this.guideDetails =res.data
        console.log(res.data)
    })
  },
  mounted() {
    window.scrollTo(0,0);
    window.addEventListener("scroll", this.handleScroll);
    let _then = this
      var map = new AMap.Map('', {
        resizeEnable: true
        })
      map.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)
        function onComplete (data) {
          console.log(data)
            // data是具体的定位信息
            _then.origin =data.position.R+','+data.position.Q
            _then.originName = data.formattedAddress
            _then.currentCityName = data.addressComponent.city
            console.log( _then.origin)
        }
        function onError (data) {
            // 定位出错
        }
    })
  },
  methods: {
    //获取样本的下载地址下载
    getfilterUrl(filterId){
      if(!filterId) return
        getGuideEnclosureDownloadUrl(filterId).then(res => {
          const url = res.data
         window.open(url)
        })
    },
    // 单样本下载
    sampleDownload(obj){
      console.log(obj)
      if(obj.length === 1){
        const filterId = obj[0].url
        this.getfilterUrl(filterId)
      }else{
        this.filterData = obj
        this.dialogVisible = true
      }
    },
    mapShow(obj) {
        this.dialogVisibleMap = true
        this.destination = obj.longitude+','+obj.latitude
        console.log(this.destination)
        this.mapStrUrl = `http://uri.amap.com/navigation?from=${this.origin},${this.originName}&to=${this.destination},${obj.address}&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=0`
        // this.mapStrUrl = `http://api.map.baidu.com/direction?origin=latlng:${this.origin}|name:${this.originName}&destination=latlng:${this.destination}|name:${obj.address}&mode=driving&region=${this.currentCityName}&output=html&src=`
    },
    handleClose() {
       this.dialogVisible = false;
    },
    handleCloseMap(){
        this.dialogVisibleMap = false;
    },
    sideItemHandle(item){
      this.sidebarData.forEach((v,i) => {
        this.$set(v, 'isSelection', false);
      })
      item.isSelection = true
      const currentY = document.documentElement.scrollTop || document.body.scrollTop
      const targetY = document.getElementById(item.id).offsetTop-100
      scrollAnimation(currentY, targetY)
    },
    handleScroll() {
      // 监听滚动
      let docScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.sidebarData.forEach((v,i) => {
        const docY = document.getElementById(v.id).offsetTop
        if(docScrollTop > docY-200){
              this.sidebarData.forEach((val,i) =>{
                this.$set(val, 'isSelection', false)
              })
             this.$set(v, 'isSelection', true) 
        }else{
         this.$set(v, 'isSelection', false)
        } 
      })
    }
  },
  beforeDestroy(){
      window.removeEventListener("scroll", this.handleScroll);//监听页面滚动事件
  },
};
</script>
<style lang="less" scope>
.guide {
  .mapBoxStyle{
    .el-dialog{
      margin-top: 4vh !important;
      height: 90%;
      .el-dialog__header{
        background: #DAE7F5;
        height: auto;
        padding: 7px 0 7px 20px;
        .el-dialog__headerbtn{
          top:10px; 
        }
            .el-dialog__title{
            font-size: 14px;
            color: #409EFF;
          }
      }
      .mobsf{
          width:100%;
        }
    }
  }
 .sidebar{
   width: 100px;
   border-right: 1px solid rgb(226, 226, 226);
   position: fixed;
   top: 80px;
   left: 5%;
   z-index: 10;
   >ul{
     >li{
        padding: 10px 0;
        position: relative;
        &.active::after{
          content: '';
          width: 3px;
          height: 18px;
          background-color: #409EFF;
          position: absolute;
          right: 2px;
          top: 10px;
          
        }
       >a{
         font-size: 14px;
         color: #777;
         font-weight: 700;
         display: block;
         text-align: right;
         padding: 0 15px;
         &:hover{
           color: #409EFF;
         }
       }
       &.active{
         a{
           color:#409EFF;
         }
       }
     }
   }
 }
  h2 {
    font-weight: 700;
  }
  h3 {
    font-weight: 700;
    padding: 5px 0;
    line-height: 20px;
    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: #409EFF;
      transform: rotate(45deg);
      margin-right: 10px;
      position: relative;
      top: -2px;
    }
  }
  .elH {
    min-height: 10px;
  }
  .bb {
    min-height: 36px;
  }
  .sampleDownload {
    display: inline-block;
    color: #409eff;
    cursor: pointer;
  }
  .DownloadNull{
    display: inline-block;
    color: #C0C4CC;
    Cursor : default;
  }
  .guide-content {
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
    .basic_info{
      margin-top: 10px;
    }
    p,.Grade4 {
      padding-left: 14px;
      line-height: 25px;
    }
  }
  .el-dialog__header{
    padding: 0;
    height: 20px;
    .el-dialog__headerbtn{
      top: 5px;
      right: 10px;
    }
  }
  .el-dialog__body{
    padding: 0 0 10px 20px;
    .downloadOperation{
      Cursor:pointer;
      color: #409eff;
    }
  }
}
@media screen and (min-width: 768px) {
  .el-dialog {
    &.sampleDownload{
    width: 500px !important;
    }
  }
  .guide {
    h1 {
      font-size: 32px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 24px;
      padding-bottom: 5px;
      border-bottom: 3px solid #000;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
    .guide-content {
      .guide_title{
        text-align: center;
      }
      .guide-info {
        margin-bottom: 40px;
        min-height: 200px;
        &-last{
          min-height: 500px;
        }
        .el-col {
          margin-bottom: 10px;
        }
      }

    }
  }
}
@media screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .el-dialog {
    width: 80% !important;
    margin-top: 25vh !important;
  }
  .guide {
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 18px;
      padding-bottom: 5px;
      border-bottom: 3px solid #000;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
    margin-top: 0;
    .guide-content {
      .guide_title{
        text-align: left;
      }
      .guide-info {
        margin-bottom: 30px;
        .Grade4{
            font-size: 14px;
        }
      }
      border: none;
    }
  }
}
</style>
