<!--  -->
<template>
  <div>
    <div class="l-text-title">
        <ul class="l-text-ui" @click="selectItem">
          <li v-for="(item,index) of textTitle" :data-index="index" :key="index" :class="active==index?'l-text-active':''">{{item}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import  Velocity from 'velocity-animate'
export default {
  props:{
    textTitle: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return  ['text1','text2','text3','text4','text5']
      }
    },
  },
  data () {
    return {
      active:0
    };
  },
 created(){},
 methods: {
   selectItem(e){
     if(e.target.dataset.index){
        this.active=e.target.dataset.index;
        this.$emit("selectIndex",e.target.dataset.index)
     }
     
    //  console.log(e)
		//  console.log(e.target.dataset.index)
   }
 },
 components: {},
 computed: {},
 mounted() {},
}
</script>
<style scoped>
.l-text-title{
  height: 88px;
  background: #ffc600;
}
.l-text-ui{
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: center;
  height: 88px;
}
.l-text-ui>li{
  width: 166px;
  text-align: center;
  font-size: 32px;
  list-style:none;
  height:88px;
  line-height: 88px;
  color: #E9330C;
  transition: all .5s ease-in-out;
  border-right: 1px solid #fff;
}
.l-text-active{
  background:#EB5A41 ;
  color: #fff !important;
}
</style>