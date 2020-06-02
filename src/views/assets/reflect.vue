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
      <div class="box_left">￥</div>
      <div class="box_righ">
        <input type="text" placeholder="输入金额" />
      </div>
    </div>
    <p class="btc">
      {{value}}
      <span>余额：256</span>
    </p>
    <div class="icon"></div>

    <div class="box txdj">
      <div class="box_left">
        <p>提现地址：</p>
      </div>
      <div class="box_righ">
        <input type="text" placeholder="输入金额" />
        <img src="@/assets/images/icon/scanning.png" alt />
      </div>
    </div>
    <p class="txdjleft" align="right">手续费：2%</p>

    <div class="icon"></div>
    <div class="box txdj">
      <div class="box_left">
        <p>备注：</p>
      </div>
      <div class="box_righ">
        <input type="text" placeholder="输入金额" />
      </div>
    </div>
    <div class="box txdj">
      <div class="box_left">
        <p>验证码：</p>
      </div>
      <div class="box_righ">
        <input type="text" placeholder="输入金额" />
        <button>获取验证码</button>
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
    margin-right: 40px;
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
    input::-webkit-input-placeholder {
      font-size: 28px;
      color: rgba(144, 144, 144, 1);
    }
  }
}
.ico {
  border-bottom: 1px solid #ccc;
  .box_left {
    font-size: 50px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
    margin-right: 30px;
  }
}
.btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  button {
    width: 100%;
    height: 98px;
    background: rgba(61, 155, 253, 1);
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
.btc {
  margin-left: 22px;
  margin-top: 14px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(144, 144, 144, 1);
  span {
    margin-left: 22px;
    font-size: 22px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(61, 155, 253, 1);
  }
}
.icon {
  height: 10px;
  background: rgba(240, 240, 240, 1);
  margin: 40px 0 0 0;
}
.txdj {
  display: flex;
  justify-items: center;
  border-bottom: 1px solid #ccc;
  .box_left {
    width: 178px;
    margin-right: 0;
  }
  .box_righ {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      height: 40px;
      border: 1px solid rgba(61, 155, 253, 1);
      border-radius: 4px;
      background-color: transparent;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(61, 155, 253, 1);
    }
    img {
      width: 30px;
    }
  }
}
.txdjleft {
  margin-top: 16px;
  margin-right: 20px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(144, 144, 144, 1);
}
</style>