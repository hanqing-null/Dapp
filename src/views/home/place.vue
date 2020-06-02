<template>
  <div class="place">
    <heads :titles="$route.query.id"></heads>
    <placeCenter v-if="show" />
    <order ref="order" v-else></order>

    <div class="btnBox">
      <button class="btn" @click="getPlace">{{show?'下单':'确定'}}</button>
    </div>

    <van-overlay :show="shows">
      <div class="wrapper">
        <div class="block">
          <van-icon name="cross" @click="shows=!shows" />
          <span>请输入支付密码</span>
          <p>
            <span>$</span>
            {{value}}
          </p>
          <div class="bock">
            <!-- 密码输入框 -->
            <van-password-input
              :value="errorInfo"
              :focused="showKeyboard"
              @focus="showKeyboard = true"
            />
            <!-- 数字键盘 -->
            <van-number-keyboard
              :show="showKeyboard"
              @input="onInput"
              @delete="onDelete"
              @blur="showKeyboard = false"
            />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import placeCenter from "./place/placeCenter.vue";
import order from "./place/order";
export default {
  components: {
    placeCenter,
    order
  },
  data() {
    return {
      show: true,
      shows: false,
      value: "25",
      showKeyboard: true,
      errorInfo: ""
    };
  },
  methods: {
    getPlace() {
      // 提交事件
      if (this.show) {
        // 确定
        this.show = false;
      } else {
        this.value = this.$refs.order.value;
        // 输入判断
        if (this.value.langth == 0) {
          return this.$toast("买入点数不能为空");
        }
        // 下单获取买入点数
        // 密码框清空
        this.password = "";
        this.shows = !this.shows;
      }
    },
    onInput(key) {
      this.errorInfo = (this.errorInfo + key).slice(0, 6);
    },
    onDelete() {
      this.errorInfo = this.errorInfo.slice(0, this.errorInfo.length - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .header {
  color: #fff !important;
  background-color: #3d9bfd !important;
}
.btnBox {
  width: 100%;
  margin-top: 57px;
  display: flex;
  justify-content: center;
}
.btn {
  width: 500px;
  height: 80px;
  background: rgba(61, 155, 253, 1);
  border-radius: 10px;
  border: none;
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 500px;
  height: 400px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding-top: 62px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .van-icon-cross {
    position: absolute;
    right: 22px;
    top: 22px;
    font-size: 28px;
    color: #ccc;
  }
  span {
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
  }
  p {
    font-size: 60px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(48, 48, 48, 1);
    margin: 48px 0;
  }
  .bock {
    width: 100%;
    /deep/ .van-password-input__security {
      height: 80px;
    }
  }
}
</style>