
<template>
  <div class="background">
    <div class="backgroundPage">
      <div class="bCon">
        <p>产品中心</p>
        <p>科技改变生活-进入全新智能时代</p>
      </div>
    </div>
    <div class="container">
      <p
        class="title"
        id="1"
      >ERP综合管理平台</p>
      <p class="remark"> 支撑零售户的采购相关的补货、订单管理、自有商品的建立及统一管理和外部服务申请接入。</p>
      <p class="title minTile">功能特性</p>
      <div class="list">
        <div class="listCont">
          <div
            v-for="(item,index) in params.list"
            :key="index"
            class="li"
          >
            <img
              :src="'./static/icon/'+(41+index)+'.png'"
              alt=""
            >
            <p>{{item}}</p>
          </div>
        </div>
      </div>
      <div class="border"></div>
      <p
        class="title"
        id="2"
      >货源共享平台</p>
      <p class="remark">货源共享平台是为提供商城、门店、会员所需的货源服务申请，共享系统内门店、不同渠道门店、外部门店特有商品的全渠道供应平台。</p>
      <p class="title minTile">四大供应类型对接</p>
      <div
        class="sidaleixing"
        v-if="$store.state.user.tempData.screenWidth>=800"
      >
        <img
          v-for="(item,index) in 4"
          :key="index"
          :src="'./static/icon/'+(73+index)+'.png'"
        >

      </div>
      <div
        class="sidaleixing"
        v-if="$store.state.user.tempData.screenWidth<800"
      >
        <img
          v-for="(item,index) in 4"
          :key="index"
          :src="'./static/icon/back'+(index)+'.png'"
        >
      </div>
    </div>
  </div>
</template>


<script>
import http from "@/utils/http.js";
export default {
  data() {
    return {
      params: {
        list: [
          "多渠道订单管理",
          "商品进销存管理",
          "多仓多点管理",
          "财务智能管理",
          "售后管理"
        ]
      }
    };
  },
  methods: {
    returnTop: function(id) {
      let _self = this;
      setTimeout(function() {
        let height = document.getElementById(id).offsetTop;
        document.documentElement.scrollTop = height - 50;
        document.body.scrollTop = height - 50;
      }, 0);
    }
  },
  created() {
    let _self = this;
    http.$on("scrollTop", function(id) {
      if (id > 0) {
        _self.returnTop(id);
      }
    });
    if (_self.$route.query.id > 0) {
      console.log(_self.$route.query.id);
      _self.returnTop(_self.$route.query.id);
    }
  }
};
</script>

<style lang="less" scoped>
.background {
  padding-top: 98px;
  .backgroundPage {
    background: url(../../../static/icon/21.png) no-repeat;
    background-position: center center;
    background-size: cover;
    height: 390px;
    width: 100%;
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
    .sidaleixing {
      display: inline-flex;
      width: 1000px;
      margin-top: 30px;
      img {
        width: auto;
        flex: 1;
        margin: 0 10px;
      }
    }
    .list {
      text-align: center;
      .listCont {
        width: 1000px;
        display: inline-flex;
        .li {
          margin-top: 65px;
          flex: 1;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .background {
    padding-top: 58px;
    .backgroundPage {
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
      .sidaleixing {
        display: block;
        width: 100%;
        margin-top: 0;
        img {
          width: 80%;
          flex: inherit;
          margin: 10px 0;
        }
      }
      .list {
        text-align: center;
        .listCont {
          width: 100%;
          display: inline-block;
          .li {
            display: inline-block;
            width: 33%;
            margin-top: 30px;
            vertical-align: middle;
            font-size: 9px;
            flex: inherit;

            img {
              margin-bottom: 12px;
              width: 50%;
              height: 50%;
            }
          }
        }
      }
    }
  }
}
</style>

