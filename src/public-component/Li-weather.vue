<!--  -->
<template>
  <div>
    <div class="l-jock-list">
      <div>{{LocationCity}}</div>    
      <div class="l-weather-title">
          <div>=</div>
          <div>{{LocationCity}}</div>
          <div>彡</div>
      </div>    
    </div>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  components: {},
  data () {
    return {
      LocationCity:"正在定位"
    };
  },
 created(){},
 methods:{
  city(){    //定义获取城市方法
     const geolocation = new BMap.Geolocation();
     var _this = this
     geolocation.getCurrentPosition(function getinfo(position){
         let city = position.address.city;             //获取城市信息
         let province = position.address.province;    //获取省份信息
         _this.LocationCity = city
     }, function(e) {
         _this.LocationCity = "定位失败"
     }, {provider: 'baidu'});		
  }
 },
 mounted(){
   this.city()
 },
 computed:{},
}
</script>
<style scoped>
.l-jock-list{
    background-size: 100% 100%;
    background: url('../assets/img/weather.jpg') center center no-repeat;
    height: 100%;
    position: fixed;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
}
.l-weather-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
}
.l-weather-title>div{
  padding: 16px;
}

</style>