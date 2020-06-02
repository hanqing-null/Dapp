<template>
  <div class="NewsWarReport">
    <van-icon name="arrow-left" @click="$router.go(-1)" />
    <van-tabs
      line-width="50px"
      title-active-color="#3D9BFD"
      title-inactive-color="#303030"
      line-height="4px"
      color="#3D9BFD"
    >
      <van-tab title="消息战报">
        <news></news>
      </van-tab>
      <van-tab title="收益榜">
        <RankingList />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import news from "../public/news";
import RankingList from "../public/RankingList";
export default {
  components: {
    news,
    RankingList
  },
  data() {
    return { active: 0 };
  }
};
</script>


<style lang='scss' scoped>
.NewsWarReport {
  /deep/ .van-icon-arrow-left {
    position: absolute;
    left: 29px;
    top: 29px;
    z-index: 99;
    font-size: 40px;
  }
  height: 100%;
  /deep/ .van-tabs__wrap {
    height: 88px;
    padding: 10px 180px;
  }
  /deep/ .van-tab__text {
    font-size: 34px;
  }
}
</style>