<template>
  <!-- 登录 -->
  <div class="signin">
    <!-- 手机 -->
    <van-field v-model="formSignin.number" @input="getBtn" label-width=".8rem" placeholder="请输入手机号">
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
    but: Boolean
  },
  data() {
    return {
      formSignin: {
        number: "",
        password: "",
        code: ""
      },
      password: "password"
    };
  },
  methods: {
    // 按钮状态
    getBtn() {
      let bt = true;
      Object.keys(this.formSignin).forEach(key => {
        if (this.formSignin[key].length == 0 || bt == false) {
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
  /deep/ .van-icon-closed-eye {
    font-size: 30px;
  }
  /deep/ .van-icon-eye-o {
    font-size: 30px;
  }
}
</style>