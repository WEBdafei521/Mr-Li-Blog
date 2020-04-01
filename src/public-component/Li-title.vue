<!--  -->
<template>
  <div>
    <div class="l-text-title">
        <ul class="l-text-ui">
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
          <li>text4</li>
          <li>text5</li>
        </ul>
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
 mounted() {},
 methods: {}
}
</script>
<style scoped>
.l-text-title{
  height: 88px;
  background: #F7BA55;
}
.l-text-ui{
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: center;
  height: 88px;
  padding: 0 16px;
}
.l-text-ui li{
  width: 144px;
  text-align: center;
  font-size: 32px;
  list-style:none;
  height:88px;
  line-height: 88px;
  color: #E9330C;
}
</style>