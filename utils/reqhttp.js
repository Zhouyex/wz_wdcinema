/*
  使用类定义：内部可有成员写法和静态写法
*/

const CITY = 'citys.php';
const CINIMARS = 'cinemas.php';
const SWIPER = "getSwiper.php";
const MOVIE_LIST = "cinemasmovies.php";
const MOVIE_INFO = "movieInfo.php";

class Reqhttp{
  constructor()
  {
    this.baseUrl = "https://www.bestqingshan.top/movie/"
  }

  common(req_name,data,callback){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: `${this.baseUrl}${req_name}`,
      data,
      success(response){
        callback(response);
      },
      fail(error){
        callback(error);
      },
      complete(){
        wx.hideLoading();
      }
    
    })
  }

  getcitys(callback){
    this.common(CITY,{},(response)=>{
        callback(response)
    });
  }

  getcimemars(page,callback) {
    this.common(CINIMARS,{page,size:10},(response) => {
      callback(response)

    });
  }

  getswiper(callback) {
    this.common(SWIPER, {}, (response) => {
      callback(response)

    });
  }

  getmovies(callback) {
    this.common(MOVIE_LIST, {}, (response) => {
      callback(response)

    });
  }

  getmovieinfo(callback) {
    this.common(MOVIE_INFO, {}, (response) => {
      callback(response)

    });
  }





}

module.exports  = Reqhttp;