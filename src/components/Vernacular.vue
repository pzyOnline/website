<template>
  <!-- 白话 -->
  <div id="vernacular-wrapper">
    <!-- 左侧展示容器 -->
    <div class="vernacular-topic">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <template>
            <div v-for="item in list" :key="item.id">
              <article-item v-if="item.type === 1" :articleData="item"></article-item>
              <ask-item v-if="item.type === 2" :askData="item"></ask-item>
            </div>
          </template>
        </el-tab-pane>
        <!-- 文章分类 -->
        <el-tab-pane label="文章" name="second">
          <!-- 文章列表 -->
          <div class="article-list" v-show="!showDetail">
            <el-button type="primary">推荐</el-button>
            <el-button type="primary">热门文章</el-button>
            <el-button type="primary">我的关注</el-button>
            <div v-for="v in 4" :key="v" @click="showDetail=true">1111</div>
          </div>
          <!-- 文章详情 -->
          <el-page-header
            v-show="showDetail"
            @back="goBack"
            content="文章详情"
            style="padding-bottom: 20px"
          ></el-page-header>
        </el-tab-pane>
        <!-- 问答分类 -->
        <el-tab-pane label="问答" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
    <!-- 右侧操作容器 -->
    <div class="vernacular-operate" v-show="activeName!='second'">
      <div class="operate-title">快速提问</div>
      <textarea name id="handle-text" cols="30" rows="10" placeholder="请输入内容"></textarea>
      <el-button type="info">提问</el-button>
    </div>
  </div>
</template>

<script>
import articleItem from "@c/ArticleItem.vue";
import askItem from "@c/AskItem.vue";

export default {
  data() {
    return {
      activeName: "first",
      list: [
        {
          type: 1,
          id: 1,
          title: "发现开源小程序,营销组件",
          description: "发现开源小程序,营销组件发现开源小程序,营销组件",
          author: "admin",
          time: "20分钟前",
          likeCount: 20,
          viewCount: 15,
          messCount: 6
        },
        {
          type: 1,
           id: 2,
          title: "发现开源小程序,营销组件",
          description: "发现开源小程序,营销组件发现开源小程序,营销组件",
          author: "admin",
          time: "20分钟前",
          likeCount: 20,
          viewCount: 15,
          messCount: 6
        },
        {
          type: 2,
          id:3,
          title: "你在大学参加过什么有意思的比赛",
          number: 23
        }
      ],
      showDetail: false
    };
  },
  components: {
    "article-item": articleItem,
    "ask-item": askItem
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 详情返回方法
    goBack() {
      this.showDetail = false;
    }
  }
};
</script>

<style lang="scss" scope>
#vernacular-wrapper {
  width: 98%;
  display: flex;
  padding: 0 2%;
  justify-content: space-between;

  .vernacular-topic {
    box-sizing: border-box;
    border: 20px solid rgb(247, 247, 247);
    padding: 0 40px;
    flex-grow: 1;
    .vernacular-item {
      width: 100%;
      padding: 10px 0 40px 0;
      border-bottom: 2px solid rgb(245, 245, 245);
      .item-title {
        color: #333;
        font-size: 20px;
      }

      .ask-title {
        color: rgb(97, 29, 127);
        font-size: 20px;
        line-height: 40px;
      }

      .count {
        font-size: 16px;
        line-height: 40px;
      }

      .item-intro {
        font-size: 14px;
        line-height: 40px;
      }

      .bottom-info {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        .user-name {
          margin: 0 6px;
        }

        .user-info,
        .topic-info {
          display: flex;
          align-items: center;

          .num-wrap {
            margin: 0px 10px;
            font-size: 16px;
            display: flex;
            align-items: center;
            img {
              width: 24px;
              height: 24px;
              margin-right: 6px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    // 文章列表包裹容器
    .article-list {
    }
    .el-page-header {
      padding-bottom: 10px;
    }
  }

  // 右侧操作容器
  .vernacular-operate {
    width: 25%;
    margin-left: 30px;

    .operate-title {
      width: 100%;
      border-top: 2px solid #ccc;
      font-size: 20px;
      color: #333;
      line-height: 60px;
    }

    .operate-title::before {
      content: "";
      height: 2px;
      width: 100px;
      display: block;
      margin-top: -2px;
      background: #333;
    }

    #handle-text {
      width: 100%;
      height: 280px;
      background: rgb(251, 251, 251);
      color: #666;
      box-sizing: border-box;
      padding: 10px;
    }
  }

  .text-grey {
    color: rgb(188, 188, 188);
  }
}
</style>