// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList:['春秋被子'],
    hotList:['被子春秋','春秋椅垫','女加厚内衣','女睡衣春秋','月子服厚','学生被子冬季','门帘子冬天','加厚运动装女'],
    searchStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var app = getApp();
     var searchStatus = app.globalData.searchLoaction;
     this.setData({
      searchStatus: searchStatus
     })
     console.log(searchStatus,'searchStatus')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})