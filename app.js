//app.js
App({
  onShow:function(options){
    console.log(options);
  },
  onHide(){
    console.log('hide');
  },
  getUserInfo:function(cb){
  },
  globalData:{
    userInfo:null,
    baseUrl:'https://api.it120.cc/jy02149522',
    baseUrlym:'https://api.it120.cc/ymall',
    version: "1.7",
    token:'',
    shareProfile: '百款精品商品，总有一款适合您', // 首页转发的时候话术
    navigate_type:1,
    tlist:[],
    storeNearKeeper:'',
    searchLoaction:false
  },
  dateToObj(dateObj){
    return JSON.parse(JSON.stringify(dateObj))
  },
  onLaunch: function () {
    var that = this;
    //  获取商城名称
    wx.request({
      url:  that.globalData.baseUrl +'/config/get-value',
      data: {
        key: 'mallName'
      },
      success: function(res) {
        if (res.data.code == 0) {
          wx.setStorageSync('mallName', res.data.data.value);
        }
      }
    })
    this.login();
    this.getTlist();
  },
  login : function () {
    var that = this;
    var token = that.globalData.token;
    if (token) {
      wx.request({
        url: that.globalData.baseUrl + '/user/check-token',
        data: {
          token: token
        },
        success: function (res) {
          if (res.data.code != 0) {
            that.globalData.token = null;
            that.login();
          }
        }
      })
      return;
    }
    wx.login({
      success: function (res) {
        wx.request({
          url:that.globalData.baseUrl +'/user/wxapp/login',
          data: {
            code: res.code
          },
          success: function(res) {
            if (res.data.code == 10000) {
              // 去注册
              that.registerUser();
              return;
            }
            if (res.data.code != 0) {
              // 登录错误
              wx.hideLoading();
              wx.showModal({
                title: '提示',
                content: '无法登录，请重试',
                showCancel:false
              })
              return;
            }
            that.globalData.token = res.data.data.token;
            that.globalData.uid = res.data.data.uid;
          }
        })
      }
    })
  },
  registerUser: function () {
    var that = this;
    wx.login({
      success: function (res) {
        var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
        wx.getUserInfo({
          success: function (res) {
            var iv = res.iv;
            var encryptedData = res.encryptedData;
            // 下面开始调用注册接口
            wx.request({
              url:  that.globalData.baseUrl +'/user/wxapp/register/complex',
              data: {code:code,encryptedData:encryptedData,iv:iv}, // 设置请求的 参数
              success: (res) =>{
                wx.hideLoading();
                that.login();
              }
            })
          }
        })
      }
    })
  },
  sendTempleMsg: function (orderId, trigger, template_id, form_id, page, postJsonString){
    var that = this;
    wx.request({
      url: that.globalData.baseUrl + '/template-msg/put',
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: that.globalData.token,
        type:0,
        module:'order',
        business_id: orderId,
        trigger: trigger,
        template_id: template_id,
        form_id: form_id,
        url:page,
        postJsonString: postJsonString
      },
      success: (res) => {
        //console.log('*********************');
        //console.log(res.data);
        //console.log('*********************');
      }
    })
  },
  //获取类别列表
  getTlist() {
    var self = this;
    wx.request({
      url: self.globalData.baseUrl + '/shop/goods/category/all',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //划分分类
        var resCategory={
          "code": 0,
          "data": [{
            "dateAdd": "2017-11-16 15:21:37",
            "icon": "",
            "id": 4019,
            "isUse": true,
            "key": "0",
            "level": 1,
            "name": "超市",
            "paixu": 0,
            "pid": 0,
            "type": "0",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-16 15:32:13",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/13/016fa7b91d5c8d35d45e1af64c0124b2.png",
            "id": 4020,
            "isUse": true,
            "key": "00",
            "level": 2,
            "name": "热销0",
            "paixu": 0,
            "pid": 4019,
            "type": "00",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-16 15:32:47",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/13/e7cfe993ad4fee74c22d7c3c5cf908fb.png",
            "id": 4021,
            "isUse": true,
            "key": "01",
            "level": 2,
            "name": "热销1",
            "paixu": 1,
            "pid": 4019,
            "type": "01",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-16 15:37:43",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/13/2dd9076ad493d920a59df307c3ba0729.png",
            "id": 4022,
            "isUse": true,
            "key": "02",
            "level": 2,
            "name": "热销2",
            "paixu": 2,
            "pid": 4019,
            "type": "02",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-16 15:38:54",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/13/471ee7d7a75de7fc5b9aaafd64c1c036.png",
            "id": 4023,
            "isUse": true,
            "key": "03",
            "level": 2,
            "name": "热销3",
            "paixu": 3,
            "pid": 4019,
            "type": "03",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-16 15:39:45",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/13/fd894fe376cce4b3066b8a3f26be679f.png",
            "id": 4024,
            "isUse": true,
            "key": "04",
            "level": 2,
            "name": "热销4",
            "paixu": 4,
            "pid": 4019,
            "type": "04",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-16 15:40:42",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/13/9299b30603384e107ef043bfb748c395.png",
            "id": 4025,
            "isUse": true,
            "key": "05",
            "level": 2,
            "name": "热销5",
            "paixu": 5,
            "pid": 4019,
            "type": "05",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-16 15:41:47",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/13/c67680b925f3337d1a3f620f61cdbd8a.png",
            "id": 4026,
            "isUse": true,
            "key": "06",
            "level": 2,
            "name": "热销6",
            "paixu": 6,
            "pid": 4019,
            "type": "06",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-17 09:29:44",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/17/f37c763a3e2f5ea865fc559714ddbe32.png",
            "id": 4049,
            "isUse": true,
            "key": "07",
            "level": 2,
            "name": "热销7",
            "paixu": 7,
            "pid": 4019,
            "type": "07",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-17 09:30:21",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/17/637bf435b55faac1def00c97b25387ee.png",
            "id": 4050,
            "isUse": true,
            "key": "08",
            "level": 2,
            "name": "热销8",
            "paixu": 8,
            "pid": 4019,
            "type": "08",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-17 09:31:14",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/17/25401590eeff2e9d51f81dad80fe82cd.png",
            "id": 4051,
            "isUse": true,
            "key": "09",
            "level": 2,
            "name": "热销9",
            "paixu": 9,
            "pid": 4019,
            "type": "09",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-17 10:37:22",
            "icon": "https://cdn.it120.cc/apifactory/2017/11/17/ec399bf0af49270b89dafbad20d44cc8.png",
            "id": 4052,
            "isUse": true,
            "key": "010",
            "level": 2,
            "name": "热销10",
            "paixu": 10,
            "pid": 4019,
            "type": "010",
            "userId": 1614
          }, {
            "dateAdd": "2017-10-23 00:59:29",
            "icon": "https://cdn.it120.cc/apifactory/2017/10/20/9f1c2a82d914ad4f775aeba145e3e573.jpg",
            "id": 2933,
            "isUse": true,
            "key": "1",
            "level": 1,
            "name": "美发",
            "paixu": 1,
            "pid": 0,
            "type": "1",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-06 09:43:26",
            "icon": "",
            "id": 3575,
            "isUse": true,
            "key": "2",
            "level": 1,
            "name": "餐饮",
            "paixu": 2,
            "pid": 0,
            "type": "2",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-06 09:43:46",
            "icon": "",
            "id": 3576,
            "isUse": true,
            "key": "3",
            "level": 1,
            "name": "医疗",
            "paixu": 3,
            "pid": 0,
            "type": "3",
            "userId": 1614
          },  {
            "dateAdd": "2017-11-07 09:19:50",
            "icon": "",
            "id": 3608,
            "isUse": true,
            "key": "5",
            "level": 1,
            "name": "养车",
            "paixu": 5,
            "pid": 0,
            "type": "5",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-28 14:12:18",
            "icon": "",
            "id": 4467,
            "isUse": true,
            "key": "6",
            "level": 1,
            "name": "果蔬",
            "paixu": 6,
            "pid": 0,
            "type": "6",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-28 14:12:29",
            "icon": "",
            "id": 4468,
            "isUse": true,
            "key": "7",
            "level": 1,
            "name": "教育",
            "paixu": 7,
            "pid": 0,
            "type": "7",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-28 14:12:40",
            "icon": "",
            "id": 4469,
            "isUse": true,
            "key": "8",
            "level": 1,
            "name": "其他",
            "paixu": 8,
            "pid": 0,
            "type": "8",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-28 14:12:51",
            "icon": "",
            "id": 4470,
            "isUse": true,
            "key": "9",
            "level": 1,
            "name": "分类9",
            "paixu": 9,
            "pid": 0,
            "type": "9",
            "userId": 1614
          }, {
            "dateAdd": "2017-11-28 14:13:05",
            "icon": "",
            "id": 4471,
            "isUse": true,
            "key": "10",
            "level": 1,
            "name": "分类10",
            "paixu": 10,
            "pid": 0,
            "type": "10",
            "userId": 1614
          }],
          "msg": "success"
        }
        // var _data = res.data.data, _tlist = [];
        var _data = resCategory.data, _tlist = [];
         console.log(res)
        // var _tlist = [];
        //选出一级分类，放入firstType
        for (var x in _data) {
          if (_data[x].pid == 0) {
            _tlist.push({
              firstType: _data[x],
              second: []
            })
          }
          //判断是否存在二级分类
          if (self.globalData.navigate_type == 1 && _data[x].pid != 0){
            self.globalData.navigate_type = 2 ;
          }
        }
        //如果存在二级分类
        if (self.globalData.navigate_type == 2 ){
          //选出二级分类，放入对应的secondList
          for (var x in _data) {
            for (var y in _tlist) {
              if (_data[x].pid == _tlist[y].firstType.id) {
                _tlist[y].second.push(_data[x]);
              }
            }
          }
          //整理二级分类
          for (var x in _tlist) {
            //两行显示
            if (_tlist[x].second.length >= 10) {
              var _slist = _tlist[x].second;
              _tlist[x].secondList = [];
              _tlist[x].thirdList = [];
              for (var y in _slist) {
                if (y % 2) {
                  _tlist[x].thirdList.push(_slist[y]);
                } else {
                  _tlist[x].secondList.push(_slist[y]);
                }
              }
            }
          }
        }else{
          _tlist[0].secondList = [];
          _tlist[0].thirdList = [];
          for (var x in _tlist) {
            //两行显示
            if (_tlist.length >= 10) {
              if (x % 2) {
                _tlist[0].thirdList.push(_tlist[x].firstType);
              } else {
                _tlist[0].secondList.push(_tlist[x].firstType);
              }
            }else{
              _tlist[0].secondList.push(_tlist[x].firstType);
            }
          } 
        }
        self.globalData.tlist = _tlist;
      }
    })
  }
})