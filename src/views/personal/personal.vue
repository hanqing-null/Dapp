<template>
  <!-- 个人信息 -->
  <div class="personalInformation">
    <heads titles="个人信息"></heads>
    <div class="personal_top">
      <img :src="form.img" alt />
      <p>{{form.name}}</p>
    </div>
    <div class="ione"></div>
    <div class="personal_for">
      <div class="flex">
        <span>昵称</span>
        <p>{{form.name}}</p>
      </div>
      <div class="flex">
        <span>手机</span>
        <p>{{form.handset.slice(0,3)}}******{{form.handset.slice(form.handset.length-4,form.handset.length)}}</p>
        <div class="btn">更换</div>
      </div>
      <div class="flex">
        <span>性别</span>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="男" icon-size="0.37333rem" checked-color="#3D9BFD">男</van-radio>
          <van-radio name="女" icon-size="0.37333rem" checked-color="#3D9BFD">女</van-radio>
        </van-radio-group>
        <!-- <p>{{form.gender}}</p> -->
      </div>
      <div class="flex">
        <span>个性签名</span>
        <p>{{form.autograph}}</p>
      </div>
    </div>
    <div class="personal_btn">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$store.state.personalForm,
      radio: this.$store.state.personalForm.gender
    };
  }
};
</script>

<style lang="scss" scoped>
.personal_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 155px;
    margin-top: 56px;
  }
  p {
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(43, 43, 43, 1);
  }
}
.ione {
  height: 10px;
  background: rgba(240, 240, 240, 1);
  margin-top: 68px;
}
.personal_for {
  padding-left: 20px;

  .flex {
    height: 100%;
    position: relative;
    height: 106px;
    align-items: center;
    font-size: 28px;
    border-bottom: 1px solid #e5e5e5;
    span {
      font-family: Microsoft YaHei;
      font-weight: 400;
      width: 185px;
      color: rgba(48, 48, 48, 1);
    }
    p {
      color: #909090;
    }
    .btn {
      text-align: center;
      line-height: 50px;
      color: #3d9bfd;
      width: 100px;
      height: 50px;
      border: 1px solid rgba(61, 155, 253, 1);
      border-radius: 4px;
      position: absolute;
      right: 87px;
    }

    /deep/ .van-radio-group {
      height: 30px;
      /deep/ .van-radio__label {
        font-size: 28px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(144, 144, 144, 1);
      }
    }
  }
}
.personal_btn {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 96px;
  
  button {
    width: 500px;
    height: 88px;
    background: rgba(61, 155, 253, 1);
    border-radius: 44px;
    border: none;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>