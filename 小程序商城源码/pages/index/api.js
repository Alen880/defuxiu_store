let DEBUG = true;//切换数据入口
var Mock = require('../../utils/mock.js')
function ajax(
    params = {
      url: "http://defuxiu.com/defuxiu_data",
      data: '',
      fn: function(){},
      method: "get",
      header: {}
  }
) {
    if (!DEBUG) {
        wx.request({
            url: params.url + params.data,
            method: params.method ? params.method : 'get',
            data: {},
            header: params.header ? params.header : { "Content-Type": "application/json" },
            success: function (res) {
              params.fn(res);
            }
        });
    } else {
        // 模拟数据
        var res = Mock.mock({
          "message": [
            {
                "cat_id": 1,
                "cat_name": "N族|逆龄抗衰",
                "cat_deleted": false,
                "children": [
                    {                 
                      "id": 1,
                      "cat_name": "德肤修N1",
                      "cat_name_detail":"活颜亮采爽肤水",
                      "cat_price":"590",
                      "cat_deleted": false,
                      "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/N1.jpg"                      
                    },
                    {
                      "id": 2,
                      "cat_name": "德肤修N3",
                      "cat_name_detail":"VC多肽紧肤乳",
                      "cat_price":"900",
                      "cat_deleted": false,
                      "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/N3.jpg" 
                    },
                    {
                      "id": 3,
                      "cat_name": "德肤修N4",
                      "cat_name_detail":"积雪草紧致劲霜",
                      "cat_price":"380",
                      "cat_deleted": false,
                      "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/N4.jpg" 
                    },
                    {
                      "goods_id": 4,
                      "cat_name": "德肤修N1+M1",
                      "cat_name_detail":"控油抑痘修护套装",
                      "cat_price":"1390",
                      "cat_deleted": false,
                      "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/N1M1.jpg" 
                    },
                    {
                      "id": 5,
                      "cat_name": "德肤修N1+D1",
                      "cat_name_detail":"提亮逆龄套装",
                      "cat_price":"1650",
                      "cat_deleted": false,
                      "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/N1D1.jpg" 
                    }
                ]
            },
            {
              "cat_id": 2,
              "cat_name": "K族|抗油祛痘",
              "cat_deleted": false,
              "children": [
                  {                 
                    "id": 6,
                    "cat_name": "德肤修K1",
                    "cat_name_detail":"净颜清透活肤水",
                    "cat_price":"390",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/K1.jpg"                      
                  },
                  {
                    "id": 7,
                    "cat_name": "德肤修",
                    "cat_name_detail":"平衡清透乳",
                    "cat_price":"800",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/平衡清透乳.jpg" 
                  },
              ]
            },
            {
              "cat_id": 3,
              "cat_name": "D族|淡斑美白",
              "cat_deleted": false,
              "children": [
                  {                 
                    "id": 8,
                    "cat_name": "德肤修D1",
                    "cat_name_detail":"肌透净颜精华乳",
                    "cat_price":"1060",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/D1.jpg"                      
                  },
                  {
                    "id": 9,
                    "cat_name": "德肤修N1+D1",
                    "cat_name_detail":"提亮逆龄套装",
                    "cat_price":"1650",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/N1D1.jpg" 
                  }
              ]
            },
            {
              "cat_id": 4,
              "cat_name": "M族|敏感维护",
              "cat_deleted": false,
              "children": [
                  {                 
                    "id": 10,
                    "cat_name": "德肤修M1",
                    "cat_name_detail":"多效舒护精华液",
                    "cat_price":"800",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/M1.jpg"                      
                  },
                  {
                    "d": 11,
                    "cat_name": "德肤修M2",
                    "cat_name_detail":"多肽密集修复精华液",
                    "cat_price":"1200",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/M2.jpg" 
                  }
              ]
            },
            {
              "cat_id": 5,
              "cat_name": "B族|保湿滋润",
              "cat_deleted": false,
              "children": [
                  {                 
                    "id": 12,
                    "cat_name": "德肤修B1",
                    "cat_name_detail":"恒温保湿精华露",
                    "cat_price":"1200",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/B1.jpg"                      
                  },
                  {
                    "id": 13,
                    "cat_name": "德肤修B2",
                    "cat_name_detail":"特护肌透精华乳",
                    "cat_price":"900",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/B2.jpg"
                  },
                  {
                    "id": 14,
                    "cat_name": "德肤修",
                    "cat_name_detail":"舒润精华乳",
                    "cat_price":"580",
                    "cat_deleted": false,
                    "cat_icon": "cloud://cloud1-9gn26d8ub8703759.636c-cloud1-9gn26d8ub8703759-1307439895/goods_imgs/舒润精华乳.jpg"
                  }
              ]
            }
          ]
        })
       params.fn(res);
    }
}
module.exports = {
    ajax: ajax
}