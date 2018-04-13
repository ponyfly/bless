<template>
  <div class="container">
    <div class="themes" v-if="isHomeChecked" @click="goToWriteTheme">
      <div class="item-wrap" v-for="item in wishTemplates" :key="item.wishTemplateId">
        <img class="theme-item" :src="item.wishCoverUrl" :data-id="item.wishTemplateId" alt="">
      </div>
    </div>
    <div class="join-list" v-else>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/img/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/img/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/img/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/img/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="join-item">
          <div class="content">
            <img class="bg-video" src="../../../static/img/bg-video.png" alt="">
          </div>
          <div class="theme-title">完末生日祝愿</div>
        </div>
      </div>
    </div>
    <div class="tabbar">
      <img class="tabbar-bg" src="../../../static/img/bg-bottom@2x.png" alt="">
      <div class="tabbar-content" @click="switchTab">
        <div class="home" :class="isHomeChecked ? 'checked' : 'unchecked'" data-id="0"></div>
        <div class="myjoin" :class="isHomeChecked ? 'unchecked' : 'checked'" data-id="1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import API from '@/api/index'

  export default {
    data() {
      return {
        isHomeChecked: true
      }
    },

    computed: {
      wishTemplates() {
        return store.state.wishTemplates
      }
    },

    components: {},

    methods: {
      getUserInfo() {
        return store.dispatch('getUserInfo')
      },
      goToWriteTheme(e) {
        if (e.target.dataset.id) {

          store.commit('getCurWishTempId', e.target.dataset.id)
          store.dispatch('getWishTempletCss')

          const userInfo = wx.getStorageSync('userInfo');
          if (userInfo) {
            store.commit('getUserInfo', userInfo)
            wx.navigateTo({
              url: '/pages/writetheme/main'
            })
            return
          }
          this.getUserInfo().then(() => {
            wx.navigateTo({
              url: '/pages/writetheme/main'
            })
          })
        }
      },
      getMyWishes() {
        store.dispatch('getMyWishes')
      },
      switchTab(e) {
        const dataId = parseInt(e.target.dataset.id)
        if (dataId === 0 && !this.isHomeChecked) {
          this.isHomeChecked = true
        } else if (dataId === 1 && this.isHomeChecked) {
          this.isHomeChecked = false
          this.getMyWishes()
        }
      },

    },

    created() {
      store.dispatch('getWishTemplets')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    width: 100%;
    background: url("../../../static/img/bg-home.png") repeat-y;
    background-size: 100%;
    height:100%
    overflow-y scroll
    .themes
      display: flex;
      flex-wrap: wrap;
      justify-content:flex-start;
      align-content flex-start
      .item-wrap
        flex:0 0 50%
        display flex
        justify-content center
        .theme-item
          width: 320rpx;
          height: 460rpx;
          margin: 30rpx 0 20rpx;
          border-radius 12rpx
          box-shadow: 6rpx 2rpx 10rpx 4rpx rgba(0, 0, 0, .4)
    .join-list
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content flex-start
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
            background url("../../../static/img/checked-home@2x.png") no-repeat
            background-size cover
          &.unchecked
            background url("../../../static/img/unchecked-home@2x.png") no-repeat
            background-position 2.5rpx 0
            background-size 76rpx 42rpx
        .myjoin
          width:149rpx;
          height:64rpx;
          &.checked
            background url("../../../static/img/checked-myjoin@2x.png") no-repeat
            background-size cover
          &.unchecked
            background url("../../../static/img/unchecked-myjoin@2x.png") no-repeat
            background-size 149rpx 43rpx
</style>
