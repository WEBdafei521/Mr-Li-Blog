<template>
  <div id="app">
    <l-nav></l-nav>
    <l-header></l-header>
    <vue-particles
        color="#000"
        :particleOpacity=".7"
        :particlesNumber="70"
        shapeType="circle"
        :particleSize="1"
        linesColor="#000000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
    </vue-particles>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Left from './public-component/Li-left'
import Title from './public-component/Li-titile'
export default {
  name: 'App',
  components:{
    'l-nav':Left,
    'l-header':Title
  }
}

</script>

<style>
/* #app{
} */
body{
  margin: 0;
  padding:0;
}
.lizi{
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 99%;
}
</style>
