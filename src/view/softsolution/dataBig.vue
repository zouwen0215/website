<style lang="less" scoped>
.dataBig {
  padding-top: 98px;
  .background {
    background: url(../../../static/icon/64.png) no-repeat;
    background-position: center center;
    background-size: cover;
    height: 390px;
    display: table;
    width: 100%;
    text-align: left;
    .contain {
      margin: 0 auto;
      width: 1200px;
      padding-top: 40px;
      vertical-align: middle;
      img {
        width: 500px;
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
        color: #888;
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
    .list {
      display: flex;
      flex-wrap: wrap;
      width: 1170px;
      .listItem {
        width: 50%;
        display: flex;
        img {
          width: 278px;
          margin-right: 36px;
        }
        .itemright {
          text-align: left;
          .listTitle {
            font-size: 28px;
            line-height: 58px;
            color: #84c108;
          }
          .other {
            font-size: 18px;
            line-height: 26px;
            color: #444444;
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .dataBig {
    padding-top: 58px;
    .background {
      height: 191px;
      background: url(../../../static/icon/101.png) no-repeat;
     background-size: 100% 100%;
      .contain {
        display: none;
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
          margin-bottom: 40px;
        }
      }
      .img {
        display: block;
        img {
          width: 80%;
          margin-bottom: 30px;
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
      .minImg{
        img{
          width: 80%;
          margin-bottom: 10px;
        }
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .listItem {
          width: 50%;
          text-align: center;
          display: inline-block;
          img {
            width: 50%;
            height: 80px;
            margin-right: 0;
          }
          .itemright {
            width: 60%;
            display: inline-block;
            text-align: left;
            .listTitle {
              font-size: 14px;
              line-height: 30px;
              color: #84c108;
            }
            .other {
              font-size: 9px;
              line-height: 13px;
              color: #444444;
            }
          }
        }
      }
    }
  }
}
</style>




<template>
  <div class="dataBig">
    <div class="background">
      <div class="contain">
          <img src="../../../static/icon/65.png">
        </div>
    </div>
    <div class="container">
      <p class="title">大数据解决方案</p>
      <p class="remark"  v-if="$store.state.user.tempData.screenWidth>=800">君风科技为江西烟草 构建大数据平台，由智能服务层、数据中台层、大数据计算层、数据采集层等四部分构成。依靠大数据平<br />
        台的建设，收集、分析更多渠道的数据，分析更复杂的非结构化数据，应用数据分析结果成为指导营销、专卖等工作的重要抓手。</p>
         <p class="remark"  v-if="$store.state.user.tempData.screenWidth<800">君风科技为江西烟草 构建大数据平台，由智能服务层、数据中台层、大数据计算层、数据采集层等四部分构成。依靠大数据平
        台的建设，收集、分析更多渠道的数据，分析更复杂的非结构化数据，应用数据分析结果成为指导营销、专卖等工作的重要抓手。</p>
      <p class="title minTile">方案特点</p>
      <img
        src="../../../static/icon/66.png"
        v-if="$store.state.user.tempData.screenWidth>=800"
      >
      <div class="minImg" v-if="$store.state.user.tempData.screenWidth<800">
        <img
          v-for="(item,index) in 4"
          :key="index"
          :src="'./static/icon/big'+(index)+'.png'"
        >
      </div>
      <p class="title">方案架构</p>
      <p class="remark">基于供应链的商品共享 基于全渠道的营销共享 基于全链路的服务共享</p>
      <img src="../../../static/icon/67.png"  v-if="$store.state.user.tempData.screenWidth>=800">
      <img src="../../../static/icon/100.png"  v-if="$store.state.user.tempData.screenWidth<800">
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



