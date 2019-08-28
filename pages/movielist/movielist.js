
let Reqhttp = require('../../utils/reqhttp.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currCinema:"",
    statusBarHeight:20,
    interval: 2000,
    duration: 1000,
    imgUrls:[]
  },

  getswiper(){
    let reqhttp = new Reqhttp();
    reqhttp.getswiper((res)=>{
      // console.log(res,'imgggg');
      this.setData({
        imgUrls: res.data.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取设备的navbar 那边的高度
    this.setData({
      statusBarHeight:wx.getSystemInfoSync().statusBarHeight,
      currCinema: wx.getStorageSync('currCinema')
    })
    this.getswiper();
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