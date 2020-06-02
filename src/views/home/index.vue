<template>
  <div class="home flex fd ji">
    <img class="home-top_img" src="../../assets/images/image/hoem_top.png" alt />
    <van-notice-bar
      color="#25588C"
      background="rgba(255,255,255,1)"
      text="截止2020年3月30号19：00已公布最新战报"
      style="border-radius:.15rem; height:1rem;margin: 0.26667rem;"
    >
      <template #left-icon>
        <img style="height:.7rem" src="../../assets/images/icon/hoem_horn.png" alt />
      </template>
    </van-notice-bar>

    <div class="home-center flex">
      <div class="home-center_left" @click="$router.push({path:'/NewsWarReport'})">
        <p class="f30">消息战报</p>
        <span class="f22">每日最新消息</span>
      </div>
      <div class="home-center_right flex fd">
        <div class="center_left" @click="$router.push({path:'/guide'})">
          <p class="f30">新手指南</p>
          <span class="f22">一分钟学会交易</span>
        </div>
        <div class="center_right" @click="$router.push({path:'/extension'})">
          <p class="f30">推广</p>
          <span class="f22">分享最新消息</span>
        </div>
      </div>
    </div>

    <div class="home-button">
      <div class="home-button_top flex ac jc-sb" @click="$router.push({path:'/currency'})">
        <span>币种</span>
        <img src="../../assets/images/icon/hoem_right.png" alt />
      </div>
      <div class="home-button_center flex fd ac">
        <div
          class="box flex jc-sb"
          v-for="(item, index) in arrCurrency"
          :key="index"
          v-if="item.boolean"
        >
          <div class="flex ac">
            <img :src="item.imgs" alt />
            <div>
              <i>{{item.Currency}}</i>
              <span>{{item.name}}</span>
              <p>{{item.decimal}}</p>
            </div>
          </div>
          <div class="flex jc-sb ac">
            <div>
              <img src="@/assets/images/icon/growth1.png" alt />
              <span>{{item.growth}}</span>
              <p>{{item.assets}}</p>
            </div>
            <button @click="$router.push({path:'/IndexList',  query: {id:item.currency}})">Bet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrCurrency: this.$store.state.currency
    };
  }
};
</script>

<style lang='scss' scoped>
.home {
  background: url(../../assets/images/image/hoem_bg.png) no-repeat;
  background-size: 100%;
  height: 100%;
  .home-top_img {
    margin: 20px;
  }
  /deep/ .van-notice-bar__content {
    font-size: 28px;
  }
  &-center {
    margin: 0.26667rem;
    height: 300px;
    p {
      margin: 20px;
      line-height: 30px;
      color: #4d4d4d;
    }
    span {
      margin-left: 20px;
      line-height: 22px;
    }

    &_left {
      flex: 1;
      background: url(../../assets/images/image/home_left.png) no-repeat;
      background-size: 100%;
      height: 100%;
      color: #cc972e;
    }

    &_right {
      flex: 1;
      height: 100%;
      justify-content: center;
      .center_left {
        background: url(../../assets/images/image/home_right1.png) no-repeat;
        background-size: 100%;
        height: 100%;
        color: #33a9fb;
      }
      .center_right {
        background: url(../../assets/images/image/home_right2.png) no-repeat;
        background-size: 100%;
        height: 100%;
        color: #ec7437;
      }
    }
  }

  &-button {
    padding-bottom: 1.4rem;
    &_top {
      font-size: 30px;
      padding: 20px;
      border-bottom: 1px solid #f2f2f2;
      img {
        height: 16px;
      }
    }
    &_center {
      padding: 0 20px;
      .box {
        width: 100%;
        height: 120px;
        border-bottom: 1px solid #f2f2f2;
        img {
          height: 40px;
          margin-right: 18px;
        }
        .ac {
          i {
            font-size: 30px;
            font-weight: 400;
            color: rgba(48, 48, 48, 1);

            margin-right: 18px;
          }
          span {
            font-size: 24px;
            font-weight: 300;
            color: rgba(144, 144, 144, 1);
          }
          p {
            font-size: 24px;
            font-weight: 300;
            // margin-top: 14px;
            color: rgba(144, 144, 144, 1);
          }
        }
        .jc-sb {
          img {
            height: 19px;
          }
          span {
            font-size: 24px;
            font-weight: 400;
            color: #7fca5a;
          }
          p {
            color: #909090;
            font-size: 24px;
            margin-top: 14px;
            text-align: right;
          }
        }
        button {
          width: 100px;
          height: 60px;
          background: rgba(61, 155, 253, 1);
          box-shadow: 0px 5px 10px 0px rgba(61, 155, 253, 0.5);
          border-radius: 30px;
          border: none;
          margin-left: 62px;
          color: #ffffff;
          font-size: 28px;
        }
      }
    }
  }
}
</style>