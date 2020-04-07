<!--  -->
<template>
  <div class="l-title">
     <div class="l-header-border"></div>
    <h3 class="l-header">
      <div>
        <div class="l-imgs">
          <img src="../assets/img/weather.png" alt="">
        </div>
        <div>
          LP'S Blog
        </div>
      </div>
    </h3>
    <div class="l-zanwei">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

 created(){},
 components: {},
 computed: {},
 mounted(){},
 methods: {}
}
</script>
<style scoped>

.l-header{
  position: fixed;
  z-index: 99999;
  top: 10px;
  width: 100vw;
  height:84px;
  line-height: 84px;
  margin: 0 auto;
  text-align: right;
  background: white;
  color: #fff;
  padding: 0 20px 0 66px;
  box-sizing: border-box;
  background:rgba(247,186,85,.4);
}
.l-header img{
  width: 52px;
}
.l-header>div,.l-imgs{
  display: flex;
  align-items: center;
  text-align: right;
  flex-direction: row-reverse;
  padding: 0 0 0 16px;
}
.l-header-border{
  position: fixed;
  top: 0;
  z-index: 9999999;
  width:100vw;
  height: 10px;
  background:#000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);;
}
.l-zanwei{
  width: 100vw;
  height: 94px;
}
</style>