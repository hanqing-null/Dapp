<template>
  <div class="sign">
    <!-- 登录注册 -->
    <div v-show="forget==false" class="sign-top flex jc-sa">
      <div class="flex fd ac" @click="setForget(1)">
        登录
        <img v-if="show==true" src="@/assets/images/image/login_bt.png" alt />
      </div>
      <div class="flex fd ac" @click="setForget(2)">
        注册
        <img v-if="show==false" src="@/assets/images/image/login_bt.png" alt />
      </div>
    </div>
    <!-- 重置登录密码 -->
    <div v-show="forget" class="forget flex ac">
      <img @click="setForget(3)" src="@/assets/images/icon/left_arrow.png" alt />
      <i class="f30">重置登录密码</i>
    </div>
    <!-- 输入框 -->
    <!-- 登录 -->
    <signin v-if="show==true&forget==false" ref="signin" @setBtn="setBtn" :but="but" />
    <!-- 注册 -->
    <register v-else-if="show==false&forget==false" ref="forget" @setBtn="setBtn" :but="but" />
    <!-- 忘记密码 -->
    <register
      v-else-if="forget==true"
      :forget="forget"
      @click="setForget()"
      @setBtn="setBtn"
      :but="but"
      ref="forgetPassword"
    />
    <!-- 忘记密码 -->
    <p @click="setForget(3)" v-show="show==true&forget==false">忘记密码</p>
    <!-- 按钮 -->
    <div class="but flex jc ac" @click="setForm()" :class="{tt:but==false}">
      <i>确定</i>
    </div>
  </div>
</template>

<script>
// 登录
import signin from "./signin";
// 注册
import register from "./register";
export default {
  components: {
    signin,
    register
  },

  data() {
    return {
      // true登录 falres注册
      show: true,
      // 登录按钮状态
      but: false,
      // 忘记密码
      forget: false
    };
  },
  methods: {
    // 改变登录值
    setBtn(params) {
      this.but = params;
    },
    // 忘记密码 登录 注册
    setForget(value) {
      if (value == 1) {
        // 登录
        this.show = true;
      } else if (value == 2) {
        // 注册
        this.show = false;
      } else if (value == 3) {
        // 忘记密码
        this.forget = !this.forget;
      }
      this.but = false;
    },
    // 登录事件
    setForm() {
      if (!this.but) {
        return;
      }

      if (this.show & !this.forget) {
        // 登录
        console.log("登录");
        // 获取登录表单
        let form = this.$refs.signin.formSignin;
        // 手机号正则 密码长度 验证码长度  效验
        if (!/^1[3456789]\d{9}$/.test(form.number)) {
          return this.$toast("手机号不正确请重新输入");
        } else if (form.password.length < 6 || form.password.length > 16) {
          return this.$toast("密码长度不正确请重新输入");
        } else if (form.code.length < 4) {
          return this.$toast("验证码长度不正确");
        }
        this.$router.push({ path: "/tabbar" });
      } else if (this.show & this.forget) {
        // 忘记密码判断
        console.log("忘记密码");
        let form = this.$refs.forgetPassword.formSignin;
        // 手机号正则 密码长度 验证码长度  效验
        if (!/^1[3456789]\d{9}$/.test(form.phone)) {
          return this.$toast("手机号不正确请重新输入");
        } else if (form.password.length < 6 || form.password.length > 16) {
          return this.$toast("密码长度不正确请重新输入");
        } else if (form.password != form.set_password) {
          return this.$toast("两次密码输入不一致");
        } else if (form.code.length < 4) {
          return this.$toast("验证码长度不正确");
        }
        this.$router.push({ path: "/tabbar" });
      } else if (!this.show & !this.forget) {
        // 注册判断
        let form = this.$refs.forget.formSignin;
        // 手机号正则 密码长度 验证码长度  效验
        if (!/^1[3456789]\d{9}$/.test(form.phone)) {
          return this.$toast("手机号不正确请重新输入");
        } else if (form.password.length < 6 || form.password.length > 16) {
          return this.$toast("密码长度不正确请重新输入");
        } else if (form.password != form.set_password) {
          return this.$toast("两次密码输入不一致");
        } else if (form.code.length < 4) {
          return this.$toast("验证码长度不正确");
        }
        // 获取注册表单
        this.$router.push({ path: "/tabbar" });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.sign {
  width: 100%;
  .sign-top {
    width: 100%;
    font-size: 30px;
    img {
      width: 50px;
      height: 6px;
      margin-top: 8px;
    }
  }
  .tt {
    background: #f0f0f0;
    color: #c5c5c5;
    box-shadow: none;
  }
  p {
    float: right;
    color: #3d9bfd;
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .forget {
    margin-left: 20px;
    img {
      height: 26px;
      margin-right: 50px;
    }
  }
}
.but {
  width: 500px;
  height: 80px;
  background: linear-gradient(
    -90deg,
    rgba(79, 166, 248, 1) 0%,
    rgba(86, 198, 244, 1) 100%
  );
  box-shadow: 0px 0px 20px 0px rgba(61, 253, 155, 0.35);
  border-radius: 40px;
  font-size: 24px;
  color: rgba(254, 254, 254, 1);
  margin: 103px auto;
}
</style>