import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: 0,
    // 用户个人信息
    personalForm: {
      // 姓名
      name: 'YEARE丶',
      // 手机号
      handset: '15800009950',
      // 性别
      gender: '男',
      // 个性签名
      autograph: '给梦想插上飞翔的翅膀~',
      // 总资产是否可观看
      show: true,
      img: require('@/assets/images/icon/head.png')
    },
    // 币种
    /**
     * currency:币种
     * name：名字
     * imgs:本地图片
     * boolean：是否显示
     * 
     */
    currency: [
      {
        currency: "BTC",
        name: "比特币",
        imgs: require("@/assets/images/icon/BTC.png"),
        boolean: true,
        decimal: "0.2012564",
        growth: "0.64%",
        assets: "$5225",
        address: 'xasdwdakshwkdah',
        money: '100',
        dollar: '4000'
      },
      {
        currency: "ETH",
        name: "以太坊",
        imgs: require("@/assets/images/icon/ETH.png"),
        boolean: true,
        decimal: "0.2012564",
        growth: "0.64%",
        assets: "$5225",
        address: 'xasdwdakshwkdah',
        money: '100',
        dollar: '4000'
      },
      {
        currency: "OKB",
        name: "OK币",
        imgs: require("@/assets/images/icon/OKB.png"),
        boolean: true,
        decimal: "0.2012564",
        growth: "0.64%",
        assets: "$5225",
        address: 'xasdwdakshwkdah',
        money: '100',
        dollar: '4000'
      },
      {
        currency: "LTC",
        name: "莱特币",
        imgs: require("@/assets/images/icon/LTC.png"),
        boolean: false,
        decimal: "0.2012564",
        growth: "0.64%",
        assets: "$5225",
        address: 'xasdwdakshwkdah',
        money: '100',
        dollar: '4000'
      }
    ],
    // 后台获取的币种数据

  },
  mutations: {
    set_Currency(state, arr) {
      state.currency = arr
    },
    set_Active(state, arr) {
      state.active = arr
    },
    set_PersonalForm_show(state, bul) {
      state.personalForm['show'] = bul
    }
  },
  actions: {
  },
  modules: {
  },
  computed: {

  },
})
