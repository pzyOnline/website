<template>
  <div id="child">
    <el-row :gutter="20" class="creative-wrapper">
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        v-for="(item, index) in creativeDate"
        :key="index"
      >
        <div
          class="grid-content bg-purple"
          @mouseover="activeIndex=index"
          @mouseleave="activeIndex=-1"
        >
          <el-image class="item-image" :src="url" lazy></el-image>
          <div class="icon-wrapper" v-show="activeIndex===index">
            <div class="left-wrap" @click="handleLike(index)">
              <img v-show="item.isConcern" src="@a/icon/icon_like.png" alt />
              <img v-show="!item.isConcern" src="@a/icon/icon_normal.png" alt />
              {{item.likeCount}}
            </div>
            <div class="right-wrap" @click="handleAdd(index)">
              <img v-show="!item.isAdd" src="@a/icon/not_collect.png" alt />
              <img v-show="item.isAdd" src="@a/icon/icon_collected.png" alt />
            </div>
          </div>

          <div class="text-wrapper">
            <div class="top-title">
              <div class="user-info">
                <el-image class="head-img" :src="url" fit="cover"></el-image>
                admin
              </div>
              <el-button type="info">关注</el-button>
            </div>
            <div class="text-content">
              <p>{{item.text}}{{item.text}}{{item.text}}{{item.text}}</p>
              <span class="time">{{item.time}}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: -1,
      url:
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3675415932,4054970339&fm=26&gp=0.jpg",
      //   creativeDate: creativeDate
      creativeDate: [
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: true,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        }
        ,
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        },
        {
          author: "admin",
          isConcern: false,
          isAdd: true,
          text: "hello world true my word eye",
          time: "2020.01.30",
          likeCount: 25
        }
      ]
    };
  },
  methods: {
    handleLike(idx) {
      // 创业工坊点赞
      if (this.creativeDate[idx].isConcern) {
        this.creativeDate[idx].likeCount -= 1;
      } else {
        this.creativeDate[idx].likeCount += 1;
      }
      this.creativeDate[idx].isConcern = !this.creativeDate[idx].isConcern;
    },
    //加入图库
    handleAdd(idx) {
      this.creativeDate[idx].isAdd = !this.creativeDate[idx].isAdd;
    }
  }
};
</script>

<style lang="scss" scope>
#child {
  width: 100%;
  // 创业工坊容器
  .el-main {
    line-height: unset;
  }
  .creative-wrapper {
    // height: 470px;
    // overflow: auto;
    .grid-content {
      height: 470px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: background-color .2s cubic-bezier(.645,.045,.355,1);
      background-color: transparent;
    }
    width: 100%;
    box-sizing: border-box;
    .el-col {
      padding: 0 !important;
      //大图
      .item-image {
        width: 100%;
        height: 200px;
        -o-object-fit: cover;
        object-fit: cover;
      }
      .icon-wrapper {
        position: absolute;
        top: 140px;
        left: 5%;
        z-index: 1;
        display: flex;
        width: 90%;
        justify-content: space-between;
        .left-wrap {
          color: rgb(255, 241, 0);
          font-size: 20px;
        }
        img {
          width: 40px;
          vertical-align: middle;
        }
      }
      // 底部内容容器
      .text-wrapper {
        border: 1px solid rgb(248, 248, 248);
        padding: 0 20px;
        flex-grow: 1;
        // 内容头部标题
        .top-title {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .user-info {
            font-size: 20px;
            font-weight: bold;

            //头像
            .head-img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: inline-block;
              border: 2px solid rgb(230, 218, 0);
              object-fit: cover;
              margin-right: 10px;
              vertical-align: middle;
            }
          }
        }

        .text-content {
          padding: 0 18px;
          p {
            font-size: 16px;
            font-weight: bold;
            line-height: 30px;
            text-align: left;
          }
          span {
            color: #cccccc;
            font-size: 12px;
          }
        }
      }

      .grid-content:hover {
        background-color: rgb(255, 241, 0);
      }
    }
  }
}
</style>