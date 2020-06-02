<template>
  <div class="temm">
    <div class="team">
      <heads titles="团队"></heads>
      <div class="team_top mb-20">
        <div class="flex fd ac dc">
          <span>邀请人数</span>
          <p>3</p>
        </div>
        <div class="flex fd ac dc">
          <span>我的团队</span>
          <p>4</p>
        </div>
        <div class="flex fd ac dc">
          <span>团队业绩</span>
          <p>$6003</p>
        </div>
      </div>
      <!-- 结算详情 -->
      <div class="team_box mb-20">
        <p>结算详情</p>
        <div class="team_but flex jc-sb">
          <div class="flex fd jc ac">
            <p>昨日结算人数</p>
            <span>3</span>
          </div>
          <div class="icon"></div>
          <div class="flex fd jc ac">
            <p>昨日结算业绩</p>
            <span>$603</span>
          </div>
        </div>
      </div>
      <!-- 收益详情 -->
      <div class="team_box mb-20">
        <p>收益详情</p>
        <div class="team_but flex jc-sb">
          <div class="flex fd jc ac">
            <p>昨日团队收益</p>
            <span>3</span>
          </div>
          <div class="icon"></div>
          <div class="flex fd jc ac">
            <p>团队累计收益</p>
            <span>$603</span>
          </div>
        </div>
      </div>
      <!-- 团队成员 -->
      <div class="team_list">
        <p>团队成员</p>
        <van-row class="leis_top">
          <van-col span="8">姓名</van-col>
          <van-col span="8">收益</van-col>
          <van-col span="8">邀请人数</van-col>
        </van-row>
        <van-row class="leis_center" v-for="(item, index) in 2" :key="index">
          <van-col span="8">用户（00358）</van-col>
          <van-col span="8">$403</van-col>
          <van-col span="8">1</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>结算详情


<style lang="scss" scoped>
.temm {
  height: 100%;
  background-color: #f0f0f0;
}
.team {
  //   height: 100%;
  background: url(../../assets/images/image/team_bg.png) no-repeat;
  background-size: 100%;
  background-color: #f0f0f0;
  //   overflow: auto;
  padding: 0 20px 40px 20px;

  .header {
    color: #fff;
  }

  &_top {
    height: 200px;
    margin-top: 90px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(61, 155, 253, 1);
      margin-top: 15px;
    }
    span {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
  }

  &_box {
    height: 240px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    p {
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
      padding: 19px 0 25px 20px;
    }
    .flex.jc {
      flex: 1;
      p {
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
      }
      span {
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(61, 155, 253, 1);
      }
    }
    .icon {
      width: 2px;
      height: 100%;
      background: rgba(240, 240, 240, 1);
    }
    .team_but {
      height: 170px;
      border-top: 1px solid #f0f0f0;
    }
  }
  &_list {
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    padding-bottom: 20px;
    p {
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
      padding: 20px 0 24px 42px;
    }
    .leis_top {
      height: 60px;
      background: rgba(214, 233, 253, 1);
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(49, 91, 135, 1);
      text-align: center;
      line-height: 60px;
      .van-col {
        border: 1px solid rgba(180, 217, 255, 1);
      }
    }
    .leis_center {
      height: 60px;
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(144, 144, 144, 1);
      text-align: center;
      line-height: 60px;

      .van-col {
        border: 1px solid rgba(240, 240, 240, 1);
      }
    }
  }
}
</style>