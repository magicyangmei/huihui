//获取应用实例
var app = getApp();
Page({
  data: {
    banners: [],//轮播数组
    currentTab: 0,//当前tab页
    tlist:[],//分类数组
    page:1,//当前tab页的页码数
    navigate_type:'',//分类类型，是否包含二级分类
    list:[],//当前页产品数据
    noticeList:[],//公告信息
    coupons:[],//优惠券
    hasNoCoupons:true,//是否有优惠券
    hidden: true ,//加载动画显示与隐藏
    mtype:1,//加载更多动画显示类型
    slideWidth:'',//滑块宽
    slideLeft:0 ,//滑块位置
    totalLength:'',//当前滚动列表总长
    slideShow:false,
    slideRatio:'',
    storeNearKeeperInfo:'',
  },
  onLoad: function () {
    var res = {
      "code": 0,
      "data": [{
        "barCode": "rtfddggd",
        "categoryId": 4020,
        "characteristic": "",
        "commission": 324.00,
        "commissionType": 1,
        "dateAdd": "2017-11-28 16:11:55",
        "dateStart": "2017-11-28 16:11:09",
        "dateUpdate": "2019-04-07 20:15:54",
        "gotScore": 0,
        "gotScoreType": 0,
        "id": 12316,
        "kanjia": false,
        "kanjiaPrice": 0.00,
        "logisticsId": 0,
        "minPrice": 2323.00,
        "minScore": 0,
        "name": "御泥坊男士黑茶清爽控油矿物泥浆面膜去黑头祛痘收缩毛孔补水新品",
        "numberFav": 0,
        "numberGoodReputation": 0,
        "numberOrders": 0,
        "numberSells": 0,
        "originalPrice": 2332.00,
        "paixu": 0,
        "pic": "https://cdn.it120.cc/apifactory/2017/11/27/1a7732cbf3980876238753939fc35b33.jpg",
        "pingtuan": false,
        "pingtuanPrice": 0.00,
        "recommendStatus": 1,
        "recommendStatusStr": "推荐",
        "shopId": 0,
        "status": 0,
        "statusStr": "上架",
        "stores": 342324,
        "userId": 1614,
        "videoId": "",
        "views": 10602,
        "weight": 234.00,
        "distance": 300
      }, {
        "barCode": "do me care",
        "categoryId": 4020,
        "characteristic": "清洁收缩毛孔温和去黑白头",
        "commission": 10.00,
        "commissionType": 1,
        "dateAdd": "2017-11-28 14:36:14",
        "dateStart": "2017-11-28 14:27:36",
        "dateUpdate": "2019-04-07 20:15:54",
        "gotScore": 0,
        "gotScoreType": 0,
        "id": 12263,
        "kanjia": false,
        "kanjiaPrice": 0.00,
        "logisticsId": 672,
        "minPrice": 169.00,
        "minScore": 0,
        "name": "台湾欣兰黑里透白冻膜225g竹炭清洁收缩毛孔温和去黑白头面膜",
        "numberFav": 0,
        "numberGoodReputation": 0,
        "numberOrders": 0,
        "numberSells": 0,
        "originalPrice": 358.00,
        "paixu": 0,
        "pic": "https://cdn.it120.cc/apifactory/2017/11/27/b0fa611cc1382f13020b2a9b9b84c935.jpg",
        "pingtuan": false,
        "pingtuanPrice": 0.00,
        "recommendStatus": 1,
        "recommendStatusStr": "推荐",
        "shopId": 0,
        "status": 0,
        "statusStr": "上架",
        "stores": 223223,
        "userId": 1614,
        "videoId": "",
        "views": 3119,
        "weight": 0.50,
        "distance": 600
      }, {
        "barCode": "SHERO CHING",
        "categoryId": 4020,
        "characteristic": "提拉紧致",
        "commission": 20.00,
        "commissionType": 1,
        "dateAdd": "2017-11-28 14:27:32",
        "dateStart": "2017-11-28 14:15:59",
        "dateUpdate": "2019-04-07 03:48:12",
        "gotScore": 0,
        "gotScoreType": 0,
        "id": 12262,
        "kanjia": false,
        "kanjiaPrice": 0.00,
        "logisticsId": 672,
        "minPrice": 178.00,
        "minScore": 0,
        "name": "SHERO CHING",
        "numberFav": 0,
        "numberGoodReputation": 0,
        "numberOrders": 0,
        "numberSells": 0,
        "originalPrice": 168.00,
        "paixu": 0,
        "pic": "https://cdn.it120.cc/apifactory/2017/11/27/ca35e9df6e0539c55b95804957d1c86d.jpg",
        "pingtuan": false,
        "pingtuanPrice": 0.00,
        "recommendStatus": 1,
        "recommendStatusStr": "推荐",
        "shopId": 0,
        "status": 0,
        "statusStr": "上架",
        "stores": 19840,
        "userId": 1614,
        "videoId": "",
        "views": 1222,
        "weight": 0.20,
        "distance": 900
      }, {
        "barCode": "001",
        "categoryId": 4019,
        "characteristic": "无",
        "commission": 28.00,
        "commissionType": 1,
        "dateAdd": "2017-11-20 14:04:04",
        "dateStart": "2017-11-20 14:01:07",
        "dateUpdate": "2019-04-07 03:15:09",
        "gotScore": 0,
        "gotScoreType": 0,
        "id": 10974,
        "kanjia": false,
        "kanjiaPrice": 0.00,
        "logisticsId": 672,
        "minPrice": 28.00,
        "minScore": 0,
        "name": "JS-sdsosodsd",
        "numberFav": 0,
        "numberGoodReputation": 1,
        "numberOrders": 1,
        "numberSells": 0,
        "originalPrice": 28.00,
        "paixu": 0,
        "pic": "https://cdn.it120.cc/apifactory/2017/11/20/f33e041bd19699607fac208b527c6df1.jpg",
        "pingtuan": false,
        "pingtuanPrice": 0.00,
        "recommendStatus": 0,
        "recommendStatusStr": "普通",
        "shopId": 452,
        "status": 0,
        "statusStr": "上架",
        "stores": 198,
        "userId": 1614,
        "videoId": "",
        "views": 941,
        "weight": 2.00,
        "distance": 1300
      }, {
        "barCode": "0dssf",
        "categoryId": 4020,
        "characteristic": "无",
        "commission": 12.00,
        "commissionType": 1,
        "dateAdd": "2017-11-20 14:05:46",
        "dateStart": "2017-11-20 14:04:09",
        "dateUpdate": "2019-04-07 03:11:09",
        "gotScore": 0,
        "gotScoreType": 0,
        "id": 10975,
        "kanjia": false,
        "kanjiaPrice": 0.00,
        "logisticsId": 672,
        "minPrice": 19.90,
        "minScore": 0,
        "name": "asdsaasddsads",
        "numberFav": 0,
        "numberGoodReputation": 0,
        "numberOrders": 0,
        "numberSells": 0,
        "originalPrice": 20.00,
        "paixu": 1,
        "pic": "https://cdn.it120.cc/apifactory/2017/11/20/9d1f9026a41a07350eee9fcaeb2dc3e7.jpg",
        "pingtuan": false,
        "pingtuanPrice": 0.00,
        "propertyIds": ",1302,",
        "recommendStatus": 0,
        "recommendStatusStr": "普通",
        "shopId": 0,
        "status": 0,
        "statusStr": "上架",
        "stores": 20,
        "userId": 1614,
        "videoId": "",
        "views": 898,
        "weight": 0.20,
        "distance": 1300
      }, {
        "barCode": "24343",
        "categoryId": 4021,
        "characteristic": "商品特色商品特色商品特色",
        "commission": 2.00,
        "commissionType": 2,
        "dateAdd": "2017-11-20 14:22:08",
        "dateStart": "2017-11-20 14:20:12",
        "dateUpdate": "2019-04-06 17:39:14",
        "gotScore": 0,
        "gotScoreType": 0,
        "id": 10977,
        "kanjia": false,
        "kanjiaPrice": 0.00,
        "logisticsId": 672,
        "minPrice": 199.00,
        "minScore": 0,
        "name": "3223434",
        "numberFav": 0,
        "numberGoodReputation": 0,
        "numberOrders": 0,
        "numberSells": 0,
        "originalPrice": 200.00,
        "paixu": 2,
        "pic": "https://cdn.it120.cc/apifactory/2017/11/20/91e6161d8ac8d3b4cecbaf65359a1dba.jpg",
        "pingtuan": false,
        "pingtuanPrice": 0.00,
        "propertyIds": ",1302,",
        "recommendStatus": 0,
        "recommendStatusStr": "普通",
        "shopId": 0,
        "status": 0,
        "statusStr": "上架",
        "stores": 20,
        "userId": 1614,
        "videoId": "",
        "views": 976,
        "weight": 4.00,
        "distance": 1500
      }],
      "msg": "success"
    };
    this.setData({
      list:res.data
    })

  },
  //根据分类获取比例
  getRatio(){
   
  } ,
  //获取公告列表
  getNoticeList:function(){
     
  },
  //获取优惠券列表
  getCoupons:function(){
    
  },
  //点击领取优惠券
  gitCoupon(e){
    
  },
  //获取轮播图片
  getBanners(){
     
  },
  //下拉刷新
  onPullDownRefresh: function () {
     
  },
  //   该方法绑定了页面滑动到底部的事件
  onReachBottom: function () {
     
  },
  product_detail: function (e) {
    console.log('查看详情')
    var _id = e.currentTarget.dataset.id ;
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  }
})
