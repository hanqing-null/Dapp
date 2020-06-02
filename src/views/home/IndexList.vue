<template>
  <div class="IndexList">
    <heads :titles="$route.query.id"></heads>
    <van-row class="IndexList_top" type="flex" justify="space-between">
      <van-col span="6">涨幅指数</van-col>
      <van-col span="6">收益率</van-col>
      <van-col span="6">可交易量</van-col>
    </van-row>
    <van-row
      class="IndexList_center"
      type="flex"
      justify="space-between"
      v-for="(item, index) in list"
      :key="index"
      @click="$router.push({path:'place',query:{id:$route.query.id,yield:item.yield,index:item.index,volume:item.volume}})"
    >
      <van-col span="6" class="left">
        <img src="../../assets/images/icon/growth1.png" alt />
        <!-- <img src="../../assets/images/icon/growth2.png" alt /> -->
        <span>{{item.yield}}</span>
      </van-col>
      <van-col span="6" class="center">{{item.index}}</van-col>
      <van-col span="6" class="right">{{item.volume}}</van-col>
    </van-row>
    <img
      class="icon"
      @click="$router.push({path:'/history'})"
      src="../../assets/images/icon/history.png"
      alt
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前币种数据
      list: [
        { yield: "4.68%", index: "1%", volume: "3205145.0" },
        { yield: "4.8%", index: "1.32%", volume: "32055.0" },
        { yield: "3.68%", index: "1.1%", volume: "320515.0" },
        { yield: "2.68%", index: "1.sad%", volume: "32052131.0" },
        { yield: "1.68%", index: "1.12%", volume: "320145.0" }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang='scss' scoped>
.IndexList {
  /deep/ &_top {
    height: 64px;
    background: rgba(240, 240, 240, 1);
  }
  /deep/ .van-col {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
  }
  /deep/ &_center {
    height: 82px;
    border-bottom: 1px solid #f0f0f0;
    img {
      height: 20px;
      margin-right: 15px;
    }
    .left {
      font-size: 30px;
      font-family: Microsoft YaHei;
      line-height: 30px;
      font-weight: 400;
      color: rgba(127, 202, 90, 1);
    }
    .right {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(61, 155, 253, 1);
    }
  }
  .icon {
    height: 46px;
    position: absolute;
    right: 27px;
    top: 22px;
    z-index: 100;
  }
}
</style>