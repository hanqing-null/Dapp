<template>
  <div class="recharge">
    <heads titles="充值"></heads>
    <div class="box">
      <div class="box_left">币种：</div>
      <div class="box_right" @click="show=!show">
        <span>{{value}}</span>
        <img src="../../assets/images/icon/triangle.png" alt />
        <ul :class="{'none':show}">
          <li @click="value=item" v-for="(item, index) in rechargeList" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="box ico">
      <div class="box_left">数量：</div>
      <div class="box_righ">
        <input type="text" placeholder="请" />
      </div>
    </div>
    <div class="btn">
      <button>确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "BTC",
      ProductActive: "1",
      rechargeList: ["USDT", "BTC", "OTC"],
      show: true
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #f0f0f0;
}
.box {
  display: flex;
  align-items: center;
  margin: 0 20px;
  height: 103px;
  .box_left {
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
    margin-right: 54px;
  }
  .box_right {
    width: 156px;
    height: 60px;
    background: rgba(229, 229, 229, 1);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(144, 144, 144, 1);
    img {
      height: 17px;
    }
    ul {
      position: absolute;
      top: 0;
      width: 100%;
      right: 0;
      border-radius: 10px;
      overflow: hidden;
      background-color: pink;
    }
    .none {
      display: none;
    }
    li {
      background: rgba(229, 229, 229, 1);
      width: 100%;
      text-align: center;
      margin-top: 2px;
    }
    :nth-child(1) {
      margin-top: 0;
    }
  }
  .box_righ {
    width: 400px;
    input {
      font-size: 28px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(144, 144, 144, 1);
    }
  }
}
.ico {
  border-bottom: 1px solid #ccc;
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 170px;
  button {
    width: 600px;
    height: 98px;
    background: rgba(61, 155, 253, 1);
    border-radius: 10px;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>