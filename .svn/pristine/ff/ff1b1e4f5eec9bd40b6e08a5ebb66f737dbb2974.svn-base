<template>
  <div class="firstPage">
    <div class="contain">
      <img
        class=" triangle"
        src="../../../../static/icon/14.png"
      >
      <ul class="mainData">
        <li
          v-for="(item,index) in params.form.mainDataList"
          :key="index"
        >
          <div class="lidata">
            <p>{{item.num}}</p>
            <p>{{item.msg}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        form: {
          mainDataList: [
            { num: "500+", msg: "已服务零售户" },
            { num: "40+", msg: "产品研发团队" },
            { num: "12000+", msg: "日处理订单" }
          ]
        }
      }
    };
  }
};
</script>


<style lang="less" scoped>
.firstPage {
  width: 100vw;
  height: 100vh;
  background: url(../../../../static/icon/11.png) no-repeat;
  background-position: center center;
  background-size: cover;
  padding-top: 100px;
  display: table;
  .contain {
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    .triangle {
      width: 600px;
    }
    .mainData {
      max-width: 1200px;
      margin: 5vh auto;
      text-align: center;
      li {
        height: 135px;
        width: 255px;
        display: inline-table;
        margin: 0 8px;
        .lidata {
          cursor: pointer;
          display: table-cell;
          vertical-align: middle;
          background-color: #fff;
          &:hover {
            background-color: #94c52f;
            p {
              color: #fff;
              &:nth-child(2) {
                color: #fff;
              }
            }
          }
          p {
            font-size: 40px;
            font-weight: 100;
            color: #444444;
            &:nth-child(2) {
              font-size: 14px;
              font-weight: 600;
              color: #666666;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .firstPage {
    .contain {
      .triangle {
        width: 80%;
      }
      .mainData {
        margin: 16vh auto;
        li {
          height: 64px;
          width: 28%;
          font-size: 12px;
          margin: 0 5px;
          .lidata {
            p {
              font-size: 30px;
              font-weight: 100;
              color: #444444;
              &:nth-child(2) {
                font-size: 8px;
                font-weight: normal;
                color: #666666;
              }
            }
          }
        }
      }
    }
  }
}
</style>

