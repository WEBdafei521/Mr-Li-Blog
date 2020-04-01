<template>
  <div class="main">
    <div>
      <!-- <div>123</div> -->
      <div class="l-header-border"></div>
      <l-banner></l-banner>
      <!-- text-tittle -->
      <l-text-title></l-text-title>

    </div>
  </div>
</template>

<script>
import Banner from '../public-component/Li-banner'
import Title from '../public-component/Li-title'

import qs from 'qs' //引入 node中自带的qs模块（对application/x-www-form-urlencoded数据格式转换）
import { getNewList } from '@/api'  // 导入 封装的请求函数
export default {
  name: 'index',
  components:{
    'l-banner':Banner,
    'l-text-title':Title,
  },
  data () {
    return {
    }
  },
  created(){
    getNewList(`?type=shishang&key=5abe1b42340cc4ef31ff344434937c0a`).then(res=>{
      console.log(res)
        // get请求，url传值。用的是字符串模板传值
        // 请求返回数据
    }).catch(err=>{
        // 请求失败执行
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-header-border{
  position: fixed;
  top: 0;
  z-index: 9999999;
  width:100vw;
  height: 10px;
  background:#000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);;
}

</style>
