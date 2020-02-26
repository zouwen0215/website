

<template>
  <div class="courtMiddle">
    <div class="background">
      <div class="public_contian ">
        <div class="contain">
          <p>一个中台， 所有的战略</p>
          <p>“薄前台、纯渠道、厚中台“</p>
        </div>

      </div>
    </div>
    <div class="container">
      <p class="title">中台解决方案</p>
      <p class="remark" v-if="$store.state.user.tempData.screenWidth>=800">中台的战略是构建稳定可靠、最高效地支撑上层业务快速创新的共享服务能力。中台的设计概念是 <br />
        “薄前台、纯渠道、厚中台”，进行业务的沉淀与持续发展，实现风控与业务逻辑集中，进而实现统一管控、快速响应、应需而变。</p>
          <p class="remark" v-if="$store.state.user.tempData.screenWidth<800">中台的战略是构建稳定可靠、最高效地支撑上层业务快速创新的共享服务能力。中台的设计概念是
        “薄前台、纯渠道、厚中台”，进行业务的沉淀与持续发展，实现风控与业务逻辑集中，进而实现统一管控、快速响应、应需而变。</p>
      <p class="title minTile">方案构架</p>
      <img src="../../../static/icon/59.png"  v-if="$store.state.user.tempData.screenWidth>=800">
      <img src="../../../static/icon/103.png"  v-if="$store.state.user.tempData.screenWidth<800">
    </div>
  </div>
</template> 


<script>
export default {
  data() {
    return {
      params: {
        
      }
    };
  },
  created() {}
};
</script>

<style lang="less" scoped>
.courtMiddle {
  padding-top: 98px;
  .background {
    background: url(../../../static/icon/58.png) no-repeat;
    background-position: center center;
    background-size: cover;
    height: 390px;
    text-align: left;
    .contain {
      padding-top: 140px;
      width: 700px;
      p:nth-child(1) {
        font-size: 17px;
        line-height: 29px;
        color: #ffffff;
      }
      p:nth-child(2) {
        margin-top: 33px;
        font-size: 39px;
        line-height: 50px;
        color: #ffffff;
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
  .courtMiddle {
    padding-top: 58px;
    .background {
      height: 191px;
      background: url(../../../static/icon/102.png) no-repeat;
     background-size: 100% 100%;
      .contain {
        display: none;
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
        line-height: 15px;
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


