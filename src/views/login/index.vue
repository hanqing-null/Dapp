<template>
  <div class="login flex ji">
    <div class="login_center flex fd ac">
      <img src="@/assets/images/image/l_log.png" alt />
      <p>测试系统：区块链一站式服务商！</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script> 

<style lang='scss' scoped>
.login {
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(91, 152, 254, 1) 0%,
    rgba(185, 134, 249, 1) 100%
  );
  &_center {
    width: 745px;
    height: 1224px;
    background: url(../../assets/images/image/lgoin_bg.png) no-repeat;
    background-size: 100%;
    margin-top: 110px;
    padding: 0 99px 0 106px;
    img {
      width: 312px;
      margin-top: 100px;
      margin-bottom: 30px;
    }
    p {
      font-size: 30px;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 90px;
    }
  }
}
</style>