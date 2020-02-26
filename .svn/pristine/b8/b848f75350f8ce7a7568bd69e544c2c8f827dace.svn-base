<style lang="less" scoped>
.job {
  padding-top: 58px;
  background-color: #f2f2f2;
  .background {
    background: url(../../../static/icon/90.png) no-repeat;
    background-position: center center;
    background-size: cover;
    height: 390px;
    display: table;
    width: 100%;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: -120px;
    padding-bottom: 120px;
    .title {
      line-height: 120px;
      font-size: 40px;
      color: #333333;
    }
    .remark {
      font-size: 22px;
      color: #666666;
    }
    .welfare {
      width: 800px;
      display: flex;
      margin: 0 auto;
      margin-top: 35px;
     
      .item {
        flex: 1;
        p {
          margin: 10px 0 0;
          font-size: 12px;
          color: #333333;
        }
      }
    }
    .list {
      //  text-align: left;
      margin-top: 30px;
      span {
        text-align: center;
        display: inline-block;
        width: 150px;
        line-height: 50px;
        border: 1px solid rgba(230, 230, 230, 0.8);
        border-radius: 5px;
        color: #666666;
        font-size: 12px;
        margin: 0 14px;
        cursor: pointer;
        &.active {
          background-color: #84c108;
          color: #fff;
        }
      }
    }
    .jobContain {
      width: 880px;
      margin: 0 auto;
      text-align: left;

      .item {
        margin-top: 70px;
        .name {
          font-size: 30px;
          color: #318dfd;
          line-height: 50px;
        }
        .title {
          font-size: 30px;
          line-height: 40px;
          color: #666666;
        }
        .city {
          font-size: 18px;
          color: #318dfd;
        }
        .txtCon {
          .title {
            font-size: 18px;
            color: #666666;
          }
          .items {
            font-size: 16px;
            color: #666666;
          }
        }
      }
    }
  }
  .jobPhone {
    position: fixed;
    padding: 36px 7px 10px;
    background: #fff;
    right: 10px;
    top: 40%;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    .border {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 25px;
    }
    .item {
      img {
        width: 107px;
      }
      p {
        margin: 16px 0 25px;
        font-size: 11px;
        cursor: pointer;
        color: #888;
        &:hover {
          color: #318dfd;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .job {
    padding-top: 58px;
    .background {
      height: 191px;
      background: url(../../../static/icon/104.png) no-repeat;
      background-size: 100% 100%;
    }
    .container {
      width: 100%;
      margin: 0 auto;
      background-color: #f3f3f3;
      margin-top: 0;
      padding-bottom: 60px;
      .title {
        line-height: 60px;
        font-size: 18px;
        font-weight: 600;
        color: #333333;
      }
      .remark {
        font-size: 9px;
        padding: 0 20px;
        color: #666666;
      }
      .welfare {
        width: auto;
        display: flex;
        margin: 0 auto;
        margin-top: 35px;
        text-align: center;
        padding: 1%;
        flex-wrap: wrap;
        .item {
          background: #fff;
          width: 28%;
          margin: 2.6%;
          padding: 20px 0;
          flex: inherit;
          img {
            width: 38px;
          }
          p {
            margin: 10px 0 0;
            font-size: 12px;
            font-weight: 600;
            color: #333333;
          }
        }
      }

      .jobContain {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;

        box-shadow: 0px 10px 20px 0px rgba(230, 230, 230, 0.9);
        .boxs {
          background: #fff;
          padding: 17px 13px;
          .list {
            margin-top: 0;
            text-align: left;
            padding: 0 0 17px;
            border-bottom: 1px solid #dcdcdc;
            span {
              display: inline-block;
              width: 70px;
              line-height: 28px;
              border: 1px solid rgba(230, 230, 230, 0.8);
              border-radius: 5px;
              color: #666666;
              font-size: 12px;
              margin: 0 4px 4px;
              cursor: pointer;
              &.active {
                background-color: #84c108;
                color: #fff;
              }
            }
          }
          .item {
            margin-top: 30px;
            .name {
              font-size: 16px;
              color: #318dfd;
              font-weight: 600;
              line-height: 30px;
            }
            .title {
              font-size: 12px;
              line-height: 50px;
              color: #666666;
            }
            .city {
              font-size: 12px;
              color: #318dfd;
              margin-bottom: 20px;
            }
            .txtCon {
              .title {
                font-size: 9px;
                line-height: 30px;
                color: #747474;
              }
              .items {
                font-size: 12px;
                line-height: 30px;
                color: #747474;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="job">
    <div class="background"><a
        ref="target"
        href=""
        target="_blank"
      ></a></div>
    <div class="container">
      <p class="title">我们期待你的加入</p>
      <p class="remark">我们一起共同创造，共同成长，用真实的力量筑建美好的未来。</p>
      <div class="welfare">
        <div
          class="item"
          v-for="(item,index) in params.welfare"
          :key="index"
        >
          <img :src="'./static/icon/'+(91+index)+'.png'">
          <p>{{item}}</p>
        </div>
      </div>

      <div class="jobContain">
        <div class="boxs">
          <div class="list">
            <span
              v-for="(item,index) in params.list"
              :key="index"
              @click="changeItem(index)"
              :class="{'active':params.listIndex == index}"
            >{{item.name}}</span>
          </div>
          <div
            class="item"
            v-for="(item,index) in params.list[params.listIndex].type"
            :key="index"
          >
            <p class="name">{{item.name}}</p>
            <p class="city">{{item.city}}</p>
            <div class="txtCon">
              <p class="title">岗位职责：</p>
              <p
                class="items"
                v-for="(items,indexs) in item.respon"
                :key="items"
              >{{indexs+1}}、{{items}}</p>
              <p class="title">任职要求：</p>
              <p
                class="items"
                v-for="(items,indexs) in item.require"
                :key="indexs"
              >{{indexs+1}}、{{items}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jobPhone"  v-if="$store.state.user.tempData.screenWidth>=800">
      <div class="item">
        <img src="../../../static/icon/128.png">
        <p @click="openPage('https://jobs.51job.com/all/co5244832.html')">查看更多职位</p>
      </div>
      <div class="border"></div>
      <div class="item">
        <img src="../../../static/icon/129.png">
        <p @click="openPage('https://www.zhipin.com/gongsi/82320774fdb8d5021Xxz0t-4Ew~~.html?ka=search_rcmd_company_82320774fdb8d5021Xxz0t-4Ew~~')">查看更多职位</p>
      </div>
    </div>
  </div>
</template>


<script>
import jobJson from "../../../static/json/job.json";
export default {
  data() {
    return {
      params: {
        listIndex: 0,
        list: jobJson,
        welfare: [
          "弹性工时",
          "五险一金",
          "带薪年假",
          "出国旅游",
          "生日福利",
          "定期体检",
          "下午茶点"
        ]
      }
    };
  },
  methods: {
    openPage(page) {
      let _self = this;
      let target = this.$refs.target;
      target.setAttribute("href", page);
      target.click();
    },
    changeItem(index) {
      this.params.listIndex = index;
    }
  },
  created() {
    console.log(this.params.list);
  }
};
</script>



