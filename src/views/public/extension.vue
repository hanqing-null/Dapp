<template>
  <div class="extension">
    <heads titles="推广"></heads>
    <div class="extension_center">
      <div class="box">
        <img src="@/assets/images/icon/head.png" alt />
        <span>YERE</span>
        <p>你的邀请码：3026530</p>
        <div id="qrcode" ref="qrcode" style="width:3rem;height:3rem;"></div>
        <!-- 创建一个div，并设置id为qrcode -->
        <i>扫描二维码下载DAPP</i>
        <div class="box_center">
          <div>
            <img src="../../assets/images/icon/extension_pyq.png" alt />
            <span>朋友圈</span>
          </div>
          <div>
            <img src="../../assets/images/icon/extension_wex.png" alt />
            <span>微信</span>
          </div>
          <div>
            <img src="../../assets/images/icon/extension_wb.png" alt />
            <span>微博</span>
          </div>
          <div>
            <img src="../../assets/images/icon/extension_qq.png" alt />
            <span>QQ好友</span>
          </div>
          <div>
            <img src="../../assets/images/icon/extension_kj.png" alt />
            <span>QQ空间</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
// 分享功能
// import wx from "weixin-js-sdk";
export default {
  methods: {
    qrcode() {
      let qrcode = new QRCode(this.$refs.qrcode, {
        text: "https://www.baidu.com", // 二维码地址
        colorDark: "#000",
        colorLight: "#fff"
      });
    }
  },

  mounted() {
    this.qrcode();
  }
};
</script>

<style lang='scss' scoped>
.extension {
  height: 1334px;
  background: linear-gradient(
    0deg,
    rgba(79, 166, 248, 1) 0%,
    rgba(86, 198, 244, 1) 100%
  );
  /deep/ .header {
    color: #fff;
    background-color: transparent;
  }
  &_center {
    width: 710px;
    height: 1141px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 669px;
      height: 1075px;
      border: 5px dashed rgba(61, 155, 253, 0.52);
      border-radius: 10px 0px 0px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100px;
        margin-top: 100px;
        margin-bottom: 20px;
      }
      span {
        font-size: 36px;
        color: #303030;
      }
      p {
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(61, 155, 253, 1);
        margin-top: 30px;
        margin-bottom: 60px;
      }
      i {
        font-size: 26px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        margin-top: 15px;
        margin-bottom: 70px;
      }

      .box_center {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          span {
            font-size: 24px;
            color: rgba(48, 48, 48, 1);
          }
          img {
            width: 80px;
          }
        }
      }
    }
  }
  #qrcode {
    /deep/ img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>