<template>
<!-- 个人信息 -->
  <div class="setup">
    <heads titles="设置"></heads>
    <div class="box" @click="$router.push({path:'/personalInformation'})">
      <span>个人信息</span>
      <van-icon name="arrow" />
    </div>
    <div class="box" @click="$router.push({path:'/modify',query:{id:1}})">
      <span>登录密码</span>
      <van-icon name="arrow" />
    </div>
    <div class="box" @click="$router.push({path:'/modify',query:{id:2}})">
      <span>支付密码</span>
      <van-icon name="arrow" />
    </div>
    <div class="box" @click="$router.push({path:'/phone'})">
      <span>手机号码</span>
      <div>
        <span
          style="color:rgba(144,144,144,1);"
        >{{handset.slice(0,3)}}******{{handset.slice(handset.length-4,handset.length)}}</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handset: this.$store.state.personalForm.handset
    };
  }
};
</script>

<style lang="scss" scoped>
.setup {
  .header {
    border-bottom: 1px solid #f0f0f0;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    height: 106px;
    margin-left: 20px;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
    .van-icon-arrow {
      color: #acacac;
      margin-left: 28px;
      margin-right: 20px;
    }
  }
}
</style>