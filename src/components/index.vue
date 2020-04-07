<template>
  <div class="main">
    <div>
      <!-- <div class="l-header-border"></div> -->
      <l-banner></l-banner>
      <l-text-title  v-on:selectIndex="selectIndex" v-bind:text-title="textTitle"></l-text-title>
      <div class="l-index-contain">
        <transition name="fade" v-on:enter="enter_newList" v-on:leave="leave_newList">
          <div class="l-new-list" v-show="select_list_title=='新闻头条'">
            <l-new-list></l-new-list>
          </div>
        </transition>
        <transition name="fade" v-on:enter="enter_canvas" v-on:leave="leave_canvas">
          <div class="l-canvas" v-show="select_list_title=='canvas专区'">
            <l-canvas></l-canvas>
          </div>
        </transition>
      </div>
        
    </div>
  </div>
</template>

<script>
import Banner from '../public-component/Li-banner'
import Title from '../public-component/Li-text-title'
import newList from '../public-component/Li-new-list'
import canvasList from '../public-component/Li-canvas'
import Velocity from 'velocity-animate'

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
    enter_newList: function (el, done) {
      console.log("newList-enter")
      Velocity(el, { opacity: 1}, { duration: 500 })
    },

    leave_newList: function (el, done) {
      console.log("newList-leave")
      Velocity(el, { opacity: 0}, { complete: done })
    },
    
    enter_canvas: function (el, done) {
      console.log("canvas-enter")
      Velocity(el, { opacity: 1}, { duration: 500 })
    },

    leave_canvas: function (el, done) {
      console.log("canvas-leave")
      Velocity(el, { opacity: 0}, { complete: done })
    },

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
.l-index-contain { position: relative;width: 100%;}
.l-new-list { position: absolute;width: 100%;}
.l-canvas { position: absolute;width: 100%;}
</style>
