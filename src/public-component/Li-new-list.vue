<!--  -->
<template>
  <div>
    <div class="l-new-list">
        <div class="l-new-title">
          <div class="l-new-color">最新文章</div>
          <div>{{data}}，作者：<span class="l-new-color">李鹏</span></div>
        </div>
        <div class="l-new-item" v-for="(item,index) of newList" :key="index">
          <div class="l-new-item-title">Linux服务器测试性能</div>
          <div class="l-new-content">
              最近需要测试国外vps到国内的速度以及硬件的性能，具体可以参考这篇文章：三大免费工具助你检测VPS服务器真伪-VPS主机性能和速度测试方法
          </div>
          <div class="l-new-author">--作者名</div>
          <div class="l-new-go">阅读全文</div>
        </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs' //引入 node中自带的qs模块（对application/x-www-form-urlencoded数据格式转换）
import { getNewList } from '@/api'  // 导入 封装的请求函数
export default {
  components: {},
  data () {
    return {
      newList:[],
      data:""
    };
  },
 created(){
    this.getTime()
    getNewList(`?type=keji&key=5abe1b42340cc4ef31ff344434937c0a`).then(res=>{
      this.newList = res.data.result.data
      console.log(res.data.result.data)
        // get请求，url传值。用的是字符串模板传值
        // 请求返回数据
    }).catch(err=>{
        // 请求失败执行
    })
 },
 methods:{
  getTime(){
    var data = new Date();
    data.setTime(data.getTime()-24*60*60*1000);
    var date = data.getFullYear()+"年" + (data.getMonth()+1) + "月" + data.getDate()+"日";
    this.data = date
  }

 },
 mounted(){},
 computed:{},
}
</script>
<style scoped>
.l-new-list,.l-new-title,.l-new-item{
  padding: 28px;
  box-sizing: border-box;
}
.l-new-color{
  color:#E9330C;
}
.l-new-title{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F9F4E2;
}
.l-new-item{
  background: rgba(229,223,209,.7);
  margin-bottom: 32px;
}
.l-new-item-title{
  color:#87655B;
  font-size: 30px;
  padding-bottom: 16px;
}
.l-new-content{
  line-height: 42px;
  margin-bottom:24px;
}
.l-new-author{
  width: 1004;
  text-align: right;
}
.l-new-go{
  width:100px;
  height: 44px;
  line-height: 44px;
  padding: 8px 16px;
  text-align: center;
  background: #E9330C;
  color: #fff;
}
</style>