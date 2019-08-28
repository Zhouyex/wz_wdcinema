
let Reqhttp = require('../../utils/reqhttp.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currCity:'',
    currpage:1,
    totlapage:0,
    cenimars:[]
  },

  // 获取电影院们
  getcenimar(page){
    let getCenimaerData = new Reqhttp();
    getCenimaerData.getcimemars(page,(res) => {
      // console.log(res); //可以拿到数据
      let { data: { data, totalpage}} = res;
      // console.log(data,'dataaaaa');
      // console.log(totalpage)
      // 拼合 数据
      let tmp_cenimars = [];
      tmp_cenimars = tmp_cenimars.concat(this.data.cenimars,data);
      this.setData({
        currpage:this.data.currpage + 1,
        totalpage,
        cenimars: tmp_cenimars
      })
      // console.log(this.data.cenimars,'dataaaaa')
    })
  },

  // 编程式导航 到电影列表 的页面 movielist
  gotomovielist: function(event)
  {
      // console.log(1) //可以
      // console.log(event);
      // 拿到电影名称
      // console.log(event.currentTarget.dataset.currcinemainfo.cinemaName);
      // 存储当前点击的影院名称
      wx.setStorageSync('currCinema', event.currentTarget.dataset.currcinemainfo.cinemaName)

      wx.navigateTo({
        url: '/pages/movielist/movielist'
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options) //拿到点击城市传过来的值
    this.getcenimar(this.data.currpage);
    // 异步 一开始可还没 数据呢 []
    // console.log(this.data.cenimars,'ccccc')

    // 获取从城市们 页面点击过来的 城市名字
    this.setData({
      currCity: wx.getStorageSync('clickCity')
    })
    // wx.getStorage({
    //   key: 'clickCity',
    //   success(res) {
    //     console.log(res.data,'成功gggggg');
    //     // console.log(this);
    //     // this.setData({
    //     //   currCity: res.data
    //     // })
    //   }
    // });
 

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
    if(this.data.currpage >9)
    {
      wx.showToast({
        title: '已经没有数据了',
      })
      return;
    }
    this.getcenimar(this.data.currpage);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})