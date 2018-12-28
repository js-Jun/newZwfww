import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

//定义数据仓库
const state = {
    userCearchText:'',
    userInfo:''  //用户信息
}

//定义用于修改数据的方法
const mutations = {

}

//用于异步修改state的数据
const actions ={}

//计算属性
const getters = {}

//导出store实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})