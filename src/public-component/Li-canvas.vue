<!--  -->
<template>
  <div>
    <div class="l-canvas-circle">
      <h3>饼状图</h3>
      <div id="echarts1" style="width:96vw; height:300px;"></div>
    </div>
    <div class="l-canvas-circle">
      <h3>水波图</h3>
      <div id="echarts2" style="width:96vw; height:300px;"></div>
    </div>

    <div class="l-canvas-circle">
      <h3>横向柱状图</h3>
      <div id="echarts3" style="width:96vw; height:300px;"></div>
    </div>

    <div class="l-canvas-circle">
      <h3>纵向柱状图</h3>
      <div id="echarts4" style="width:96vw; height:300px;"></div>
    </div>

    <div class="l-canvas-circle">
      <h3>词云</h3>
      <div id="echarts5" style="width:96vw; height:300px;"></div>
    </div>

    <div class="l-canvas-circle">
      <h3>漏斗图</h3>
      <div id="echarts6" style="width:96vw; height:300px;"></div>
    </div>
    <div class="l-canvas-circle">
      <h3>漏斗图</h3>
      <div id="baidu" style="width:96vw; height:300px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    };
  },
 created(){},
 methods:{
  //百度地图
  getMap(){
            
    // GL版命名空间为BMapGL
	var map = new BMapGL.Map("baidu");    // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(118.5, 27.5), 5);  // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式
        }
 },
 mounted(){
   this.getMap()
  //  饼状图
      var dom1 = document.getElementById('echarts1')
      var myChart1 = this.echarts.init(dom1)
      // 绘制图表
      myChart1.setOption({
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [{
              value: 235,
              name: '视频广告'
            },
            {
              value: 274,
              name: '联盟广告'
            },
            {
              value: 310,
              name: '邮件营销'
            },
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 400,
              name: '搜索引擎'
            }
          ]
        }]
      });

  // 水波图
      var dom2 = document.getElementById('echarts2')
      var myChart2 = this.echarts.init(dom2)
      var value = 0.41;
      var value_arr = [value,value,value] 
      // 绘制图表
      myChart2.setOption({
        backgroundColor: '#1b2735',
        title: {
            text: 'CPU使用率',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 25,
                color: 'rgb(97, 142, 205)'
            }
        },
        series: [{
            type: 'liquidFill',
            radius: '80%',
            data: value_arr,
            backgroundStyle: {
                borderWidth: 5,
                borderColor: 'rgb(255,0,255,0.9)',
                color: 'rgb(255,0,255,0.01)'
            },
            label: {
                normal: {
                    formatter: (value * 100).toFixed(2) + '%',
                    textStyle: {
                        fontSize: 50
                    }
                }
            }
        }]
      });
  // 横向柱状图
      var dom3 = document.getElementById('echarts3')
      var myChart3 = this.echarts.init(dom3)
      var  category= [{
              name: "管控",
              value: 2500
          },
          {
              name: "集中式",
              value: 8000
          },
          {
              name: "纳管",
              value: 3000
          },
          {
              name: "纳管",
              value: 3000
          },
          {
              name: "纳管",
              value: 3000
          }
      ]; // 类别
      var total = 10000; // 数据总数
      var  datas = [];
      category.forEach(value => {
          datas.push(value.value);
      });
      myChart3.setOption({
          backgroundColor:'#071347',
          xAxis: {
              max: total,
              splitLine: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                  show: false
              },
              axisTick: {
                  show: false
              }
          },
          grid: {
              left: 60,
              top: 20, // 设置条形图的边距
              right: 80,
              bottom: 20
          },
          yAxis: [{
              type: "category",
              inverse: false,
              data: category,
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: false
              }
          }],
          series: [{
                  // 内
                  type: "bar",
                  barWidth: 18,

                  legendHoverLink: false,
                  silent: true,
                  itemStyle: {
                      normal: {
                          color: function(params) {
                              var color;
                              if(params.dataIndex==19){
                                  color = {
                                      type: "linear",
                                      x: 0,
                                      y: 0,
                                      x2: 1,
                                      y2: 0,
                                      colorStops: [{
                                              offset: 0,
                                              color: "#EB5118" // 0% 处的颜色
                                          },
                                          {
                                              offset: 1,
                                              color: "#F21F02" // 100% 处的颜色
                                          }
                                      ]
                                  }
                                  }else if(params.dataIndex==18){
                                  color = {
                                      type: "linear",
                                      x: 0,
                                      y: 0,
                                      x2: 1,
                                      y2: 0,
                                      colorStops: [{
                                              offset: 0,
                                              color: "#FFA048" // 0% 处的颜色
                                          },
                                          {
                                              offset: 1,
                                              color: "#B25E14" // 100% 处的颜色
                                          }
                                      ]
                                  }
                                  }else if(params.dataIndex==17){
                                  color = {
                                      type: "linear",
                                      x: 0,
                                      y: 0,
                                      x2: 1,
                                      y2: 0,
                                      colorStops: [{
                                              offset: 0,
                                              color: "#F8E972" // 0% 处的颜色
                                          },
                                          {
                                              offset: 1,
                                              color: "#E5C206" // 100% 处的颜色
                                          }
                                      ]
                                  }
                                  }else{
                                  color = {
                                      type: "linear",
                                      x: 0,
                                      y: 0,
                                      x2: 1,
                                      y2: 0,
                                      colorStops: [{
                                              offset: 0,
                                              color: "#1588D1" // 0% 处的颜色
                                          },
                                          {
                                              offset: 1,
                                              color: "#0F4071" // 100% 处的颜色
                                          }
                                      ]
                                  }
                                  }
                                  return color;
                          },
                      }
                  },
                  label: {
                      normal: {
                          show: true,
                          position: "left",
                          formatter: "{b}",
                          textStyle: {
                              color: "#fff",
                              fontSize: 14
                          }
                      }
                  },
                  data: category,
                  z: 1,
                  animationEasing: "elasticOut"
              },
              {
                  // 分隔
                  type: "pictorialBar",
                  itemStyle: {
                      normal:{
                          color:"#061348"
                      }
                  },
                  symbolRepeat: "fixed",
                  symbolMargin: 6,
                  symbol: "rect",
                  symbolClip: true,
                  symbolSize: [1, 21],
                  symbolPosition: "start",
                  symbolOffset: [1, -1],
                  symbolBoundingData: this.total,
                  data: category,
                  z: 2,
                  animationEasing: "elasticOut"
              },
              {
                  // 外边框
                  type: "pictorialBar",
                  symbol: "rect",
                  symbolBoundingData: total,
                  itemStyle: {
                      normal: {
                          color: "none"
                      }
                  },
                  label: {
                      normal: {
                        formatter: (params) => {
                          var text;
                              if(params.dataIndex==1){
                                text = '{a| 80%}{f|  '+params.data+'}';
                              }else if(params.dataIndex==2){
                                text = '{b| 60%}{f|  '+params.data+'}';
                              }else if(params.dataIndex==3){
                                text = '{c| 40%}{f|  '+params.data+'}';
                              }else{
                                text = '{d| 20%}{f|  '+params.data+'}';
                              }
                              return text;
                  },
                  rich:{
                    a: {
                            color: 'red'
                        },
                        b: {
                          color: 'blue'
                        },
                        c:{
                          color: 'yellow'
                        },
                        d:{
                          color:"green"
                        },
                        f:{
                          color:"#ffffff"
                        }
                  },
                  position: 'right',
                  distance: 0, // 向右偏移位置
                  show: true
                      }
                  },
                  data: datas,
                  z: 0,
                  animationEasing: "elasticOut"
              },
              {
                  name: "外框",
                  type: "bar",
                  barGap: "-120%", // 设置外框粗细
                  data: [total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total],
                  barWidth: 25,
                  itemStyle: {
                      normal: {
                          color: "transparent", // 填充色
                          barBorderColor: "#1C4B8E", // 边框色
                          barBorderWidth: 1, // 边框宽度
                          // barBorderRadius: 0, //圆角半径
                          label: {
                              // 标签显示位置
                              show: false,
                              position: "top" // insideTop 或者横向的 insideLeft
                          }
                      }
                  },
                  z: 0
              }
          ]
       })
  // 竖向柱状图
      var dom4 = document.getElementById('echarts4')
      var myChart4 = this.echarts.init(dom4)
      myChart4.setOption({
        backgroundColor: "#38445E",
        grid: {
          left: '12%',
          top: '5%',
          bottom: '12%',
          right: '8%'
        },
          xAxis: {
              data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', ],
            axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 129, 109, 0.1)',
              width: 1 //这里是为了突出显示加上的
            }
          },
          axisLabel: {
            textStyle: {
              color: '#999',
              fontSize: 12
            }
          }
          },
          yAxis: [{
            splitNumber: 2,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 129, 109, 0.1)',
                width: 1 //这里是为了突出显示加上的
              }
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            },
            splitArea: {
              areaStyle: {
                color: 'rgba(255,255,255,.5)'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 129, 109, 0.1)',
                width: 0.5,
                type: 'dashed'
              }
            }
          }
        ],
          series: [{
              name: 'hill',
              type: 'pictorialBar',
              barCategoryGap: '0%',
              symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
              label: {
            show: true,
            position: 'top',
            distance: 15,
            color: '#DB5E6A',
            fontWeight: 'bolder',
            fontSize: 20,
          },
              itemStyle: {
                  normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                  }
                ],
                global: false //  缺省为  false
              }
            },
            emphasis: {
              opacity: 1
            }
              },
              data: [123, 60, 25, 18, 12],
              z: 10
          }]
      })
  // 词云
      var dom5 = document.getElementById('echarts5')
      var myChart5 = this.echarts.init(dom5)
      myChart5.setOption({
        tooltip: {
            show: true
        },
        series: [{
            type: "wordCloud",
            gridSize:6,
            shape:'diamond',
            sizeRange: [12, 50],
            width:800,
            height:500,
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 250),
                            Math.round(Math.random() * 250),
                            Math.round(Math.random() * 250)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [{
                    name: " 词云",
                    value: 30,
                },
                {
                    name: " 是我",
                    value: 24
                },
                {
                    name: " 第一次",
                    value: 21
                },
                {
                    name: " 搞",
                    value: 19
                },
                {
                    name: " 做的",
                    value: 18
                },
                {
                    name: " 不好",
                    value: 18
                },
                {
                    name: " 你也",
                    value: 17
                },
                {
                    name: " 没有",
                    value: 12
                },
                {
                    name: " 办法",
                    value: 12
                },
                {
                    name: " 你说",
                    value: 11
                },
                {
                    name: " 你气",
                    value: 11
                },
                {
                    name: " 不气",
                    value: 10
                },
                {
                    name: " 哈哈",
                    value: 9
                }
            ],
        }]

      })

  // 漏斗图 
      var dom6 = document.getElementById('echarts6')
      var myChart6 = this.echarts.init(dom6)
      myChart6.setOption({
                                                                                                                                                                                                                                                                                                                
      })

  

 },
 computed:{},
}
</script>
<style scoped>
.l-canvas-circle{
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>