/*
  使用类定义：内部可有成员写法和静态写法
*/

const CITY = 'citys.php';
const CINIMARS = 'cinemas.php';
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




}

module.exports  = Reqhttp;