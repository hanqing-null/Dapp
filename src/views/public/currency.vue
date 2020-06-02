<template>
  <div class="currency_">
    <heads titles="币种"></heads>
    <div class="currency_box" v-for="(item, index) in currencyList" :key="index">
      <div class="box_left">
        <img :src="item.imgs" alt />
        <span>{{item.currency}}</span>
        <i>{{item.name}}</i>
      </div>
      <van-switch
        style="font-size:.6rem"
        v-model="item.boolean"
        active-color="#61D66C"
        inactive-color="#F0F0F0"
        @change="onClick(item)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencyList: this.$store.state.currency
    };
  },
  methods: {
    onClick(mond) {
      this.$store.commit("set_Currency", this.currencyList);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ccc;
}

.currency_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 104px;
  border-bottom: 1px solid #f0f0f0;
  .box_left {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(48, 48, 48, 1);
      margin: 0 18px;
    }
    i {
      font-size: 24px;
      font-family: Microsoft YaHei UI;
      font-weight: 300;
      color: rgba(144, 144, 144, 1);
    }
  }
}
</style>