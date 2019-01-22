import axios from 'axios'
//请求拦截
// axios.interceptors.request.use(
//     config => {
//         console.log('config')
//         console.log(config)
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });
//响应拦截
// axios.interceptors.response.use(
//     response => {
//         console.log('response')
//         console.log(response)
//         return response;
//     },
//     error => {
//         console.log('error')
//         console.log(error)
//     });

//搜索事项
export const UserSearchData = params => {
    return axios.post(`/item/search/k/`,params).then(res => res.data)
}
//键盘抬起搜索
export const UserKeyUpSearchData = params => {
    return axios.post(`/item/search/prek/`,params).then(res => res.data)
}
//根据父级编码获取下级区划
export const getArea = params => {
    return axios.get(`network/comm/pub/region/${params}/getReginsByAreaCode`).then(res => res.data)
}
// 根据区划查找部门
export const getbumen = params => {
    return axios.get(`/area/comm/pub/organ/${params}/getOrgan`).then(res => res.data)
}
//网办深度
export const getNetworkClass = () => {
    return axios.get(`network/comm/dict/10020/type`).then(res => res.data)
}
//办事指南 事项详情
export const getGuideDetails = params => {
    return axios.get(`network/infos/item/item/query/${params}/info`).then(res => res.data)
}
//事项附件下载
export const getGuideEnclosureDownloadUrl = params => {
    return axios.get(`network/infos/item/item/query/file?fileId=${params}`).then(res => res.data)
}
//请求用户信息
export const queryUserInfo = () => {
    return axios.get(`/user/login/5`).then(res => res.data)
}
//添加用户邮箱
export const addUserEmail = params => {
    return axios.post(`/user/sys/insertEmail`,params).then(res => res.data)
}
//删除用户邮箱
export const deleteUserEmail = params => {
    return axios.post(`/user/sys/deleteEmail`,params).then(res => res.data)
}
//添加用户手机号
export const addUserPhone = params => {
    return axios.post(`/user/sys/insertPhone`,params).then(res => res.data)
}
//删除手机号
export const deleteUserPhone = params => {
    return axios.post(`/user/sys/deletePhone`,params).then(res => res.data)
}
//添加用户联系地址
export const addUserAddress = params => {
    return axios.post(`/user/sys/insertAddress`,params).then(res => res.data)
}
//删除地址
export const deleteUserAddress = params => {
    return axios.post(`/user/sys/deleteAddress`,params).then(res => res.data)
}