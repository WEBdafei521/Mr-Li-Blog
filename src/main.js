// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// particles 页面背景图形
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    preLoad:0.2,
    error:'./assets/img/error.png',
    loading:'./assets/img/loading.png',
    attempt: 1
})


// 技术专区 echarts引入
import Echarts from 'echarts'
import 'echarts-liquidfill'
import 'echarts-wordcloud'
Vue.prototype.echarts = Echarts
Vue.use(Echarts)

Vue.config.productionTip = false
import 'lib-flexible'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
