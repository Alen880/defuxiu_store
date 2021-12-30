// pages/goods_datail/index.js
import {request} from "../../request/index.js";

var app = getApp()
var API = require('api.js')

Page({
	data: {
		goodsObj:{}
	},
	onLoad: function (options) {
		const {goods_id}=options;
		this.getGoodsDetail(goods_id);
	},
	onShow:function(){
		wx.hideHomeButton({})
		wx.navigateTo({
			url: '../index/index'
		})
	},
	getGoodsDetail(goods_id){
		var that = this
		// 使用 Mock
		API.ajax({
		data:'',
		fn: function (res) {
			//这里可以获取模拟的res
			console.log(goods_id)
			that.setData({
				//将res中goods_id=goods_id的对象赋给goodsObj
				goodsObj:res.message.filter((value) =>(String(value.id)===String(goods_id)))[0]
			})
		}
		});
	}
})