<template>
  <!-- 注册 -->
  <div class="signin">
    <!-- 手机 -->
    <van-field v-model="formSignin.phone" @input="getBtn" label-width=".8rem" placeholder="请输入手机号">
      <template #left-icon>
        <img src="@/assets/images/icon/login_phone.png" alt />
      </template>
      <template #label>+86</template>
    </van-field>
    <!-- 密码 -->
    <van-field :type="password" v-model="formSignin.password" @input="getBtn" placeholder="请输入密码">
      <template #left-icon>
        <img src="@/assets/images/icon/login_lock.png" alt />
      </template>
      <template #right-icon>
        <van-icon @click="password='text'" v-if="password=='password'" name="closed-eye" />
        <van-icon @click="password='password'" v-else name="eye-o" />
      </template>
    </van-field>

    <!-- 请再次输入密码 -->
    <van-field
      :type="setPassword"
      v-model="formSignin.set_password"
      @input="getBtn"
      placeholder="请再次输入密码"
    >
      <template #left-icon>
        <img src="@/assets/images/icon/login_lock.png" alt />
      </template>
      <template #right-icon>
        <van-icon @click="setPassword='text'" v-if="setPassword=='password'" name="closed-eye" />
        <van-icon @click="setPassword='password'" v-else name="eye-o" />
      </template>
    </van-field>

    <!-- 请输入邀请码 -->
    <van-field
      v-show="!forget"
      v-model="formSignin.invitation"
      @input="getBtn"
      placeholder="请输入邀请码（选填）"
    >
      <template #left-icon>
        <img src="@/assets/images/icon/login_code.png" alt />
      </template>
    </van-field>
    <!-- 短信 -->
    <van-field v-model="formSignin.code" @input="getBtn" placeholder="请输入短信验证码">
      <template #left-icon>
        <img src="@/assets/images/icon/lgoin_tb.png" alt />
      </template>
      <template #button>
        <van-button size="normal" type="info" plain>发送验证码</van-button>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  props: {
    but: Boolean,
    forget: Boolean
  },
  data() {
    return {
      password: "password",
      setPassword: "password",
      formSignin: {
        // 手机号
        phone: "",
        // 密码
        password: "",
        // 再次密码
        set_password: "",
        // 邀请码
        invitation: "",
        // 验证码
        code: ""
      }
    };
  },
  methods: {
    // 表单为空按钮不显 改变父组件的值
    getBtn() {
      let bt = true;

      Object.keys(this.formSignin).forEach(key => {
        // 验证码 判断是否是出于登录状态
        if ((key === "invitation") & this.forget) {
          console.log("邀请码");

          return;
        } else if (this.formSignin[key].length == 0) {
          bt = false;
        }
      });

      if (bt) {
        this.$emit("setBtn", true);
      } else {
        this.$emit("setBtn", false);
      }
    }
  }
};
</script>


<style lang='scss' scoped>
.signin {
  /deep/ .van-cell {
    height: 106px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    color: #909090;
    font-size: 24px;

    img {
      margin-right: 30px;
      height: 40px;
    }
  }
/deep/ .van-icon {
  font-size: 30px;
}
}
</style>