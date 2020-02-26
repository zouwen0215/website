<style lang="less" scoped>
.headerMin {
  height: 58px;
  background-color: #d6d9e3;

  .menu {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0;
    & > div:nth-child(1) {
      padding: 10px 0 0 11px;
      img {
        width: 70px;
      }
      p {
        font-size: 8px;
        line-height: 16px;
        letter-spacing: 5px;
        margin-left: 4px;
        color: #393939;
      }
    }
    & > div:nth-child(2) {
      padding: 14px 10px 13px 11px;
      img {
        width: 27px;
      }
    }
  }
  .dialog {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .backTouch {
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
    .dialogContain {
      position: relative;
      width: auto;
      .firstCen {
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        width: 0;
        height: 100vh;
        background: #fff;
        overflow: hidden;
        &.active {
          animation: firstIndex 0.8s 1 alternate forwards;
        }
        &.close {
          animation: closeFirstIndex 0.8s 1 alternate forwards;
        }
        .li {
          height: 65px;
          overflow: hidden;
          border-bottom: 1px solid #bdbdbd;
          &.actualActive {
            background-color: #94c533;
            .liBox {
              p {
                color: #fff;
                &:nth-child(2) {
                  color: #fff;
                }
              }
            }
          }
          .liBox {
            padding: 19px 0;
            width: 150px;
            p {
              font-size: 12px;
              letter-spacing: 1px;
              color: #444444;
              &:nth-child(2) {
                font-size: 9px;
                letter-spacing: 1px;
                color: #444444;
              }
            }
          }
        }
      }
      .secondCen {
        display: none;
        background-color: rgba(245, 245, 246, 0.9);
        position: relative;
        z-index: 2;
        top: 0;
        left: 0px;
        width: 150px;
        height: 100vh;
        overflow: hidden;
        &.active {
          display: block;
          animation: secondIndex 0.8s 1 alternate forwards;
        }
        &.close {
          animation: closeSecondIndex 0.8s 1 alternate forwards;
        }
        .li {
          height: 65px;
          overflow: hidden;
          padding-left: 150px;
          border-bottom: 1px solid #bdbdbd;
          .liBox {
            width: 150px;
            p {
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 65px;
              color: #444444;
            }
          }
        }
      }
    }
  }
}

@keyframes firstIndex {
  from {
    display: block;
    width: 0px;
  }
  to {
    width: 150px;
  }
}

@keyframes closeFirstIndex {
  from {
    display: block;
    width: 150px;
  }
  to {
    width: 0;
    display: none;
  }
}

@keyframes secondIndex {
  from {
    display: block;
    width: 0px;
  }
  to {
    display: block;
    width: 300px;
  }
}

@keyframes closeSecondIndex {
  from {
    display: block;
    width: 300px;
  }
  to {
    width: 0px;
    display: none;
  }
}
</style>

<template>
  <div class="headerMin">
    <div class="menu">
      <div>
        <img src="../../../static/icon/15.png">
        <p>君子之德风</p>
      </div>
      <div>
        <img
          src="../../../static/icon/68.png"
          @click="openHeader()"
        >
        <a
          ref="target"
          href=""
        ></a>
      </div>
    </div>
    <div
      class="dialog"
      v-show="params.active"
    >
      <div
        class="backTouch"
        @click="closeHeader"
      ></div>
      <div class="dialogContain">
        <div
          class="firstCen"
          :class="{'active':params.active,'close':!params.active}"
        >
          <div
            class="li"
            v-for="(item,index) in params.form.menuList"
            :key="index"
            @click="choosetab(index,'-1')"
            :class="{'actualActive':$store.state.user.tempData.actualActive == index}"
          >
            <div class="liBox">
              <p>{{item.name}}</p>
              <p>{{item.en}}</p>
            </div>
          </div>
        </div>
        <div
          class="secondCen"
          :class="{'active':params.form.secondList.length}"
        >
          <div
            class="li"
            v-for="(item,index) in params.form.secondList"
            :key="index"
            v-if="item.limits<1"
            @click="routerToLink(params.hoverActive,index,item)"
          >
            <div class="liBox">
              <p>{{item.name}}</p>
            </div>
          </div>
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
        active: false,
        activeIndex: "-1",
        hoverActive: "-1",
        form: {
          menuList: menu,
          secondList: []
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
      _self.changeActive(firstIndex);
      _self.closeHeader();
    },
    choosetab(first, second) {
      let _self = this;
      if (second >= 0) {
        if (_self.params.form.menuList[first].children[second].id) {
        } else {
        }
        _self.$router.push(
          _self.params.form.menuList[first].children[second].path
        );
        _self.changeActive(first);
        _self.closeHeader();
      } else {
        if (_self.params.form.menuList[first].children.length) {
          // _self.params.form.secondList = [];
          // setTimeout(function(){
          _self.params.form.secondList =
            _self.params.form.menuList[first].children;
          _self.params.hoverActive = first;
          // },0)
        } else {
          _self.$router.push(_self.params.form.menuList[first].path);
          _self.changeActive(first);
          _self.closeHeader();
        }
      }
    },
    changeActive(index) {
      let _self = this;
      let obj = {
        name: "actualActive",
        param: index
      };
      _self.$store.commit("tempData", obj);
    },
    openHeader() {
      let _self = this;
      _self.params.form.secondList =
        _self.params.form.menuList[
          _self.$store.state.user.tempData.actualActive
        ].children;
      _self.params.active = true;
    },
    closeHeader() {
      let _self = this;
      _self.params.active = false;
    },
    checkActive() {
      let _self = this;
      let menuList = _self.params.form.menuList;
      menuList.forEach(function(obj, index, arr) {
        if (arr[index].children.length) {
          arr[index].children.forEach(function(objs, indexs, arrs) {
            if (objs.path == _self.$route.path) {
              let obj = {
                name: "actualActive",
                param: index
              };
              _self.$store.commit("tempData", obj);
              _self.params.hoverActive = index;
            }
          });
        } else if (_self.$route.path == obj.path) {
          let obj = {
            name: "actualActive",
            param: index
          };
          _self.$store.commit("tempData", obj);
          _self.params.hoverActive = index;
        }
      });

      console.log(_self.params.hoverActive);
    }
  },
  created() {
    let _self = this;
    _self.checkActive();
  }
};
</script>


