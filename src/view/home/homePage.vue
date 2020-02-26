<template>
  <div class="homePage">
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> -->
          <firstPage></firstPage>
        <!-- </div>
        <div class="swiper-slide"> -->
          <secondPage></secondPage>
        <!-- </div>
         <div class="swiper-slide"> -->
          <secondPage1></secondPage1>
        <!-- </div>
         <div class="swiper-slide"> -->
          <secondPage2></secondPage2>
        <!-- </div>
        <div class="swiper-slide"> -->
          <thirdPage></thirdPage>
        <!-- </div>
      </div>
      <div class="swiper-pagination"></div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import firstPage from "./part/firstPage";
import secondPage from "./part/secondPage";
import secondPage1 from "./part/secondPage1";
import secondPage2 from "./part/secondPage2";
import thirdPage from "./part/thirdPage";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    firstPage,
    secondPage,
    secondPage1,
    secondPage2,
    thirdPage
  },
  mounted() {
    new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }

    });
  },created(){}
};
</script>


<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100vh;
  // margin: 20px auto;
  .swiper-slide {
    box-sizing: border-box;
    // padding-top: 100px;
    // background-color: #2c3545;
  }
}
</style>

