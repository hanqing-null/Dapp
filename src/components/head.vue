<template>
  <div class="header clear" :class="{'headerBorder':!borderNone}">
    <div class="header-side">
      <!--      <van-icon name="arrow-left" class='headicon' v-if="!missMsg"   />-->
      <i class="van-icon van-icon-arrow-left headicon" v-if="!missMsg" @click="winOpen"></i>
    </div>
    <div class="header-middle">{{titles}}</div>
    <div class="header-side"></div>
  </div>
</template>
<script>
export default {
  data() {
    //数据存放
    return {
      Micro: false
    };
  },
  props: {
    titles: {
      type: String,
      default: ""
    },
    missMsg: {
      type: Boolean,
      default: false
    },
    borderNone: {
      type: Boolean,
      default: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    winOpen() {
      this.$router.go(-1);
    }
  },
  computed: {
    //计算属性，依赖源变化，执行
  },
  watch: {
    //监听，数据变化，执行
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 88px;
  text-align: center;
  color: #303030;
  font-weight: bold;
  line-height: 88px;
  display: flex;
  background-color:transparent;

  .header-side {
    height: 88px;
    width: 99px;
    z-index: 1;
  }
  .header-middle {
    width: 552px;
    height: 88px;
    font-size: 35px;
    font-weight: 400;
  }
  .headicon {
    font-size: 40px;
    vertical-align: middle;
  }
}
</style>





