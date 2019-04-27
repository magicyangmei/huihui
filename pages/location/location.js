//Page Object
Page({
    data: {
        storeInfo:[{
            avatar:'../../assets/imgs/location/portrait.jpeg',
            storeName:'万科城二期社区',
            address:'吉林省，长春市，南关区，天府路万科城二期28栋1405号',
            storeKeeper:'晓晓',
            distance:'距离400米'
        },{
            avatar:'../../assets/imgs/location/portrait2.jpeg',
            storeName:'万科城一期社区',
            address:'吉林省，长春市，南关区，天府路万科城二期28栋1405号',
            storeKeeper:'大大',
            distance:'距离900米'
        },{
            avatar:'../../assets/imgs/location/portrait3.jpeg',
            storeName:'中海国际社区',
            address:'吉林省，长春市，南关区，天府路万科城二期28栋1405号',
            storeKeeper:'胖胖',
            distance:'距离1400米'
        },{
            avatar:'../../assets/imgs/location/portrait.jpeg',
            storeName:'万科城二期社区',
            address:'吉林省，长春市，南关区，天府路万科城二期28栋1405号',
            storeKeeper:'杰杰',
            distance:'距离2400米'
        }],
        storeStaff:{
            avatar:'../../assets/imgs/location/portrait.jpeg',
            storeName:'万科城二期社区',
            address:'吉林省，长春市，南关区，天府路万科城二期28栋1405号',
            storeKeeper:'晓晓',
            distance:'距离400米'
        }
    },
    //options(Object)
    onLoad: function(options){
       
    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    },
    //search
    goSearch(e){
        var app = getApp();
        app.globalData.searchLoaction = true;
        wx.navigateTo({
            url: "/pages/search/index"
        });
    },
    goToStore(e){
        var app = getApp();        
        var index=e.currentTarget.dataset.index;
        app.globalData.storeNearKeeper =  this.data.storeInfo[index];
        wx.switchTab({
               url: "/pages/index/index"
        });
    },
    goToleagueStore(e){
        var app = getApp();        
        app.globalData.storeNearKeeper =  this.data.storeStaff;
        wx.switchTab({
               url: "/pages/index/index"
        });
    }
});