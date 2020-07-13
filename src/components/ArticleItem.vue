<template>
  <div class="vernacular-item">
    <div class="item-title">{{articleData.title}}</div>
    <div class="item-intro text-grey">{{articleData.description}}</div>
    <div class="bottom-info">
      <div class="user-info">
        <el-avatar
          src="https://images.pexels.com/photos/3996183/pexels-photo-3996183.jpeg?auto=compress&cs=tinysrgb&h=130"
          fit="contain"
          size="small"
        ></el-avatar>
        <span class="user-name">{{articleData.author}}</span>
        <span class="text-grey">{{articleData.time}}</span>
      </div>
      <div class="topic-info">
        <span class="num-wrap">
          <img v-show="true" src="@a/icon/thumbs_up.png" alt />
          {{articleData.likeCount}}
          <!-- <img v-show="handlelike" src="@a/icon/thumbs_up_active.png" alt /> -->
        </span>
        <span class="num-wrap">
          <img v-show="true" src="@a/icon/icon_message.png" alt />
          {{articleData.messCount}}
        </span>
        <span class="num-wrap">
          <img v-show="true" src="@a/icon/icon_view.png" alt />
          {{articleData.viewCount}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articleData'],
  created() {
     console.log(this.articleData)
   },
};
</script>

<style>
</style>