<style lang="less" scoped>
.footers {
  height: 220px;
  background-color: #1f2225;
  .container {
    text-align: left;
    width: 1200px;
    margin: 0 auto;
    padding-top: 65px;
    display: flex;
    // justify-content: space-around;
    align-items: flex-top;
    // position: relative;
    // & > div {
    //   flex: 1;
    //   .logo {
    //     // position: absolute;
    //     // bottom: 0px;
    //     // right: 0;
    //   }
    //   .title {
    //     font-size: 9px;
    //     color: #d3d3d3;
    //   }
    //   .border {
    //     margin: 6px 0 19px;
    //     width: 18px;
    //     height: 1px;
    //     background-color: #d1d2d4;
    //   }
    //   .other {
    //     padding: 0 50px 0 0;
    //     margin-bottom: 9px;
    //     img {
    //       width: 9px;
    //       vertical-align: middle;
    //       margin-right: 5px;
    //     }
    //     span {
    //       font-size: 7px;
    //       color: #979799;
    //       &.active {
    //         color: #ffffff;
    //       }
    //     }
    //   }
    // }
    & > div {
      flex: 1;
      padding: 0 30px;
      // border-left: 1px solid#313131;
      &:nth-child(1){
        border-left: none;
        padding-left: 0;
      }
       &:last-child{
        padding-right: 0;
         flex: inherit;
      }
      &.phone {
        display: flex;
        img {
          width: 66px;
          height: 66px;
          margin-right: 20px;
        }
      }
      .title {
        font-size: 18px;
        color: #d3d3d3;
      }
      .remark {
        font-size: 14px;
        line-height: 30px;
        color: #979799;
      }
      .num {
        font-size: 30px;
        color: #89b928;
      }
    }
  }
}
</style>


<template>
  <div class="footers">
    <div class="container">
      <div class="phone">
        <img src="../../../static/icon/130.png">
        <div>
          <p class="title">联系我们</p>
          <p class="num">(0791) -88191890</p>
        </div>
      </div>
      <div>
        <p class="title">公司地址</p>
        <p class="remark">江西省南昌市南昌高新技术产业开发区艾溪湖北路129号</p>
        <p class="remark">绿地玫瑰城创业梦想街区201栋2层</p>
      </div>
      <div>
        <p class="title">公司邮箱</p>
        <p  class="remark">hr@jxjunfeng.com</p>
      </div>

      <!-- <div>
        <p class="title">联系我们</p>
        <p class="border"></p>
        <p
          class="other"
          v-for="(item,index) in params.list"
          :key="index"
        >
          <img :src="'./static/icon/'+(31+index)+'.png'">
          <span>{{item}}</span>
        </p>
      </div>
      <div>
        <p class="title">网站地图</p>
        <p class="border"></p>
        <p
          class="other"
          v-for="(item,index) in params.menu"
          :key="index"
        >
          <span :class="{'active':index == $store.state.user.tempData.actualActive}">{{item}}</span>
        </p>
      </div>
      <div>
        <img
          class="logo"
          src="../../../static/icon/34.png"
          alt=""
          srcset=""
        >
      </div> -->
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      params: {
        list: [
          "江西省南昌市南昌高新技术产业开发区艾溪湖北路129号绿地玫瑰城创业梦想街区201栋2层",
          "(0791) -88191890",
          "hr@jxjunfeng.com"
        ],
        menu: ["首页", "产品中心", "解决方案", "关于我们"]
      }
    };
  },
  created() {}
};
</script>

