// component/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    click:{
      type:Boolean
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    clicked:"images/clicked.png",
    unclicked:"images/unclicked.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onclick:function(event){
      this.setData({
        click:!this.data.click
      })
      this.triggerEvent('eventListener', { click:this.data.click })
    }
  }
})
