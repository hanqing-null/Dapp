<template>
  <div class="modify">
    <heads :titles="show==1?'修改登录密码':'修改支付密码'"></heads>
    <div class="modify_box">
      <span>新密码</span>
      <input type="password" :placeholder="show==1?'请输入新密码':'请输入6位数密码'" />
    </div>
    <div class="modify_box">
      <span>确认密码</span>
      <input type="password" placeholder="请再次输入密码" />
    </div>
    <div class="modify_box">
      <span>验证码</span>
      <input type="password" placeholder="请输入验证码" />
      <button>获取验证码</button>
    </div>
    <button class="btn" @click="setModify">确定</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: this.$route.query.id
    };
  },
  methods: {
    setModify() {
      if (this.show == 1) {
        // 修改密码
      } else if (this.show == 2) {
        // 修改支付密码
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
/deep/ .header {
  background: #f0f0f0 !important;
  border-bottom: 1px solid #e5e5e5;
}
.modify_box {
  height: 106px;
  margin-left: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  span {
    width: 140px;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
  }
  input {
    flex: 1;
    width: 0px;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(144, 144, 144, 1);
  }
  ::placeholder {
    color: rgba(144, 144, 144, 1);
  }
  button {
    width: 166px;
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
}
.btn {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 98px;
  background: rgba(61, 155, 253, 1);
  border: none;
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>