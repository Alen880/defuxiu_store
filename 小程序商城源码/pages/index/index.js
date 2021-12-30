// 引入用来发送请求的方法
import {request} from "../../request/index.js";

var app = getApp()
var API = require('api.js')

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

    /*
    1 线判断一下本地存储中有没有旧的数据
    2 没有旧数据 直接发送新请求
    3 有旧的数据 同时 旧的数据也没有过期 就使用 本地存储中的旧数据即可
    */

    //1 获取本地存储中的数据
    const Cates = wx.getStorageSync('cates');
    //2 判断 
    if(!Cates){
      //不存在 发送请求获取数据
      this.getCates();
    }
    else{
      //有旧的数据 定义过期时间 暂时定义10s
      if(Date.now()-Cates.time>1000*10){
        this.getCates();
      }
      else{
        //可以使用旧的数据
        this.Cates = Cates.data;
        let leftList = this.Cates.map(v=>v.cat_name)
        let rightList = this.Cates[0].children
        this.setData({
          leftList,
          rightList
        })
      }
    }    
  },
  getCates(){
    var that = this
    // 使用 Mock
    API.ajax({
      data:'',
      fn: function (res) {
        //这里可以获取模拟的res
        console.log(res)
        that.Cates = res.message

        //把接口的数据存入到本地存储中
        wx.setStorageSync('cates', {time:Date.now(),data:that.Cates});

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