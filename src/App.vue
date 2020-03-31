<template>
  <div id="app">
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
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
}
body{
  margin: 0;
  padding:0;
}
.lizi{
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 99%;
}
</style>
