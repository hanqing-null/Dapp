<template>
  <!-- 期权 -->
  <div class="option">
    <div class="option_title">
      BTC
      <van-icon name="play" />
      <div class="option_title-right">购买时间：50</div>
    </div>

    <!-- echarts -->
    <div class="option_top">
      <!--为echarts准备一个具备大小的容器dom-->
      <div id="main"></div>
    </div>

    <div class="ico"></div>
    <!-- 标签页 -->
    <div class="option_button flex jc-sb ac">
      <div :class="{'clas':show}" @click="show=true">交易实况</div>
      <div :class="{'clas':!show}" @click="show=false">当前仓位</div>
    </div>
    <!-- 交易实况 -->
    <div class="option_list" v-show="show">
      <div class="list_left">
        <img src="../../assets/images/icon/head.png" alt />
        <span>158****8045</span>
      </div>
      <div class="list_riht" :class="{'gong':true}">看涨+10</div>
    </div>

    <!-- 当前仓位 -->
    <div class="option_li" v-show="!show">
      <van-row class="li_top">
        <van-col span="4">涨幅</van-col>
        <van-col span="4">收益率</van-col>
        <van-col span="4">价格</van-col>
        <van-col span="4">时间</van-col>
        <van-col span="4">开奖</van-col>
        <van-col span="4">收益</van-col>
      </van-row>
      <van-row class="li_center">
        <van-col class="fut" span="4">看涨+10</van-col>
        <van-col span="4">198%</van-col>
        <van-col span="4">5045</van-col>
        <van-col span="4">18:49:05</van-col>
        <van-col class="kj" span="4">倒计时：10</van-col>
        <van-col class="sy" span="4">-</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      charts: "",
      // 价格
      opinionData: [
        "200",
        "400",
        "320",
        "500",
        "188",
        "188",
        "188",
        "188",
        "188",
        "188",
        "188"
      ],
      // 时间
      date: [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ],
      show: true
    };
  },
  methods: {
    // 创建echarts 图表
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      // echarts图表
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 横向虚线
            // type: "cross",
            label: {
              // backgroundColor: "pink"
            }
          }
        },

        toolbox: {},
        // x轴
        xAxis: {
          name: "时",
          nameTextStyle: {
            color: "#3D9BFD",
            fontSize: 20
          },
          type: "category",
          boundaryGap: true,
          data: this.date,
          axisLine: {
            lineStyle: {
              color: "#C5C5C5"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        //y轴
        yAxis: {
          type: "value",
          name: "价格",
          nameTextStyle: {
            color: "#3D9BFD",
            fontSize: 20
          },
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#C5C5C5"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 18
            }
          }
        },

        series: [
          {
            name: "价格",
            type: "line",
            data: this.opinionData,
            // 普通样式。
            itemStyle: {
              // 点的颜色。
              color: "#3D9BFD"
            }, // 高亮样式。
            emphasis: {
              itemStyle: {
                // 高亮时点的颜色。
                color: "#366697"
              }
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#fff" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#4FA6F8" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawLine("main");
    });
  }
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 440px;
}

.option_title {
  height: 87px;
  background: rgba(61, 155, 253, 1);
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 36px;
  align-items: center;
  color: #ffffff;
  .van-icon-play {
    transform: rotate(90deg);
    margin-left: 20px;
    font-size: 30px;
  }
  .option_title-right {
    position: absolute;
    right: 22px;
    width: 190px;
    height: 50px;
    background: rgba(54, 142, 233, 1);
    border-radius: 10px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 50px;
  }
}

.option_top {
  display: flex;
  justify-content: center;
  position: relative;
  margin: 20px;
}

.ico {
  height: 20px;
  background: rgba(240, 240, 240, 1);
}

.option_button {
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;
    flex: 1;
    height: 88px;
    color: #303030;
    border-bottom: 2px solid #f0f0f0;
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
  }
  .clas {
    color: #3d9bfd;
    border-bottom: 4px solid #3d9bfd;
  }
}

.option_list {
  margin: 20px;
  height: 80px;
  background: rgba(240, 240, 240, 1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 26px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(58, 107, 157, 1);

  img {
    height: 50px;
    margin-right: 18px;
  }
  .list_left {
    display: flex;
    align-items: center;
  }
  .list_riht {
    width: 120px;
    height: 50px;
    border: 1px solid rgba(133, 209, 95, 1);
    border-radius: 10px;
    font-size: 24px;
    color: rgba(133, 209, 95, 1);
    line-height: 50px;
    text-align: center;
  }
  .gong {
    color: rgba(245, 103, 120, 1);
    border: 1px solid rgba(245, 103, 120, 1);
  }
}

.li_top {
  display: flex;
  justify-content: space-around;
  height: 70px;
  background: rgba(240, 240, 240, 1);
  align-items: center;
  font-size: 26px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  text-align: center;
}

.li_center {
  text-align: center;
  font-size: 20px;
  color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;

  .fut {
    width: 100px;
    height: 40px;
    background: rgba(133, 209, 95, 1);
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }

  .kj {
    width: 113px;
    height: 40px;
    background: rgba(206, 230, 255, 1);
    color: rgba(45, 93, 143, 1);
    line-height: 40px;
  }

  .sy {
    color: rgba(61, 155, 253, 1);
    line-height: 40px;
  }
}
</style>