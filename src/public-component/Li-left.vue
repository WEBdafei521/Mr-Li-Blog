<!--  -->
<template>
  <div>
    <nav class="menu-wrap" :class="isMobile?'menu-wrap-mobile':''">
      <div class="menu" :class="isMobile?'menu-mobile':''">
        <ul>
          <li>
            <div>
              <i class="fa fa-home fa-lg"></i>
              <span class="nav-text">首页</span>
            </div>
          </li>
          <li>
            <div>
              <i class="fa fa-user fa-lg"></i>
              <span class="nav-text">登录</span>
            </div>
          </li>
          <li class="darkerli">
           <div>
              <i class="fa fa-clock-o fa-lg"></i>
              <span class="nav-text">新闻</span>
            </div>
          </li>

          <li class="darkerli">
           <div>
              <i class="fa fa-desktop fa-lg"></i>
              <span class="nav-text">技术</span>
            </div>
          </li>
          <li class="darkerli">
           <div>
              <i class="fa fa-microphone fa-lg"></i>
              <span class="nav-text">娱乐</span>
            </div>
          </li>
          <li class="darkerli">
           <div>
              <i class="fa fa-flask fa-lg"></i>
              <span class="nav-text">工具</span>
            </div>
          </li>
          <li class="darkerli">
           <div>
              <i class="fa fa-align-left fa-lg"></i>
              <span class="nav-text">杂志
              </span>
            </div>
          </li>
          <li>
           <div>
              <i class="fa fa-question-circle fa-lg"></i>
              <span class="nav-text">帮助</span>
            </div>
          </li>
          <li>
           <div>
              <i class="fa fa-lightbulb-o fa-lg"></i>
              <span class="nav-text">博客</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
export default {
  data () {
    return {
      isMobile:true
    };
  },
 created(){},
 components: {},
 computed: {},
 mounted(){
   if (this._isMobile()) {
     
    } else {
      this.isMobile=!this.isMobile
    }
 },
 methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
 }
}
</script>
<style scoped>

</style>