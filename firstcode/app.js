App({

 onLaunch(){
   console.log(this.fn()) 
   console.log(this.userinfo)
   console.log("onlaunch","小程序初始化")
 },
 onShow(){
  console.log("onShow","监听小程序切前台或者启动")
},
 onHide(){
   console.log("onhide","小程序隐藏或切后台")
 },

onError(error){
  console.log("报错",error)
},
onPageNotFound(){
  console.log("页面找不到")
  wx.switchTab({
    url: '/pages/index/index',
  })
},
// any  函数
fn(){
  return "我是fn函数"
},
fn1(){

},
// any  对象
userinfo:{
  name:"admin",
  age:"18"
},

name:"root"



})