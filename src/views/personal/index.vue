<template>
  <!-- 个人中心 -->
  <div class="personal">
    <div class="personal_title">
      个人中心
      <!-- 设置 -->
      <van-icon name="setting-o" @click="$router.push({path:'/setup'})" />
    </div>
    <div class="personal_name">
      <div class="personal_name-top">
        <img :src="$store.state.personalForm.img" alt />
        <div class="flex fd">
          <span>{{$store.state.personalForm.name}}</span>
          <p>{{$store.state.personalForm.autograph}}</p>
        </div>
      </div>
      <div class="personal_name-but">
        <div class="box" @click="$router.push({path:'/team'})">
          <img src="../../assets/images/icon/personal_team.png" alt />
          <span>团队</span>
        </div>
        <div class="box">
          <img src="../../assets/images/icon/personal_notice.png" alt />
          <span>公告</span>
        </div>
        <div class="box" @click="$router.push({path:'/extension'})">
          <img src="../../assets/images/icon/personal_recommend.png" alt />
          <span>推荐</span>
        </div>
      </div>
    </div>
    <div class="personal_lebe">
      <div class="personal_lebe-box">
        <img src="../../assets/images/icon/personal_bill.png" alt />
        <div class="box">
          <span>财务账单</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="personal_lebe-box">
        <img src="../../assets/images/icon/personal_ list.png" alt />
        <div class="box">
          <span>收益列表</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="personal_lebe-box">
        <img src="../../assets/images/icon/personal_ help.png" alt />
        <div class="box">
          <span>帮助中心</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="personal_lebe-box">
        <img src="../../assets/images/icon/personal_ id.png" alt />
        <div class="box">
          <span>版本号</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="personal_lebe-box">
        <img src="../../assets/images/icon/personal_ feedback.png" alt />
        <div class="box xx">
          <span>意见反馈</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="personal_btn">
      <button>安全退出</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.personal {
  height: 100%;
  overflow: auto;
  background-color: #f9f9f9;

  &_title {
    background-color: #fff;
    text-align: center;
    font-size: 36px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(32, 32, 32, 1);
    padding: 26px 0;
    line-height: 50px;
    position: relative;

    /deep/ .van-icon-setting-o {
      position: absolute;
      font-size: 50px;
      right: 22px;
    }
  }

  &_name {
    position: relative;
    padding: 29px 20px;
    height: 305px;
    background: rgba(255, 255, 255, 1);
    &-top {
      img {
        height: 155px;
        float: left;
        margin-right: 20px;
      }
      span {
        font-size: 30px;
        line-height: 30px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(43, 43, 43, 1);
        margin-top: 10px;
      }
      p {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(144, 144, 144, 1);
        margin-top: 30px;
      }
    }
    &-but {
      display: flex;
      top: 197px;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      width: 710px;
      height: 180px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 7px 21px 0px rgba(61, 155, 253, 0.14);
      border-radius: 10px;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 80px;
          margin-bottom: 14px;
        }
        span {
          font-size: 28px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(40, 40, 40, 1);
        }
      }
    }
  }

  &_lebe {
    width: 710px;
    height: 515px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 106px auto 0;

    &-box {
      flex: 1;
      display: flex;
      justify-items: center;

      img {
        height: 43px;
        margin: 30px 10px;
      }
      .box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        font-size: 28px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
        .van-icon {
          color: #ccc;
          margin-right: 25px;
        }
      }
      .xx {
        border: none;
      }
    }
  }

  &_btn {
    display: flex;
    justify-content: center;
    button {
      width: 600px;
      height: 80px;
      background: rgba(252, 221, 226, 1);
      border-radius: 10px;
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(207, 85, 103, 1);
      border: none;
      margin-top: 30px;
    }
  }
}
</style>