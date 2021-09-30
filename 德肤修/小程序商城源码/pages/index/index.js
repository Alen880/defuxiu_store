// 引入用来发送请求的方法
import {request} from "../../request/index.js";

var app = getApp()
var API = require('../../utils/api.js')

wx-Page({
  data: {
    //左侧菜单数据
    leftList:[],
    //右侧菜单数据
    rightList:[],
    //被点击的左侧菜单
    currentIndex:0
  },
  //接口返回数据
  Cates:[],

  onLoad: function (options) {
    // 请求参数
    // request({url:"https://defuxiu.com/goods_info"})
    // .then(res=>{
    //   console.log(result);
    //   this.Cates=res.data.massage
    // })
    
    var that = this
    // 使用 Mock
    API.ajax({
      data:'',
      fn: function (res) {
        //这里可以获取模拟的res
        console.log(res)
        that.Cates = res.message
        let leftList = that.Cates.map(v=>v.cat_name)
        let rightList = that.Cates[0].children
        that.setData({
          leftList,
          rightList
        })
      }
    });
  },

  handleItemTap(e){
    //获取被点击的标题身上的索引，然后给currentIndex赋值
    const {index} = e.currentTarget.dataset;
    let rightList = this.Cates[index].children
    this.setData({
      currentIndex:index,
      rightList
    })
  }
  
})