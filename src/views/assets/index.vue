<template>
  <!-- 资产 -->
  <div class="assets">
    <div class="title">
      <p>资产</p>
      <img src="@/assets/images/icon/assets_refresh.png" alt />
      <img @click="$router.push({path:'/exchangey'})" src="@/assets/images/icon/assets_file.png" alt />
    </div>
    <div class="assets_top">
      <div class="top_left">
        <span>总资产（元）</span>
        <p>
          {{show?"$18542.4":'******'}}
          <img
            v-if="show"
            src="@/assets/images/icon/assets_eye.png"
            alt
            @click="setEye()"
          />
          <img @click="setEye()" v-else src="@/assets/images/icon/assets_byb.png" alt />
        </p>
      </div>
      <div class="top_right">
        <button @click="$router.push({path:'/recharge'})">充值</button>
        <button @click="$router.push({path:'/reflect'})">提现</button>
      </div>
    </div>
    <div class="assets_center">
      <div class="top" @click="$router.push({path:'/currency'})">
        <span>币种</span>
        <van-icon name="arrow" />
      </div>
      <div class="list" v-for="(item, index) in assetsList" :key="index" v-if="item.boolean">
        <div class="list_left">
          <img :src="item.imgs" alt />
          <div class="text_left">
            <p>
              {{item.naem}}
              <span>{{item.currency}}</span>
            </p>
            <i>{{item.address}}</i>
          </div>
          <img
            @click="copy"
            :data-clipboard-text="item.address"
            class="copy"
            src="@/assets/images/icon/assets_cv.png"
            alt
            ref="copy"
          />
        </div>
        <div class="list_right">
          <p>{{item.money}}</p>
          <i>${{item.dollar}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      assetsList: this.$store.state.currency,
      show: this.$store.state.personalForm.show
    };
  },
  methods: {
    // 复制
    copy() {
      var clipboard = new Clipboard(".copy");

      clipboard.on("success", e => {
        alert("dd");
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        Message({
          message: "该浏览器不支持自动复制",
          type: "warning"
        });
        // 释放内存
        clipboard.destroy();
      });
    },
    setEye() {
      this.show = !this.show;
      this.$store.commit("set_PersonalForm_show", this.show);
    }
  }
};
</script>

<style lang="scss" scoped>
.assets {
  background: url(../../assets/images/image/hoem_bg.png) no-repeat;
  background-size: 100%;
  padding-bottom: 30px;

  .title {
    font-size: 36px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: flex-end;
    padding-right: 12px;
    padding-top: 20px;
    img {
      height: 60px;
      margin-left: 28px;
    }
    p {
      line-height: 60px;
      margin-right: 180px;
    }
  }
}
.assets_top {
  width: 710px;
  height: 200px;
  margin: 54px auto;
  border-radius: 8px;
  background: url(../../assets/images/image/assets_bg.png);
  background-size: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-top: 34px;
  .top_left {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    span {
      font-size: 28px;
    }
    p {
      width: 305px;
      font-size: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 30px;
      }
    }
  }
  .top_right {
    display: flex;
    flex-direction: column;
    button {
      width: 160px;
      height: 60px;
      background: rgba(255, 255, 255, 1);
      border-radius: 30px 0px 0px 30px;
      font-size: 28px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(61, 155, 253, 1);
      margin-bottom: 15px;
      border: none;
    }
  }
}
.assets_center {
  .top {
    display: flex;
    height: 80px;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    span {
      font-size: 30px;
      line-height: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(48, 48, 48, 1);
    }
    /deep/ .van-icon-arrow {
      color: #909090;
      font-size: 20px;
    }
  }
  .list {
    margin: 0 20px;
    height: 118px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    .list_left {
      display: flex;
      align-items: center;
      img {
        height: 40px;
        margin: 21px;
      }
      p {
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(48, 48, 48, 1);
      }
      span {
        font-size: 24px;
        font-family: Microsoft YaHei UI;
        font-weight: 300;
        color: rgba(144, 144, 144, 1);
      }
      i {
        font-size: 24px;
        font-family: Microsoft YaHei UI;
        font-weight: 300;
        color: rgba(144, 144, 144, 1);
      }
    }
    .list_right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-evenly;
      p {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(48, 48, 48, 1);
      }
      i {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(144, 144, 144, 1);
      }
    }
  }
}
</style>