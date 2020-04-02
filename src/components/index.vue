<template>
  <div class="main">
    <div>
      <!-- <div>123</div> -->
      <!-- <div class="l-header-border"></div> -->
      <!-- <l-banner></l-banner> -->
      <!-- text-tittle -->
      <l-text-title  v-on:selectIndex="selectIndex" v-bind:text-title="['text1','text2','text3']"></l-text-title>
      <l-new-list></l-new-list>
    </div>
  </div>
</template>

<script>
import Banner from '../public-component/Li-banner'
import Title from '../public-component/Li-text-title'
import newList from '../public-component/Li-new-list'


export default {
  name: 'index',
  components:{
    'l-banner':Banner,
    'l-text-title':Title,
    'l-new-list':newList,
  },
  data () {
    return {
    }
  },
  created(){
    
  },
  methods:{
    selectIndex(index){
      console.log(index)
    }
  }
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
