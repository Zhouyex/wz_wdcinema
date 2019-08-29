
let Reqhttp = require('../../utils/reqhttp.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //获取电影详情
  getmovieinfo() {
    let reqhttp = new Reqhttp();
    reqhttp.getmovieinfo((res) => {
      console.log(res, 'infooooo');
      let { data: { result } } = res
      console.log(result);
      // this.setData({
      //   movieList: lists
      // });
      // console.log(this.data.movieList, 'sd') //可以的


    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getmovieinfo();
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