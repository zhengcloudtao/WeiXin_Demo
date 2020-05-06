//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['柳园饭堂', '教工饭堂', '南门饭堂', '民族风味饭堂'],
    array1: ['饭一-锦园第一饭堂', '饭二-锦园第二饭堂', '教工饭堂', '小食街'],
    index: 0,
    index1: 0,
   
    currentTab: 0,
  },
  onLoad: function(t) {
    wx.setStorageSync('c',0)
  
},
  clickTab: function(t) {
    var that = this
    console.log('picker发送选择改变，携带值为', t.target.dataset.current)
    this.setData({
      currentTab: t.target.dataset.current
  })
  wx.setStorageSync('c',t.target.dataset.current)
  if(t.target.dataset.current==2)
  {
    wx.request({
      url: 'https://ancientcloud.club/szpt191',
    
      data: {
  
       c: wx.getStorageSync('c')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.status)
        that.setData({
          list2: res.data.data,
        })
      }
    }) 
  }
 
},
bindPickerChange: function(e) {
  var that = this
  console.log('picker发送选择改变，携带值为', e.detail.value)
  if(wx.getStorageSync('c')==0){
  this.setData({
    index: e.detail.value,
  
  })


  wx.request({
    url: 'https://ancientcloud.club/szpt191',
  
    data: {
     type:  e.detail.value,
     c: wx.getStorageSync('c')
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      console.log(res.data)
      that.setData({
        list0: res.data.data,
      })
    }
  })


}
  if(wx.getStorageSync('c')==1){
    this.setData({
      index1: e.detail.value,
    
    })
  
  
    wx.request({
      url: 'https://ancientcloud.club/szpt191',
    
      data: {
       type:  e.detail.value,
       c: wx.getStorageSync('c')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list1: res.data.data,
        })
      }
    })
  
  
  
  
  
  }

    if(wx.getStorageSync('c')==2){
      wx.request({
        url: 'https://ancientcloud.club/szpt191',
      
        data: {
    
         c: wx.getStorageSync('c')
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data.status)
          that.setData({
            list2: res.data.data,
          })
        }
      }) 
    }
  console.log('值为',   wx.getStorageSync('c'))


},

})
