
let Reqhttp = require('../../utils/reqhttp.js');
// pages/citys/citys.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[]
  },

  // 路由跳转函数
  gocinemar(event){
    console.log(event)
    wx.navigateTo({
      // url: '/pages/cinemar/cinemar',
      url: `/pages/cinemar/cinemar?cityid=${event.target.id}`,
      // url: `/pages/cinemar/cinemar?cityid=${event.target.dataset.cityid}`,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getDataCitys = new Reqhttp();
    getDataCitys.getcitys((response)=>{
      // console.log(response,'onloaddddd');
      let {data:{citys}} = response;
      // console.log(citys,'loadddddd');  //得到数组 （611个）
      // this.setData({
      //   cityList: citys
      // })
      // console.log(this.data.cityList); //ok

      let tmp_citys = {};
      for(let i=0; i<26; i++)
      {
        let char = String.fromCharCode(65+i);
        tmp_citys[char] = [];

      
      }
      // console.log(this.data.cityList) //[]  空的

      // 开始循环 进行A B C D..数组的 push
      citys.forEach(val => {
        // console.log(val, 'evbery'); //可以得到
        tmp_citys[String(val.city_pre).toUpperCase()].push(val)


      })


      // console.log(tmp_citys); //可以得到空的 A B C D 数组
      for (let i in tmp_citys) // i => 键名
      {
        if (tmp_citys[i].length == 0)
        {
          delete tmp_citys[i]
        }
      }
      // console.log(tmp_citys); 
      this.setData({
        cityList : tmp_citys
      })
      // console.log(this.data.cityList)


    })
    
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