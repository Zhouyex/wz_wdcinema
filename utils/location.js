// 引入SDK核心类
var QQMapWX = require('../public/qqmap-wx-jssdk.min.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: '6CLBZ-L77C4-YBQUX-DN7WD-UQM2K-P2BJJ'
});

// 获取地理位置  就是经纬度（wx API）
function getloc(callback)
{
  wx.getLocation({
    type: 'wgs84',
    success(res) {
      // 在res中取得坐标
      console.log(res)

      const latitude = res.latitude
      const longitude = res.longitude

      // 调用下个方法
      loc(callback, { latitude, longitude})

    }
  })
}


function loc(callback, { latitude, longitude}){
  // 逆地址解析 经纬度==》位置
  qqmapsdk.reverseGeocoder({
    //位置坐标，默认获取当前位置，非必须参数
    
     //Object格式
      location: {
        latitude,
        longitude
      },
    /**
     //String格式
      location: '39.984060,116.307520',
    */
    success: function (res) {//成功后的回调
      // console.log(res);
      callback(res)
    },
    fail: function (error) {
      // console.error(error);
      callback(error)
    }
    // complete: function (res) {
    //   console.log(res);
    // }
  })
}

module.exports = getloc;
   

