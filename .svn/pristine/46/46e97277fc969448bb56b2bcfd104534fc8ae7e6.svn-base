<template>
  <div class="footersMin">
    <div
      class="list"
      v-for="(item,index) in params.list"
      :key="index"
    >
      <p class="title">{{item.name}}</p>
      <p class="en">{{item.en}}</p>
      <P class="msg">{{item.msg}}</P>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        list: [
          { name: "联系电话", en: "HOTLINE", msg: "0791-88191890" },
          {
            name: "地址",
            en: "ADDRESS",
            msg: "江西省南昌市南昌高新技术产业开发区艾溪湖北路129号绿地玫瑰城创业梦想街区201栋2层"
          },
          { name: "邮箱", en: "EMAIL", msg: "hr@jxjunfeng.com" }
        ]
      }
    };
  },
  created() {}
};
</script>


<style lang="less" scoped>
.footersMin {
  height: 300px;
  background-color: #1f2225;
  color: #ffffff;
  padding: 0 20px;
  .list {
      padding-top: 15px;
    .title {
      font-size: 16px;
      color: #ffffff;
      font-weight: 600;
    }
    .en {
      font-size: 15px;
      color: #89b928;
    }
    .msg{
        font-size: 12px;
	color: #ffffff;
    }
    &:nth-child(1){
        .msg{
            font-size: 30px;
            color: #ffffff;
        }
    }
  }
}
</style>
