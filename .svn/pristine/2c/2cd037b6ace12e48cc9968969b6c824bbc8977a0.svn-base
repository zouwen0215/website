<template>
  <div class="home">
    <div class="title">
      <headers v-if="$store.state.user.tempData.screenWidth>=800"></headers>
      <headersMin v-if="$store.state.user.tempData.screenWidth<800"></headersMin>
    </div>
    <div class="main">
       <keep-alive>
      <router-view />
       </keep-alive>
    </div>
    <div>
      <footers v-if="$store.state.user.tempData.screenWidth>=800"></footers>
      <footersMin v-if="$store.state.user.tempData.screenWidth<800"></footersMin>
    </div>
  </div>
</template>


<script>
import headers from "./components/header";
import headersMin from "./components/headersMin";
import footers from "./components/footers";
import footersMin from "./components/footersMin";
export default {
  name: "home",
  data() {
    return {
      params: {
        screenWidth: document.body.clientWidth // 屏幕尺寸
      }
    };
  },
  mounted() {
    const _self = this;
    window.onresize = () => {
      _self.screenWindow(document.body.clientWidth);
    };
  },
  methods: {
    screenWindow: function(width) {
      const _self = this;
      _self.params.screenWidth = width;
      let obj = {
        name: "screenWidth",
        param: width
      };
      _self.$store.commit("tempData", obj);
    }
  },
  components: {
    headers,
    headersMin,
    footers,
    footersMin
  },
  created() {
    const _self = this;
    _self.screenWindow(document.body.clientWidth);
  }
};

window.onresize;
</script>


<style lang="less" scoped>
.home {
  .title {
    position: fixed;
    width: 100%;
    z-index: 3;
    top: 0;
  }
}
</style>

