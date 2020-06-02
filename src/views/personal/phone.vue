<template>
  <div class="phone">
    <heads titles="绑定手机" :class="{'bgc':show}"></heads>
    <div class="phone_box flex ml20" v-if="show==false">
      <span>手机号</span>
      <p>{{handset.slice(0,3)}}******{{handset.slice(handset.length-4,handset.length)}}</p>
      <button @click="show=!show">更换</button>
    </div>
    <div class="flex fd" v-if="show">
      <div class="phone_box flex ml20">
        <span>手机号</span>
        <input type="text" placeholder="请输入新手机号码" />
      </div>
      <div class="phone_box flex ml20">
        <span>验证码</span>
        <input type="text" placeholder="请再次输入验证码" />
        <button class="yjj">获取验证码</button>
      </div>
      <div class="phone_btn">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handset: this.$store.state.personalForm.handset,
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.bgc {
  background: rgba(240, 240, 240, 1) !important;
}
.phone_box {
  height: 100px;
  margin-left: 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  p {
    flex: 1;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(144, 144, 144, 1);
  }
  span {
    width: 100px;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
  }
  button {
    width: 100px;
    height: 50px;
    border: 1px solid rgba(61, 155, 253, 1);
    border-radius: 4px;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(61, 155, 253, 1);
    background-color: transparent;
    margin-right: 20px;
  }
  input {
    flex: 1;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(144, 144, 144, 1);
  }
  :-ms-input-placeholder {
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(144, 144, 144, 1);
  }
  .yjj {
    width: 166px;
  }
}
.phone_btn {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 98px;
  background: rgba(61, 155, 253, 1);
  font-size: 28px;
  line-height: 98px;
  text-align: center;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
