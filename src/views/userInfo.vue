<template>
    <div class="userinfo fixedCenterStyle">
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="个人信息">
                <!-- 基础信息 -->
                <div class="basisInfo">
                    <h2 class="title">基础信息</h2>
                    <ul class="basisInfoBox">
                        <li class="ulItem">
                            <ul class="clearfix">
                                <li><span>个人姓名</span><span class="w380">{{userInfo.personName}}</span></li>
                                <li><span>性别</span><span>{{userInfo.sex}}</span></li>
                            </ul>
                        </li>
                         <li class="ulItem">
                            <ul class="clearfix">
                                <li><span>证件类型</span><span class="w380">身份证</span></li>
                                <li><span>证件号码</span><span>{{userInfo.idCard | idCodeFilter}}</span></li>
                            </ul>
                        </li>
                         <li class="ulItem">
                            <ul class="clearfix">
                                <li class="phoneCOdeBOx">
                                    <span>电话号码</span>
                                    <span>
                                        <el-tooltip class="item" effect="light" :content="item.title === null?'无':item.title" placement="top-start"  v-for="item in userInfo.phoneDtos" :key ="item.id">
                                        <el-tag type="info" style="width:115px;margin-right:5px;color:#112534" closable  @close="handlePhoneClose(item.id)">{{item.phone}}</el-tag>
                                        </el-tooltip>
                                        <el-button type="text" @click="addPhoneFormVisible=true">添加电话号码</el-button>
                                    </span>
                                </li>
                            </ul>
                        </li>
                         <li class="ulItem">
                            <ul class="clearfix">
                               <li>
                                   <span>邮箱地址</span>
                                   <el-tooltip class="item" effect="light" :content="item.title === null?'无':item.title" placement="top-start"  v-for="item in userInfo.emailDtos" :key="item.id">
                                        <el-tag type="info" style="margin-right:5px; padding:0 10px;color:#112534" closable @close="handleEmailClose(item.id)">{{item.email}}</el-tag>
                                   </el-tooltip>
                                   <el-button type="text" @click="addEmailFormVisible = true">添加邮箱地址</el-button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- 联系地址 -->
                <div class="userAddress">
                    <h2 class="title">联系地址<el-button type="primary" plain class="fr addBtn" @click="addAddressFormVisible=true">添加地址</el-button></h2>
                     <el-table
                        ref="filterTable"
                        :data="userInfo.addressDtos"
                        style="width: 100%">  
                        <el-table-column
                        prop="address"
                        label="地址">
                        </el-table-column>
                        <el-table-column
                        prop="isDefault"
                        label="是否默认地址">
                        <!-- <template slot-scope="scope">
                            <el-tag disable-transitions>{{scope.row.isDefault === 1001102 ? '否' : '是'}}</el-tag>
                        </template> -->
                        </el-table-column>
                        <el-table-column
                        prop="title"
                        label="标签">
                        <template slot-scope="scope">
                            <el-tag disable-transitions>{{scope.row.title}}</el-tag>
                        </template>
                        </el-table-column>
                        <el-table-column
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click = "deleteAddress(scope.row.id)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
                <!-- 等级认证 -->
                <div class="levelCertification">
                    <h2 class="title">等级认证</h2>
                    <el-table
                    ref="levelTable"
                    :data="userInfo.authenticationDtos"
                    style="width: 100%">  
                        <el-table-column
                        prop="authenticationLevel"
                        label="级别">
                        </el-table-column>
                         <el-table-column
                        prop="authenticationName"
                        label="认证名称">
                        </el-table-column>
                        <el-table-column
                        prop="authenticationStatus"
                        label="是否认证">
                        </el-table-column>
                    </el-table>
                </div>
                <!-- 添加电话start -->
                <el-dialog title="添加手机号" :visible.sync="addPhoneFormVisible">
                    <el-form :model="addPhoneForm" :rules="phoneRules" label-width="80px" ref="addUserPhoneForm">
                        <el-form-item label="类型" prop="type">
                            <el-radio v-model="addPhoneForm.type" label="10010031">固话</el-radio>
                            <el-radio v-model="addPhoneForm.type" label="10010032">手机</el-radio>
                        </el-form-item>
                         <el-form-item label="标题" prop="title">
                        <el-input v-model="addPhoneForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="号码" prop="phone">
                        <el-input v-model="addPhoneForm.phone" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="addPhoneFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="addUserPhone('addUserPhoneForm')">确 定</el-button>
                    </div>
                </el-dialog>
                <!-- 添加电话end -->

                <!-- 添加邮箱start -->
                <el-dialog title="添加邮箱" :visible.sync="addEmailFormVisible">
                    <el-form :model="addEmailForm" :rules="emailRules" label-width="80px" ref="addUserEmailForm">
                        <el-form-item label="标题" prop="title">
                        <el-input v-model="addEmailForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                        <el-input v-model="addEmailForm.email" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="addEmailFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="addUserEmail('addUserEmailForm')">确 定</el-button>
                    </div>
                </el-dialog>
                <!-- 添加邮箱end -->
                <!-- 添加地址start -->
                <el-dialog title="添加联系地址" :visible.sync="addAddressFormVisible">
                    <el-form :model="addAddressForm" :rules="addressRules" label-width="80px" ref="addUserAddressForm">
                        <el-form-item label="是否默认" prop="isDefault">
                            <el-radio v-model="addAddressForm.isDefault" label="1001101">是</el-radio>
                            <el-radio v-model="addAddressForm.isDefault" label="1001102">否</el-radio>
                        </el-form-item>
                         <el-form-item label="标题" prop="title">
                        <el-input v-model="addAddressForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="地址" prop="address">
                            <el-cascader
                            size="large"
                            :options="options"
                            v-model="addAddressForm.selectedOptions">
                            </el-cascader>
                        </el-form-item>
                        <el-form-item label="详细地址" prop="detailedAddress">
                        <el-input v-model="addAddressForm.detailedAddress" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="addAddressFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="addUserAddress('addUserAddressForm')">确 定</el-button>
                    </div>
                </el-dialog>
                <!-- 添加地址end -->
            </el-tab-pane>
            <el-tab-pane label="证件资料">证件资料</el-tab-pane>
            <el-tab-pane label="我的事项">我的事项</el-tab-pane>
            <!-- <el-tab-pane label="咨询投诉">咨询投诉</el-tab-pane> -->
            <el-tab-pane label="我的互动">我的互动</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import {queryUserInfo,addUserEmail,deleteUserEmail,addUserPhone,deleteUserPhone,addUserAddress,deleteUserAddress} from '@/api/index.js'
import { regionDataPlus,CodeToText } from 'element-china-area-data'
    export default{
        data(){
            return {
                tabPosition:'left',
                userInfo:this.$store.state.userInfo,    //用户信息
                userId:this.$store.state.userInfo.personId,  //用户id
                accountType:this.$store.state.userInfo.accountType, //用户类型
                addEmailFormVisible:false, //添加邮箱弹出框
                addPhoneFormVisible:false,    //添加手机号弹出框
                addAddressFormVisible:false, //添加联系地址弹出框
                addEmailForm:{             //添加邮箱配对数据
                    title:'',
                    email:'',
                },
                addPhoneForm:{             //添加手机号配对数据
                    title:'',
                    type:'10010031',
                    phone:''
                },
                options: regionDataPlus,
                addAddressForm:{
                    isDefault:'1001102',
                    title:'',
                    selectedOptions:["420000", ""],
                    detailedAddress:''
                },
                emailRules:{        //添加邮箱的校验规则
                    title:[
                        { required: true, message: '请输入标题名称', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' },
                    ],
                    email:[
                         { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                         { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]
                },
                phoneRules:{
                     title:[
                        { required: true, message: '请输入标题名称', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' },
                    ],
                    phone:[
                         { required: true, message: '请输入号码', trigger: 'blur' },
                        //  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]
                },
                addressRules:{
                    title:[
                        { required: true, message: '请输入标题名称', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' },
                    ],
                }
            }
        },
        methods:{
                //初始化用户信息
                initUserInfo(){
                     queryUserInfo()
                    .then(res => {
                    if(res.header.retStatus === 'S'){
                        //获取用户信息成功
                        this.userInfo = res.body;
                        this.userId = res.body.personId;
                        this.accountType = res.body.accountType;
                    }else{
                        this.$message.error('获取用户信息时出错');
                    }
                    })
                    .catch(err => {
                    this.$message.error('服务器请求失败，请检查网络');
                })
                },
                addUserEmail(dom){ //添加邮箱
                    let UserEmail = {
                        "userId":this.userId,
                        "accountType":this.accountType,
                        "isDefault":'',
                        "title":this.addEmailForm.title,
                        "email":this.addEmailForm.email
                    }
                    console.log(UserEmail)
                    this.$refs[dom].validate((valid) => {
                    if (valid) {
                        addUserEmail(UserEmail)
                        .then(res => {
                            if(res.header.retStatus === 'S'){
                                this.addEmailFormVisible = false
                                this.initUserInfo()
                                this.$refs[dom].resetFields();
                                this.$message({
                                showClose: true,
                                message: '添加成功',
                                type: 'success'
                                });
                            }else{
                               this.$message.error(res.header.msg);
                            }
                        })
                    } else {
                        console.log('error submit!!');
                    }
                    });

                },
                handleEmailClose(id) {  //删除邮箱
                    let userEmailInfo = {
                        "userId":this.userId,
                        "accountType":this.accountType,
                        "contactId":id
                        }
                    deleteUserEmail(userEmailInfo)
                    .then(res => {
                        if(res.header.retStatus === 'S'){
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                            this.initUserInfo() //删除后重新获取用户数据
                        }else{
                            this.$message({
                            message: '删除失败',
                            type: 'warning'
                            });
                        }
                    })
                },
                handlePhoneClose(id){
                    let deletePhone = {
                        "userId":this.userId,
                        "accountType":this.accountType,
                        "contactId":id
                    }
                    deleteUserPhone(deletePhone)
                    .then(res => {
                        if(res.header.retStatus === 'S'){
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                            this.initUserInfo() //删除后重新获取用户数据
                        }else{
                            this.$message({
                            message: '删除失败',
                            type: 'warning'
                            });
                        }
                    }).catch(err => {
                        this.$message.error('服务器请求失败，请检查网络');
                    })
                },
                addUserPhone(dom){  //添加手机号
                    console.log(this.addPhoneForm)
                    let userPhone ={
                        "userId":this.userId,
                        "accountType":this.accountType,
                        "isDefault":'',
                        "title":this.addPhoneForm.title,
                        "phone":this.addPhoneForm.phone,
                        "type":this.addPhoneForm.type
                    }
                    this.$refs[dom].validate((valid) => {
                    if (valid) {
                        addUserPhone(userPhone)
                        .then(res => {
                            if(res.header.retStatus === 'S'){
                                this.initUserInfo()
                                this.addPhoneFormVisible = false
                                this.$refs[dom].resetFields();
                                this.$message({
                                showClose: true,
                                message: '添加成功',
                                type: 'success'
                                });
                            }else{
                                this.$message.error(res.header.msg);
                            }
                        }).catch(err => {
                            this.$message.error('服务器请求失败，请检查网络');
                        })
                    } else {
                        console.log('error submit!!');
                    }
                    });
                },
                addUserAddress(dom){   //添加用户联系地址
                    console.log(this.addAddressForm)
                    let addressArr = this.addAddressForm.selectedOptions;
                    let addressStr = '';
                    if(addressArr.length === 1 && addressArr[0] !== ''){
                            addressStr = CodeToText[addressArr[0]]
                    }else if(addressArr.length === 2){
                        if(addressArr[1] !== ''){
                            addressStr = CodeToText[addressArr[0]] + CodeToText[addressArr[1]]
                        }else{
                            addressStr = CodeToText[addressArr[0]]
                        }
                    }else if(addressArr.length === 3){
                        if(addressArr[2] !== ''){
                            addressStr = CodeToText[addressArr[0]] + CodeToText[addressArr[1]] + CodeToText[addressArr[2]]
                        }else{
                            addressStr = CodeToText[addressArr[0]] + CodeToText[addressArr[1]]
                        }
                    }
                    addressStr += this.addAddressForm.detailedAddress
                    let userAdderss = {
                        "userId":this.userId,
                        "accountType":this.accountType,
                        "isDefault":this.addAddressForm.isDefault,
                        "title":this.addAddressForm.title,
                        "address":addressStr
                    }
                     this.$refs[dom].validate((valid) => {
                    if (valid) {
                        addUserAddress(userAdderss)
                        .then(res => {
                            if(res.header.retStatus === 'S'){
                                this.initUserInfo()
                                this.addAddressFormVisible = false
                                this.$refs[dom].resetFields();
                                this.$message({
                                showClose: true,
                                message: '添加成功',
                                type: 'success'
                                });
                            }else{
                                this.$message.error(res.header.msg);
                            }
                        }).catch(err => {
                            this.$message.error('服务器请求失败，请检查网络');
                        })
                    } else {
                        console.log('error submit!!');
                    }
                    });
                },
                deleteAddress(id){ // 删除用户地址
                     let userAddressInfo = {
                        "userId":this.userId,
                        "accountType":this.accountType,
                        "contactId":id
                        }
                    deleteUserAddress(userAddressInfo)
                    .then(res => {
                        if(res.header.retStatus === 'S'){
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                            this.initUserInfo() //删除后重新获取用户数据
                        }else{
                            this.$message({
                            message: '删除失败',
                            type: 'warning'
                            });
                        }
                    }).catch(err => {
                        this.$message.error('服务器请求失败，请检查网络');
                    })
                } 
                },
                created () {
                  this.initUserInfo()  
                },
                filters:{
                    //身份证号的过滤 只显示前两位和最后两位
                    idCodeFilter(oldVal){
                        return oldVal.replace(/(\d{4})\d*([0-9a-zA-Z]{4})/,"$1**********$2");
                    }
                }
        }
    
</script>
<style lang="less" scoped>
    .userinfo{
        padding-top: 50px;
       .basisInfo{
           margin-bottom: 60px;
           .title{
               font-size: 24px;
                font-weight: bold;
                border-bottom: 4px solid currentColor;
                padding-bottom: 15px;
           }
           .basisInfoBox{
               width: 100%;
                font-size: 16px;
                margin-top: 35px;
                .ulItem{
                    margin-bottom: 30px;
                    ul{
                        li{
                            float: left;
                            span:first-of-type{
                                display:inline-block;
                                width: 7em;
                                text-align: left;
                                color: #777;
                                font-weight: normal;
                            }
                            span:last-of-type{
                                color:#112534
                            }

                        }
                        li:first-of-type{
                            span.w380:last-of-type{
                                display:inline-block;
                                width: 380px;
                            }
                        }
                    }
                }
                
           }
       }
       .userAddress{
           margin-bottom: 50px;
           .title{
                font-size: 24px;
                font-weight: bold;
                border-bottom: 4px solid currentColor;
                padding-bottom: 15px;
                .addBtn{
                    margin-top: -10px
                }
           }
       }
       .levelCertification{
            margin-bottom: 50px;
           .title{
               font-size: 24px;
                font-weight: bold;
                border-bottom: 4px solid currentColor;
                padding-bottom: 15px;
           }
       }
    }
</style>
