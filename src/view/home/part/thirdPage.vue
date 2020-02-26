<template>
  <div class="thirdPage">
    <div class="container">
      <p class="title">合作伙伴</p>
      <div class="logoList">
        <div
          class="img"
          v-for="(item,index) in 6"
          :key="index"
        >
          <img :src="'./static/icon/logo'+index+'.png'" />
        </div>
      </div>
    </div>
    <!-- <div class="foots">
      <footers v-if="$store.state.user.tempData.screenWidth>=800"></footers>
      <footersMin v-if="$store.state.user.tempData.screenWidth<800"></footersMin>
    </div> -->
  </div>
</template>

<script>
import footers from "../../components/footers";
import footersMin from "../../components/footersMin";
export default {
  data() {
    return {
      params: {
        form: {
          concat: [
            {
              icon: "./static/icon/18.png",
              msg: "江西省南昌市高新区艾溪湖北路129号201栋2层"
            },
            {
              icon: "./static/icon/19.png",
              msg: "(0791) -88191890"
            },
            {
              icon: "./static/icon/20.png",
              msg: "hr@jxjunfeng.com"
            }
          ]
        }
      }
    };
  },
  components: {
    footers,
    footersMin
  },
  created() {}
};
</script>


<style lang="less" scoped>
.thirdPage {
  // height: 100vh;
  overflow: auto;
  padding: 58px 0 100px;

  text-align: center;
  .container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background: url(../../../../static/icon/111.png) no-repeat;
    background-position: center center;
    background-size: cover;
    .title {
      font-size: 50px;
      letter-spacing: 0px;
      margin: 68px 0 31px;
    }
    .logoList {
      width: 1000px;
      display: inline-block;
      text-align: left;
      .img {
        display: inline-block;
        width: 224px;
        height: 88px;
        margin: 10px;
        overflow: hidden;
        border: 1px solid #e6e6e6;
        img {
          width: 100%;
          &:hover {
            transition: all 2s;
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .foots {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}

@media (max-width: 800px) {
  .thirdPage {
    padding: 58px 0 150px;
    height:auto;
    .container {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      background: url(../../../../static/icon/111.png) no-repeat;
      background-position: center center;
      background-size: cover;
      .title {
        font-size: 23px;
        font-weight: 600;
        margin: 20px 0;
        color: #444444;
      }
      .logoList {
        width: 100%;
        display: inline-block;
        text-align: left;
        .img {
          display: inline-block;
          width: 30%;
          height: 50px;
          margin: 5px;
          overflow: hidden;
          border: 1px solid #e6e6e6;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
