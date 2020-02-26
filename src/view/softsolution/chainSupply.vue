
<template>
  <div class="chainSupply">
    <div class="background">
      <div class="contain">
        <img src="../../../static/icon/61.png">
      </div>
    </div>
    <div class="container">
      <p class="title">供应链</p>
      <p class="remark" v-if="$store.state.user.tempData.screenWidth>=800">新零售新制造，企业要以消费需求为导向，引入社会化商品共享体系，整合制造、技术、仓储，<br />
        通过新型生产方式满足新型销售模式，构建打通零售端与制造端的产业生态链，提高生产效率，提升销售效益</p>
        <p class="remark" v-if="$store.state.user.tempData.screenWidth<800">新零售新制造，企业要以消费需求为导向，引入社会化商品共享体系，整合制造、技术、仓储，
        通过新型生产方式满足新型销售模式，构建打通零售端与制造端的产业生态链，提高生产效率，提升销售效益</p>
      <img src="../../../static/icon/62.png">
      <p class="title">新零售共享体系</p>
      <p class="remark">基于供应链的商品共享 基于全渠道的营销共享 基于全链路的服务共享</p>
      <img src="../../../static/icon/63.png">
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      params: {}
    };
  },
  created() {}
};
</script>

<style lang="less" scoped>
.chainSupply {
  padding-top: 98px;
  .background {
    background: url(../../../static/icon/60.png) no-repeat;
    background-position: center center;
    background-size: cover;
    height: 390px;
    display: table;
    width: 100%;
    .contain {
      padding-top: 40px;
      vertical-align: middle;
      text-align: center;
      img {
        width: 775px;
      }
    }
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 0 150px;
    .img {
      display: flex;
      align-items: center;
      img {
        width: 467px;
        &:nth-child(2) {
          width: 260px;
          height: 179px;
        }
      }
    }
    .title {
      padding-top: 50px;
      font-size: 36px;
      line-height: 30px;
      color: #444444;
      &.minTile {
        font-size: 28px;
        margin-bottom: 80px;
      }
    }
    .remark {
      font-size: 18px;
      line-height: 30px;
      margin: 40px 0;
      color: #444444;
      &.green {
        color: #84c108;
      }
    }
    .border {
      margin-top: 50px;
      border-bottom: 1px dashed #dfdfdf;
    }
  }
}

@media (max-width: 800px) {
  .chainSupply {
    padding-top: 58px;
    .background {
      height: 191px;
      .contain {
      padding-top: 20px;
      img {
        width: 80%;
      }
    }
    }
    .container {
      width: 100%;
      margin: 0;
      padding: 0 20px 80px;
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
        line-height: 20px;
        margin: 20px 0;
        color: #444444;
      }
    }
  }
}
</style>


