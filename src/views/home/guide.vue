<template>
  <div class="guide">
    <heads titles="新手指南"></heads>
    <news></news>
  </div>
</template>

<script>
import news from "../public/news";
export default {
  components: {
    news
  }
};
</script>

<style lang='scss' scoped>
.guide {
    height: 100%;
}
</style>