


<template>
  <div class="middleground">
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
      >业务中台</p>
      <p class="remark">业务中台能够强有力的支撑江西烟草快速创新业务和迭代，实现了后端业务资源到前台易用转化，从而快速赋予企业互联网能力</p>
      <p class="title minTile">八大中心</p>
      <div class="list">
        <div class="listCont">
          <div
            v-for="(item,index) in params.list"
            :key="index"
            v-if="index < 4"
            class="li"
          >
            <img
              :src="'./static/icon/'+(22+index)+'.png'"
              alt=""
            >
            <p>{{item}}</p>
          </div>
        </div>
        <div class="listCont">
          <div
            class="li"
            v-for="(item,index) in params.list"
            :key="index"
            v-if="index >= 4"
          >
            <img
              :src="'./static/icon/'+(22+index)+'.png'"
              alt=""
            >
            <p>{{item}}</p>
          </div>
        </div>
      </div>
      <div
        class="border"
        id="2"
      ></div>
      <p class="title">数据中台</p>
      <p class="remark">从后台及业务中台将数据流入，完成海量数据的存储、计算、产品化包装过程，构成企业的核心数据能力。</p>
      <div class="dataCenter">
        <img
          :src="'./static/icon/'+(69+index)+'.png'"
          v-for="(item,index) in 4"
          :key="index"
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
          "用户中心",
          "企业中心",
          "商品中心",
          "交易中心",
          "运营中心",
          "客服中心",
          "支付中心",
          "终端设备中心"
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
      _self.returnTop(_self.$route.query.id);
    }
  }
};
</script>

<style lang="less" scoped>
.middleground {
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
    padding-bottom: 150px;
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
      line-height: 95px;
      color: #444444;
    }
    .list {
      text-align: center;
      .listCont {
        width: 90%;
        display: inline-flex;
        .li {
          margin-top: 65px;
          flex: 1;
          img {
            // width: 60%;
            height: 60%;
            margin-bottom: 12px;
          }
        }
      }
    }
    .border {
      margin-top: 50px;
      border-bottom: 1px dashed #dfdfdf;
    }
    .dataCenter {
      text-align: center;
      // margin-bottom: 150px;
      // display: flex;
      // flex-wrap:wrap;
      img {
        display: inline-block;
        width: 40%;
        margin: 10px;
      }
    }
  }
}

@media (max-width: 800px) {
  .middleground {
    padding-top: 58px;
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
      .list {
        text-align: center;
        .listCont {
          width: 90%;
          display: inline-flex;
          .li {
            margin-top: 30px;
            flex: 1;
            font-size: 9px;
            img {
              // width: 60%;
              height: 60%;
              margin-bottom: 12px;
            }
          }
        }
      }
      .dataCenter {
        img {
          width: 80%;
        }
      }
    }
  }
}
</style>


