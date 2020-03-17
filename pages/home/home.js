// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: 'world' ,   //''中为字符串类型
        age: 18,           //不加''的数字为number类型
        movies:[
            { id: 100, name :'love', time:1},
            { id: 101, name: 'death', time: 2 },
            { id: 102, name: 'happy', time: 3 },
            { id: 103, name: 'sad', time: 4 }
        ],
        tim:0
    },
    dianjiadd(){
        this.setData({
            tim: this.data.tim + 1
        })
        console.log('按钮被点击')
    },
    // 按钮点击增加函数
    dianjicut() {
        this.setData({
            tim: this.data.tim - 1
        })
        console.log('按钮被点击')
    },
    // 按钮点击减少函数

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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