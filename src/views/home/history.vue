<template>
  <div class="history">
    <heads titles="订单记录"></heads>
    <div class="history_center">
      <div class="left">
        <div class="lefr_com">
          <p>交易指数</p>
          <p>交易时间</p>
          <p>下单数量</p>
          <p>收益率</p>
          <p>结算指数</p>
          <p>收益</p>
        </div>
        <div class="left_rig">
          <p class="colo">1%</p>
          <p>2020-04-03 9:30</p>
          <p>100</p>
          <p class="colo">4.68%</p>
          <p>未结算</p>
          <p>0</p>
        </div>
      </div>
      <div class="right">
        <img src="../../assets/images/icon/complete.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.history {
  height: 100%;
  background-color: #f0f0f0;
  &_center {
    width: 710px;
    height: 300px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    padding-left: 25px;
    .left {
      left: 1;
      height: 100%;
      display: flex;
      justify-items: center;
      .lefr_com {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 26px;
        font-weight: 400;
        color: rgba(48, 48, 48, 1);
        margin-right: 55px;
        p {
          text-align: right;
        }
      }
      .left_rig {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        p {
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(154, 154, 154, 1);
        }
        .colo {
          color: #60d16b;
        }
      }
    }
    .right {
      height: 100%;
      margin-right: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 147px;
      }
    }
  }
}
</style>