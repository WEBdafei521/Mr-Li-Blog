<template>
  <div class="main">
    <div>
      <div class="l-header-border"></div>
      <l-banner></l-banner>
      <l-text-title  v-on:selectIndex="selectIndex" v-bind:text-title="textTitle"></l-text-title>
      <transition name="fade">
        <l-new-list v-show="select_list_title=='新闻头条'"></l-new-list>
      </transition>
      <transition name="fade">
        <l-canvas v-show="select_list_title=='canvas专区'"></l-canvas>
      </transition>
    </div>
  </div>
</template>

<script>
import Banner from '../public-component/Li-banner'
import Title from '../public-component/Li-text-title'
import newList from '../public-component/Li-new-list'
import canvasList from '../public-component/Li-canvas'


export default {
  name: 'index',
  components:{
    'l-banner':Banner,
    'l-text-title':Title,
    'l-new-list':newList,
    'l-canvas':canvasList,
  },
  data () {
    return {
      textTitle:['新闻头条','canvas专区','搞笑段子'],
      select_list_title:"新闻头条"
    }
  },
  created(){
    
  },
  methods:{
    selectIndex(index){
      this.select_list_title = this.textTitle[index]
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
