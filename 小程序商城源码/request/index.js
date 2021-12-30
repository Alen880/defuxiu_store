//同时发送异步代码的次数
let ajaxTime = 0;
// 用es6的promise来优化wx-request请求参数方法
export const request=(params)=>{
  ajaxTime++;
  //显示加载中效果
  wx.showLoading({
    title: '加载中',
    mask:true
  });
  // 定义公共的url
  const baseUrl = "https://defuxiu.com"
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      },
      complete:()=>{
        ajaxTime--;
        if(ajaxTime===0){
          wx.hideLoading();
        }
      }
    })
  })
}