<template>
  <div class="secondPage">
    <div class="container">

      <div class="table">
        <p class="title">新零售未来趋势</p>
        <div class="img">
          <div
            class="item"
            v-for="(item,index) in params.list"
            :key="index"
          >
            <img :src="'./static/icon/'+(117+index)+'.png'">
            <div class="remark">
              <p
                v-for="(items,indexs) in item"
                :key="indexs"
              >{{items}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      params: {
        list: [
          ["融合线上线下", "门店经营更智能化"],
          ["以人的需求为导向", "极大优化消费者购物体验"],
          ["大数据管理市场", "快速响应市场变化"],
          ["中台解决方案助力新零售", "快速迭代响应市场业务需求"]
        ]
      }
    };
  },
  mounted() {},
  created() {}
};
</script>

<style lang="less" scoped>
.secondPage {
  padding: 58px 0 0;
  height: 100vh;
  background: url(../../../../static/icon/115.png) no-repeat;
  background-size: 100% 100%;
  .container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;

    .table {
      width: 100%;
      height: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -600px;
      margin-top: -300px;
      .title {
        font-size: 45px;
        font-weight: 500;
        margin-bottom: 100px;
        color: #444444;
      }
      .img {
        display: inline-flex;
        width: 80%;
        align-items: center;
        .item {
          flex: 1;
          img {
            width: 147px;
            height: 170px;
            margin: 20px;
          }
        }
      }
      .remark {
        margin-top: 20px;
        p {
          line-height: 30px;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .secondPage {
    padding: 58px 0 0;
    height: 100vh;
    background: url(../../../../static/icon/5.png) no-repeat;
    background-size: 100% 100%;
    .container {
      width: 100%;
      margin: 0 auto;
      position: inherit;
      height: 100%;

      .table {
        width: 100%;
        height: auto;
        position: inherit;
        margin: 0;
        .title {
          font-size: 23px;
          font-weight: 600;
          margin: 30px 0 20px;
          color: #444444;
        }
        .img {
          display: block;
          width: 100%;
          .item {
            display: inline-block;
                width: 45%;
            margin: 5px 0;
            img {
              width: 60%;
              height: auto;
              margin: 0;
            }
            .remark{
              margin-top: 10px;
              p {
              font-size: 11px;
              line-height: 20px;
            }
            }
          }
        }
      }
    }
  }
}
</style>


