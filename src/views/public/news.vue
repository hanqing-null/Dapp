<template>
  <div class="news">
    <div class="list" v-for="(item, index) in list" :key="index">
      <div class="list_left">
        <span>{{item.name}}</span>
        <p>
          <img src="@/assets/images/icon/home_system.png" alt />
          {{item.p}}
        </p>
      </div>
      <div class="list_right">
        <span></span>
        <p>{{item.icom}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "闪兑指南", p: "系统消息", icom: "2020-4-2 11:23" },
        { name: "闪兑指南", p: "系统消息", icom: "2020-4-2 11:23" },
        { name: "闪兑指南", p: "系统消息", icom: "2020-4-2 11:23" },
        { name: "闪兑指南", p: "系统消息", icom: "2020-4-2 11:23" },
        { name: "闪兑指南", p: "系统消息", icom: "2020-4-2 11:23" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  .list {
    background-color: #ffffff;
    margin: 10px 20px;
    height: 100px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    &_left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        font-size: 28px;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
      p {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(144, 144, 144, 1);
      }
      img {
        height: 17px;
      }
    }
    &_right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      span {
        width: 17px;
        height: 17px;
        background: rgba(61, 155, 253, 1);
        border-radius: 50%;
      }
    }
  }
}
</style>>
