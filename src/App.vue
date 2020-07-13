<template>
  <div id="app" v-scroll:throttle="{fn: onScroll, throttle: 300 }" ref="wrap">
    <nav-header ref="header" :class="[headerOut?'white-nav':'']"></nav-header>
    <!-- 面包屑导航 -->
    <div id="bread" :class="[headerOut?'fixed-bread':'']">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/creative' }">创业工坊</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/talk' }">白话</el-breadcrumb-item>
        <el-breadcrumb-item>关注</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="dot"></div>
    <!-- 内容区 -->
    <div class="default-view" id="view">
      <router-view />
    </div>
    <!-- 右侧操作栏 -->
    <div class="menu">
      <div class="menu-item yellow-lev1">
        <i class="el-icon-message"></i>
      </div>
      <div class="menu-item yellow-lev2">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-plus"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>上传图片</el-dropdown-item>
            <el-dropdown-item>发布文章</el-dropdown-item>
            <el-dropdown-item>提问</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="menu-item yellow-lev3" @click="scrollTop">
        <i class="el-icon-top"></i>
      </div>
    </div>
  </div>
</template>

<script>
import navHeader from "@/views/index/index.vue";
export default {
  data() {
    return {
      headerHeight: 0,
      headerOut: false
    };
  },
  mounted() {
    this.headerHeight = this.$refs.header.$el.offsetHeight / 2;
  },
  methods: {
    onScroll(e, pos) {
      if (pos.scrollTop >= this.headerHeight - 80) {
        this.headerOut = true;
      } else {
        this.headerOut = false;
      }
    },
    scrollTop() {
      // var element = document.getElementById("wrap");
      // console.log(element);
      // element.scrollIntoView();
      this.$refs.wrap.scrollTop = this.headerHeight;
    }
  },
  components: {
    "nav-header": navHeader
  }
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#app {
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  // 右侧操作菜单
  .yellow-lev3 {
    background-color: rgb(204, 194, 0);
  }
  .yellow-lev2 {
    background-color: rgb(192, 182, 0);
  }
  .yellow-lev1 {
    background-color: rgb(255, 241, 0);
  }
  .menu {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 9;

    .menu-item {
      width: 54px;
      height: 54px;
      text-align: center;
      line-height: 60px;
    }

    .el-icon-plus {
      font-size: 24px;
      color: #333;
      font-weight: bold;
    }
    .el-icon-top {
      color: rgb(50, 119, 252);
      font-size: 24px;
      font-weight: bold;
    }
  }
  .fixed-bread {
    position: fixed;
    top: 80px;
    width: 100%;
    background: #fff;
    z-index: 13;
    transition: all .5s;
  }

  .default-view {
    width: 94%;
    margin: 0 auto;
    padding-top: 10px;
  }
  .el-breadcrumb {
    font-size: 28px;
    line-height: 1;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 30px;
  }
}
</style>
