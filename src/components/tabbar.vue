<template>
  <div class="tabbar">
    <router-view></router-view>
    <div class="tabbar_box"></div>
    <van-tabbar v-model="active" :placeholder="true">
      <van-tabbar-item
        @click="$store.commit('set_Active',active)"
        to="home"
        active-color="#3D9BFD"
        inactive-color="#202020"
      >
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon[0].active : icon[0].inactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="$store.commit('set_Active',active)" to="assets">
        <span>资产</span>
        <template #icon="props">
          <img :src="props.active ? icon[1].active : icon[1].inactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="$store.commit('set_Active',active)" to="option">
        <span>期权</span>
        <template #icon="props">
          <img :src="props.active ? icon[2].active : icon[2].inactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="$store.commit('set_Active',active)" to="information">
        <span>资讯</span>
        <template #icon="props">
          <img :src="props.active ? icon[3].active : icon[3].inactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="$store.commit('set_Active',active)" to="personal">
        <span>个人中心</span>
        <template #icon="props">
          <img :src="props.active ? icon[4].active : icon[4].inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$store.state.active,
      icon: [
        {
          active: require("../assets/images/icon/home_active.png"),
          inactive: require("../assets/images/icon/home_inactive.png")
        },
        {
          active: require("../assets/images/icon/assets_active.png"),
          inactive: require("../assets/images/icon/assets_inactive.png")
        },
        {
          active: require("../assets/images/icon/option_actice.png"),
          inactive: require("../assets/images/icon/option_inactive.png")
        },
        {
          active: require("../assets/images/icon/information_active.png"),
          inactive: require("../assets/images/icon/information_inactive.png")
        },
        {
          active: require("../assets/images/icon/personal_active.png"),
          inactive: require("../assets/images/icon/personal_inactive.png")
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.tabbar {
  height: 100%;
  .tabbar_box {
    widows: 100%;
    height:10px;
  }
  /deep/ .van-tabbar {
    height: 98px;
    box-shadow: 0px 2px 16px 0px rgba(101, 101, 101, 0.26);
  }
  /deep/ .van-tabbar-item {
    font-size: 22px;
  }
  /deep/ .van-tabbar-item__icon img {
    height: 48px;
  }
}
</style>