<template>
  <div class="placeCenter">
    <div class="placeCenter_top">
      涨幅指数
      <i>
        <img src="../../../assets/images/icon/growth1.png" alt /> {{$route.query.index}}
      </i>
    </div>
    <div class="placeCenter_center">
      <div class="box">
        <span>收益率</span>
        <p>{{$route.query.yield}}</p>
      </div>
      <div class="icon"></div>
      <div class="box">
        <span>可交易量</span>
        <p>{{$route.query.volume}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.placeCenter_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  color: rgba(48, 48, 48, 1);
  margin-top: 70px;
  i {
    margin-top: 20px;
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(127, 202, 90, 1);
    img {
      height: 20px;
      margin-right: 5px;
    }
  }
}
.placeCenter_center {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 56px;
  border-bottom: 1px solid #f0f0f0;
  margin-top: 82px;
  .box {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(48, 48, 48, 1);
    }
    p {
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(61, 155, 253, 1);
    }
  }
  .icon {
    width: 2px;
    height: 50px;
    background: rgba(240, 240, 240, 1);
  }
}
</style>