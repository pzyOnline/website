<template>
  <div class="vernacular-item">
    <div class="ask-title">
      问答•
      <span class="item-title">{{askData.title}}</span>
    </div>
    <div class="text-grey count">{{askData.number}}</div>
  </div>
</template>

<script>
export default {
   props: ['askData'],
   created() {
     console.log(this.askData)
   },
};
</script>

<style>
</style>