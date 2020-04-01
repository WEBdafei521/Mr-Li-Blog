<template>
  <div class="l-banner">
   
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> <img src="https://static.pdf-lib.org/banner.jpg" alt=""></div>
        <!-- <div class="swiper-slide" style="background:blue;">Slide 2</div>
        <div class="swiper-slide" style="background:green;">Slide 3</div>
        <div class="swiper-slide" style="background:block;">Slide 4</div> -->
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper';
export default {
  components: {},
  data () {
    return {
     
    };
  },
 created(){},
 methods: {},
 computed: {},
 mounted() {
    new Swiper ('.swiper-container', {
        effect : 'coverflow',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      })
 },
}
</script>
<style scoped>
 .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 280px;
  }

  .swiper-slide img {
    max-width: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .l-banner{
    /* padding:0 16px; */
  }

</style>