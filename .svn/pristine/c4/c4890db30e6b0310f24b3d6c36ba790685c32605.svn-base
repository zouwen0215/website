<template>
  <div class="fontDask">
    <div class="background">
      <div class="bCon">
        <p>产品中心</p>
        <p>科技改变生活-进入全新智能时代</p>
      </div>
    </div>
    <div class="container">
      <p
        class="title"
        id="1"
      >消费者小程序</p>
      <p class="remark">消费者小程序是融合线上线下使消费者获得更好的消费体验，为更多的零售户创收而打造一款功能完善的购物小程序。</p>
      <img src="../../../static/icon/35.png">
      <div class="border"></div>
      <p
        class="title"
        id="2"
      >商家助手公众号</p>
      <p class="remark">商家助手公众号帮助零售户通过经营数据了解门店经营状况，零售户可在公众号接单、设置店铺信息。</p>
      <img src="../../../static/icon/36.png">
      <div
        class="border"
        id="3"
      ></div>
      <p class="title">积分商城公众号</p>
      <p class="remark">零售户积分商城是为提高消费者到门店消费的积极性，协助零售户经营获客、提升用户粘性的平台零售户积分商城是为激励零售户对卷烟主销品规订购的积极性和参与性， 同时进一步激发零售户自我管理、自主提升、密切配合、规范经营意识的平台</p>
      <img
        src="../../../static/icon/37.png"
        v-if="$store.state.user.tempData.screenWidth>=800"
      >
      <img
        src="../../../static/icon/6.png"
        v-if="$store.state.user.tempData.screenWidth<800"
      >
      <div
        class="border"
        id="4"
      ></div>
      <p class="title">智能收银系统</p>
      <p class="remark"> 智能收银系统是为了帮助零售户管理库存、订单，查看经营数据打造的一款便利的收银系统</p>
      <img src="../../../static/icon/38.png">
      <div
        class="border"
        id="5"
      ></div>
      <p class="title">运营管理平台</p>
      <p class="remark">运营管理平台是针对市场所设计的应用平台，可以针对不同业务添加不同应用，进行市场运营，所需应用可直接在应用中心进行模块化添加，更加便捷效率。</p>
      <img src="../../../static/icon/39.png">
      <div
        class="border"
        id="6"
      ></div>
      <p class="title">数据统计中心</p>
      <p class="remark">收集全渠道数据，数据清洗，通过不同维度得出分析结果，帮助理解市场，作出特色营销方案。</p>
      <img src="../../../static/icon/40.png">
    </div>
  </div>
</template>


<script>
import http from "@/utils/http.js";
export default {
  data() {
    return {
      params: {}
    };
  },
  methods: {
    returnTop: function(id) {
      let _self = this;
      if (id) {
        setTimeout(function() {
          let height = document.getElementById(id).offsetTop;
          document.documentElement.scrollTop = height - 50;
          document.body.scrollTop = height - 50;
        }, 0);
      }
    }
  },
  created() {
    let _self = this;
    console.log();
    http.$on("scrollTop", function(id) {
      if (id > 0) {
        _self.returnTop(id);
      }
    });
    if (_self.$route.query.id > 0) {
      _self.returnTop(_self.$route.query.id);
    }
  }
};
</script>

<style lang="less" scoped>
.fontDask {
  padding-top: 98px;
  .background {
    background: url(../../../static/icon/21.png) no-repeat;
    background-position: center center;
    background-size: cover;
    height: 390px;
    .bCon {
      width: 1200px;
      margin: 0 auto;
      padding: 100px 0 0 50px;
      text-align: left;
      p {
        font-size: 56px;
        &:nth-child(2) {
          font-size: 18px;
        }
      }
    }
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 0 150px;
    .title {
      padding-top: 50px;
      font-size: 36px;
      line-height: 30px;
      color: #444444;
      &.minTile {
        font-size: 28px;
      }
    }
    .remark {
      font-size: 18px;
      line-height: 30px;
      margin: 40px 0;
      color: #444444;
    }
    .border {
      margin-top: 50px;
      border-bottom: 1px dashed #dfdfdf;
    }
  }
}

@media (max-width: 800px) {
  .fontDask {
    .background {
      height: 191px;
      background: url(../../../static/icon/99.png) no-repeat;
      background-size: 100% 100%;
      .bCon {
        width: 100%;
        margin: 0 auto;
        padding: 50px 0 0 25px;
        text-align: left;
        p {
          font-size: 28px;
          &:nth-child(2) {
            font-size: 9px;
          }
        }
      }
    }
    .container {
      width: 100%;
      margin: 0;
      padding: 0 10px 80px;
      .title {
        padding-top: 25px;
        font-size: 18px;
        line-height: 30px;
        color: #444444;
        &.minTile {
          font-size: 14px;
        }
      }
      img {
        width: 90%;
      }
      .remark {
        font-size: 9px;
        line-height: 15px;
        margin: 20px 0;
        color: #444444;
      }
    }
  }
}
</style>

