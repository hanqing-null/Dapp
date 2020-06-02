<template>
  <div class="exchange">
    <heads titles="闪兑"></heads>
    <!-- 兑换率 -->
    <div class="exchange_top">
      <div class="exchange_top-box">
        <p>1 BTC =5525 USDT</p>
        <p>1 LTC =38.2276 USDT</p>
        <p>1 BTC =5525 USDT</p>
      </div>
      <div class="exchange_top-box">
        <p>1 ETH =130.82 USDT</p>
        <p>1 XRP =0.1704 USDT</p>
        <p>1 BTC =5525 USDT</p>
      </div>
    </div>
    <!-- 兑换输入框 -->
    <div class="exchange_center">
      <div class="exchange_center-top">
        <!-- 左 -->
        <div class="box">
          <div class="leb">
            <img src="../../assets/images/icon/BTC.png" alt />
            BTC
            <van-icon name="play" />
            <ul class="none">
              <li v-for="(item, index) in 4" :key="index">ETH</li>
            </ul>
          </div>
          <div class="ipt">
            <input type="text" placeholder="输入数量" />
          </div>
          <p>手续费：2 USDT</p>
        </div>
        <img src="../../assets/images/icon/transformation.png" alt />
        <!-- 右 -->
        <div class="box">
          <div class="leb">
            <img src="../../assets/images/icon/BTC.png" alt />
            BTC
            <van-icon name="play" />
            <ul class="none">
              <li v-for="(item, index) in 4" :key="index">ETH</li>
            </ul>
          </div>
          <div class="ipt">
            <input type="text" placeholder="输入数量" />
          </div>
          <p></p>
        </div>
      </div>
      <div class="btn">
        <button>兑换</button>
      </div>
    </div>
    <div class="exchange_buttom">
      <p>兑换记录</p>
      <div class="flex fd" v-for="(item, index) in 7" :key="index">
        <p>
          1 BTC
          <i>兑换</i> 5225 USDT
        </p>
        <span>2020-04-07 10:21</span>
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

<style lang="scss" scoped>
.exchange {
  background-color: #f2f2f2;
  padding-bottom: 40px;
  height: 100%;
  overflow: auto;

  .header {
    background-color: #3d9bfd;
    color: #fff;
  }

  &_top {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin: 20px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    height: 200px;
    &-box {
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(48, 48, 48, 1);
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  &_center {
    height: 410px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    margin: 20px;

    &-top {
      margin: 48px 65px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 36px;
        margin: 42px;
      }

      .box {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 209px;
        justify-content: space-between;
        margin-top: 48px;

        .leb {
          position: relative;
          width: 230px;
          height: 60px;
          background: rgba(193, 223, 253, 1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          font-size: 30px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(48, 48, 48, 1);

          /deep/ .van-icon-play {
            position: absolute;
            right: 16px;
            font-size: 20px;
            color: #3d9bfd;
            transform: rotate(90deg);
          }
          img {
            height: 40px;
            margin: 0 16px;
          }
        }

        .ipt {
          width: 234px;
          border-bottom: 1px solid #f2f2f2;
          height: 75px;

          input {
            font-size: 26px;
            color: rgba(197, 197, 197, 1);
          }
          input::-webkit-input-placeholder {
            font-size: 26px;
            color: rgba(197, 197, 197, 1);
          }
        }

        p {
          height: 22px;
          line-height: 22px;
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(197, 197, 197, 1);
        }
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      button {
        width: 500px;
        height: 80px;
        background: rgba(61, 155, 253, 1);
        border-radius: 10px;
        font-size: 28px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        border: none;
      }
    }
  }

  &_buttom {
    padding: 20px;
    p {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(48, 48, 48, 1);
    }
    .flex {
      width: 710px;
      height: 100px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      justify-content: space-evenly;
      padding-left: 14px;
      margin: 20px 0;

      p {
        font-size: 26px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(48, 48, 48, 1);
      }
      i {
        color: #3d9bfd;
      }
      span {
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(197, 197, 197, 1);
      }
    }
  }

  .none {
    display: none;
  }
}
</style>