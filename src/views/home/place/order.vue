<template>
  <div class="order">
    <div class="box">
      <span>￥</span>
      <input type="text" v-model="value" placeholder="买入点数" />
    </div>
    <div class="button">
      <div class="bt" @click="value=100">100</div>
      <div class="bt" @click="value=500">500</div>
      <div class="bt" @click="value=1500">1500</div>
    </div>
    <div class="icc"></div>

    <van-nav-bar style="margin-bottom:2rem">
      <template #left>
        <div style="color:#303030;font-size:.3rem">付款方式</div>
      </template>
      <template #right>
        <div style="color:#C5C5C5;font-size:.3rem">
          余额
          <van-icon name="arrow" size=".2rem" color="#C5C5C5" />
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin: 0 20px;
  height: 72px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  span {
    font-size: 60px;
  }
  input {
    flex: 1;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #c5c5c5;
  }
}
.button {
  display: flex;
  margin-left: 20px;
  .bt {
    width: 100px;
    height: 40px;
    background: rgba(214, 234, 255, 1);
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    font-size: 28px;
    font-weight: 400;
    color: rgba(61, 155, 253, 1);
    margin-top: 27px;
    margin-right: 44px;
  }
}
.icc {
  width: 100%;
  height: 26px;
  background: rgba(249, 249, 249, 1);
  margin-top: 70px;
}
</style>