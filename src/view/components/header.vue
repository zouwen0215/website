<style lang="less" scoped>
.header {
  height: 98px;
  background-color: rgba(255, 255, 255, 1);
  // position: relative;
  border-bottom: 1px solid #9fce40;
  .cotainer {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .logo {
       height: 98px;
      display: table;
      .logoBox {
        display: table-cell;
        vertical-align: middle;
        img {
          height: 30px;
        }
      }
      .remark {
        padding-left: 6px;
        font-size: 8px;
        font-weight: 600;
        letter-spacing: 7px;
        color: #393939;
        margin-top: 5px;
      }
    }
    .menu {
      position: relative;
      ul {
        li {
          cursor: pointer;
          display: inline-table;
          width: 126px;
           height: 98px;
          .manuLi {
            display: table-cell;
            vertical-align: middle;
            p:nth-child(1) {
              font-size: 14px;
              letter-spacing: 2px;
              color: #444444;
            }
            p:nth-child(2) {
              font-size: 12px;
              letter-spacing: 1px;
              color: #444444;
            }
          }
          &.actualActive {
            background-color: #97c63b;
            .manuLi {
              p {
                color: #fff;
              }
            }
          }
          // &.hoverActive {
          //   background-color: #97c63b;
          // }
        }
      }
    }
  }
  .secondList {
    position: absolute;
    top: 98px;
    left: 0;
    background-color: rgba(255, 255, 255, 1);
    width: 100vw;
    text-align: right;
    .secondData {
      max-width: 1200px;
      min-width: 800px;
      margin: 0 auto;
      .contain {
        padding: 10px 0;
        margin: 0 30px;
        text-align: left;
        display: inline-block;
        vertical-align: top;
        .titles {
          font-size: 18px;
          line-height: 32px;
          color: #333333;
          cursor: pointer;
        }
        li {
          cursor: pointer;
          font-size: 14px;
          line-height: 32px;
          color: #333333;
        }
      }
    }
  }
}
</style>


<template>
  <div class="header">
    <div class="cotainer">

      <div class="logo">
        <div class="logoBox">
          <img src="../../../static/icon/15.png">
          <p class="remark">君子之德风</p>
        </div>
      </div>
      <div class="menu">
        <a
          ref="target"
          href=""
        ></a>
        <ul>
          <li
            v-for="(item,index) in params.form.menuList"
            :key="index"
            :class="{'actualActive':$store.state.user.tempData.actualActive == index,'hoverActive':params.hoverActive == index}"
          >
            <div
              class="manuLi"
              v-on:mouseenter="mouseenter(index)"
              @click="routerTo(index,'-1')"
            >
              <p>{{item.name}}</p>
              <p>{{item.en}}</p>

            </div>

          </li>
        </ul>
      </div>

    </div>
    <div
      class="secondList"
      v-on:mouseleave="mouseleave()"
    >
      <div class="secondData">
        <div
          class="contain"
          v-for="(item,index) in params.secondData"
          :key="index"
          v-on:mouseenter="mouseenterSecond(index)"
        >
          <p
            class="titles"
            @click="routerToLink(params.hoverActive,index,item)"
          >{{item.name}}</p>
          <ul>
            <li
              v-for="(items,indexs) in item.children"
              :key="indexs"
              @click="routerToLink(params.hoverActive,index,items)"
            >
              {{items.name}}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import menu from "./menu.json";
import http from "@/utils/http.js";
export default {
  data() {
    return {
      params: {
        secondData: [],
        actualActive: "",
        hoverActive: "",
        secondActive: "",
        form: {
          menuList: menu
        }
      }
    };
  },
  methods: {
    routerToLink(firstIndex, secondIndex, items) {
      let _self = this;
      let target = this.$refs.target;
      let url = "#" + items.path + "?id=" + items.id;
      target.setAttribute("href", url);
      let obj = {
        name: "actualActive",
        param: firstIndex
      };

      _self.$store.commit("tempData", obj);
      target.click();
      http.$emit("scrollTop", items.id);
      _self.params.secondData = [];
    },
    mouseenter: function(index) {
      let _self = this;
      _self.params.hoverActive = index;
      _self.params.secondData = _self.params.form.menuList[index].children;
    },
    mouseenterSecond: function(index) {
      let _self = this;
      _self.params.secondActive = index;
    },
    mouseleave: function(index) {
      let _self = this;
      _self.params.hoverActive = "";
      _self.params.secondData = [];
    },
    routerTo: function(firstIndex, secondIndex) {
      let _self = this;
      let menuList = _self.params.form.menuList;
      if (secondIndex == "-1") {
        if (_self.$route.path != menuList[firstIndex].path) {
          let obj = {
            name: "actualActive",
            param: firstIndex
          };
          _self.$store.commit("tempData", obj);
          _self.$router.push(menuList[firstIndex].path);
          _self.params.hoverActive = "";
          _self.params.secondActive = "";
          _self.params.secondData = [];
        } else {
          return false;
        }
      } else {
        console.log(firstIndex, "-", secondIndex);
        if (
          _self.$route.path != menuList[firstIndex].children[secondIndex].path
        ) {
          let obj = {
            name: "actualActive",
            param: firstIndex
          };
          _self.$store.commit("tempData", obj);
          _self.$router.push(menuList[firstIndex].children[secondIndex].path);
          _self.params.hoverActive = "";
          _self.params.secondActive = "";
          _self.params.secondData = [];
        }
      }
    },
    checkActive() {
      let _self = this;
      let menuList = _self.params.form.menuList;
      menuList.forEach(function(obj, index, arr) {
        if (_self.$route.path == obj.path) {
          let obj = {
            name: "actualActive",
            param: index
          };
          _self.$store.commit("tempData", obj);
          // _self.params.actualActive = index;
        }
      });
    }
  },
  created() {
    let _self = this;
    _self.checkActive();
  }
};
</script>

