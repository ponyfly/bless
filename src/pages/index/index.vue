<template>
  <div class="container">
    <div class="themes" v-if="isHomeChecked">
      <div class="item-wrap">
        <img class="theme-item" src="../../../static/images/theme-1@2x.png" alt="">
      </div>
      <div class="item-wrap">
        <img class="theme-item" src="../../../static/images/theme-2@2x.png" alt="">
      </div>
      <div class="item-wrap">
        <img class="theme-item" src="../../../static/images/theme-3@2x.png" alt="">
      </div>
      <div class="item-wrap">
        <img class="theme-item" src="../../../static/images/theme-4@2x.png" alt="">
      </div>
      <div class="item-wrap">
        <img class="theme-item" src="../../../static/images/theme-4@2x.png" alt="">
      </div>
      <div class="item-wrap">
        <img class="theme-item" src="../../../static/images/theme-4@2x.png" alt="">
      </div>
      <div class="item-wrap">
        <img class="theme-item" src="../../../static/images/theme-4@2x.png" alt="">
      </div>
    </div>
    <div class="join-list" v-else>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/images/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/images/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/images/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/images/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/images/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
    </div>
    <div class="tabbar">
      <img class="tabbar-bg" src="../../../static/images/bg-bottom@2x.png" alt="">
      <div class="tabbar-content" @click="switchTab">
        <div class="home" :class="isHomeChecked ? 'checked' : 'unchecked'" data-id="0"></div>
        <div class="myjoin" :class="isHomeChecked ? 'unchecked' : 'checked'" data-id="1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      isHomeChecked: true
    }
  },

  components: {
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    switchTab(e) {
      const dataId = parseInt(e.target.dataset.id)
      if(dataId === 0 && !this.isHomeChecked) {
        this.isHomeChecked = true
      } else if (dataId === 1 && this.isHomeChecked) {
        this.isHomeChecked = false
      }
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    width: 100%;
    height: 100%;
    background: url("../../../static/images/bg-home.png") repeat-y;
    background-size: 100%;
    .themes
      display: flex;
      flex-wrap: wrap;
      justify-content:flex-start;
      .item-wrap
        flex:0 0 50%
        display flex
        justify-content center
        .theme-item
          width: 320rpx;
          height: 460rpx;
          margin: 30rpx 0 20rpx;
          box-shadow: 6rpx 2rpx 10rpx 4rpx rgba(0, 0, 0, .4)
    .join-list
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .item-wrap
        flex:0 0 50%
        display flex
        justify-content center
        .join-item
          width 320rpx
          height 503rpx
          margin: 30rpx 0 20rpx;
          box-shadow: 6rpx 2rpx 10rpx 4rpx rgba(0, 0, 0, .4)
          background-color #f7f2f0
          border-radius 8rpx
          border-top-left-radius 0
          display flex
          flex-direction column
          .content
            width:320rpx
            height:431rpx
            .bg-video
              width:100%
              height:100%
              border-top-right-radius 8rpx
          .theme-title
            flex: 1
            display flex
            justify-content center
            align-items center
    .tabbar
      width: 100%;
      height: 215rpx;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 999
      .tabbar-bg
        width: 100%;
        height: 100%;
      .tabbar-content
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top:86rpx;
        box-sizing border-box
        .home
          width:82rpx;
          height:64rpx;
          &.checked
            background url("../../../static/images/checked-home@2x.png") no-repeat
            background-size cover
          &.unchecked
            background url("../../../static/images/unchecked-home@2x.png") no-repeat
            background-position 2.5rpx 0
            background-size 76rpx 42rpx
        .myjoin
          width:149rpx;
          height:64rpx;
          &.checked
            background url("../../../static/images/checked-myjoin@2x.png") no-repeat
            background-size cover
          &.unchecked
            background url("../../../static/images/unchecked-myjoin@2x.png") no-repeat
            background-size 149rpx 43rpx
</style>
