<template>
  <div class="RankingList">
    <div class="flex ac" v-for="(item, index) in 6" :key="index">
      <img v-if="index==0" src="../../assets/images/icon/first.png" alt />
      <img v-else-if="index==1" src="../../assets/images/icon/second.png" alt />
      <img v-else-if="index==2" src="../../assets/images/icon/third.png" alt />
      <div class="left" v-else>{{index+1}}</div>
      <div class="flex jc-sb">
        <div class="flex">
          <img src="../../assets/images/icon/head.png" alt />
          <span>迪丽热巴</span>
        </div>
        <div class="flex fd">
          <i>团队收益</i>
          <p>9845</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.RankingList {
  .ac {
    height: 132px;
    justify-content: space-between;
  }
  img {
    height: 45px;
    margin-left: 20px;
    margin-right: 36px;
  }
  .jc-sb {
    flex: 1;
    height: 100%;
    align-items: center;
    padding-right: 46px;
    border-bottom: 1px solid #f2f2f2;
    img {
      height: 80px;
    }
    span {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
    i {
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(80, 80, 80, 1);
    }
    p {
      font-size: 32px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(253, 81, 81, 1);
    }
    .fd {
      height: 100%;
      align-items: flex-end;
      padding: 20px 0;
      justify-content: space-between;
    }
  }
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(197, 197, 197, 1);
  width: 90px;
}
</style>