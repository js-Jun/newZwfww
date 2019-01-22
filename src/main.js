// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import rem from '@/assets/js/rem.js'
//集成element-ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

//集成iview组件库
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.use(iView);

//导入vuex的实例 store
import store from '@/store/index.js'

//全局的样式文件
import '@/styles/index.less'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
