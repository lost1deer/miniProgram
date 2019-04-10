import {Main} from "../../models/main.js"

let main = new Main();
// pages/ArithmeticOperation/ArithmeticOperation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:[],
    boolean:false,
    proNum:null,
    opeNum:null,
    range1:null,
    range2:null,
    ifopr:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  EventHandle: function () {
    
    var bool = this.data.boolean;
    this.setData({
      boolean: !bool
    })
    // if(this.data.boolean){
      
    //   var ex = main.getArith(this.data.proNum,this.data.opeNum,this.data.range1,this.data.range2,this.data.ifopr);
    //   this.setData({
    //     classic: ex
    //   })
      
    // }
    

  },
  onClick:function(e){
    this.setData({
      ifopr:!e.detail.click
    })
    console.log(this.data.ifopr);
  },
  input1: function (e) {
      
        var val = e.detail.value
        this.setData({ 
          proNum: val
        })
      
      
        
      
    
  },
  input2: function (e) {
    
      
      var val = e.detail.value
      this.setData({
        opeNum: e.detail.value
      })

    
  }, 
  range1: function (e) {
    
    
      var val = e.detail.value
      this.setData({
        range1: val
      })

    

    
  }, 
  range2: function (e) {
    
      var val = e.detail.value
      this.setData({
        range2: val
      })

    
  },

  onLoad: function (options) {
    
    // var ex = main.getArith(10);
    // this.setData({
    //   classic: ex
    // })
    
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