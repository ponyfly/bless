<template>
  <div class="container">
    <div class="head">
      <img src="../../../static/img/bg-head@2x.png" alt="" class="head-bg">
      <div class="cake-wrap">
        <img src="../../../static/img/icon-1@2x.png" alt="" class="cake-bg">
        <img src="../../../static/img/cake@2x.png" alt="" class="cake">
      </div>
    </div>
    <div class="content-wrap">
      <div class="content">
        <img src="../../../static/img/card@2x.png" alt="" class="card-bg">
        <div class="card-desc">请填写祝福主题</div>
        <input class="inputarea" type="text" placeholder="祝你生日快乐么么哒" v-model="wishTitle">
      </div>
    </div>
    <div class="submit-wrap">
      <img class="submit-bg" src="../../../static/img/bg-bottom@2x.png" alt="">
      <div class="submit-content" @click="submitTheme">
        <img src="../../../static/img/submit@2x.png" alt="" class="submit-icon">
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
        wishTitle: ''
      }
    },
    computed: {
    },
    methods: {
      buildWish() {
        return store.dispatch('buildWish', this.wishTitle)
      },
      submitTheme() {
        this.buildWish().then(()=> {
          wx.redirectTo({
            url: '/pages/cardlist/main?wishId=' + store.state.wish.wishId
          })
        })
      }
    },
    created() {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    width: 100%;
    height: 100%;
    background: url("../../../static/img/bg-home.png") repeat-y;
    background-size: 100%;
    display flex
    flex-direction column
    align-items stretch
    .head
      width:100%
      height:175rpx
      position: relative
      .head-bg
        width:100%
        height:100%
        position absolute
        z-index 1
      .cake-wrap
        width:126rpx;
        height:96rpx;
        position absolute
        z-index 2
        left 313rpx
        top 63rpx
        display flex
        justify-content center
        align-items center
        .cake-bg
          width 100%
          height 100%
          position: absolute
        .cake
          width:51rpx
          height:59rpx
          position: relative
          z-index 3
          top:-5rpx
    .content-wrap
      flex:1
      display flex
      justify-content center
      align-items center
      .content
        width 523rpx
        height 684rpx
        background-color #fff
        box-shadow 20rpx 6rpx 50rpx 10rpx rgba(0,0,0,.4)
        border-top-right-radius 12rpx
        border-bottom-right-radius 12rpx
        position relative
        .card-bg
          width 523rpx
          height 684rpx
          position absolute
          top 0
          left 0
          z-index 1
        .card-desc
          position: absolute
          top 360rpx
          left 0
          z-index 2
          width: 100%
          height:60rpx
          text-align center
          font-size 30rpx
          color: #553737
        .inputarea
          position: absolute
          top:408rpx
          left:72rpx
          z-index 2
          width:378rpx
          height:90rpx
          border:2rpx solid #5f3f08
          border-radius 8rpx
          background-color: #ffd0d1;
          font-size 30rpx
          color #f5989a
          padding-left 30rpx
          box-sizing border-box
          &::-webkit-input-placeholder
            color: #f5989a
    .submit-wrap
      width: 100%;
      height: 215rpx;
      position: relative
      .submit-bg
        position: absolute
        top: 0
        left: 0
        width: 100%;
        height: 100%;
      .submit-content
        width: 100%;
        height: 100%;
        position: absolute;
        top: -72rpx;
        left: 0;
        z-index: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top:86rpx;
        box-sizing border-box
        .submit-icon
          width:214rpx
          height:214rpx
</style>