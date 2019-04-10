import { Main } from "../../models/main.js"
let main = new Main();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: [],
    boolean: false,
    proNum: null,
    opeNum: null,
    range1: null,
    range2: null,
    ifopr: true,
    answer:[],
    sele:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  EventHandle:function(){
    
  },
  answer: function (e) {

    var val = e.detail.value
    this.data.answer.push(val);
    console.log(this.data.answer);
  },
  onLoad: function (options) {
    this.setData({
      boolean: options.boolean,
      proNum: options.proNum,
      opeNum: options.opeNum,
      range1: options.range1,
      range2: options.range2,
      ifopr: options.ifopr
    })
    if (this.data.boolean) {

      var ex = main.getArith(this.data.proNum, this.data.opeNum, this.data.range1, this.data.range2, this.data.ifopr,this.data.sele);
      
      this.setData({
        classic: ex
      })

    }
    
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