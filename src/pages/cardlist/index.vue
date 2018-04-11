<template>
  <div class="container">
    <div class="list-wrap" v-if="!isShowWrite">
      <div class="head">
        <img src="../../../static/images/bg-head@2x.png" alt="" class="head-bg">
        <div class="creater">
          <img src="../../../static/images/star@2x.png" alt="" class="star">
          <div class="content">
            本次祝福由<span class="creater-name">默默</span>发起
          </div>
          <img src="../../../static/images/star@2x.png" alt="" class="star">
        </div>
        <div class="cards-num">
          <img src="../../../static/images/icon-1@2x.png" alt="" class="num-bg">
          <div class="num">6/365</div>
        </div>
      </div>
      <div class="content-wrap">
        <div class="stage">
          <div class="banner">
            <div v-for="item in bannerList" :key="item" class="banner-item" :class="item == bannerIndex ? 'banner-item-act': item > bannerIndex ? 'banner-item-right' : 'banner-item-left'" :index="item">{{item}}</div>
          </div>
        </div>
        <button @click="preIndex">上一个</button>
        <button @click="nextIndex">下一个</button>
        <div class="joiner-container">
          <scroll-view scroll-x class="scroll-content">
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
            <div class="scroll-item">
              <img src="../../../static/images/joiner@2x.png" alt="" class="joiner-pic">
              <div class="joiner-name">小乔</div>
            </div>
          </scroll-view>
        </div>
      </div>
      <div class="submit-wrap">
        <img class="submit-bg" src="../../../static/images/bg-bottom2@2x.png" alt="">
        <div class="submit-content">
          <img src="../../../static/images/create.png" alt="" class="create-wish">
          <img src="../../../static/images/join-wish@2x.png" alt="" class="submit-icon" @click="submitTheme">
          <img src="../../../static/images/share.png" alt="" class="share-wish">
        </div>
      </div>
      <div class="wish-type" v-if="isShowType">
        <div class="type-wrap">
          <div class="type-title">选择祝福类型</div>
          <div class="type-list" @click="toWriteWish">
            <img id="1" src="../../../static/images/wishtype-1@2x.png" class="type-item">
            <img id="2" src="../../../static/images/wishtype-2@2x.png" class="type-item">
            <img id="3" src="../../../static/images/wishtype-3@2x.png" class="type-item">
            <img id="4" src="../../../static/images/wishtype-4@2x.png" class="type-item">
          </div>
        </div>
      </div>
    </div>
    <cardtype :type="curCardType" v-if="isShowWrite"></cardtype>
  </div>
</template>

<script>
  import CardType from '@/components/cardtype.vue'

  export default {
    data() {
      return {
        bannerIndex: 4,
        bannerList: [1,2,3,4,5,6,7,8,9],
        indexPositoin: 50,
        isShowType: true,
        isShowWrite: true,
        curCardType: 0,
      }
    },
    components: {
      cardtype: CardType
    },
    computed: {},
    methods: {
      submitTheme() {
        console.log('submit')
      },
      nextIndex() {
        if(this.bannerIndex < this.bannerList.length-1){
          this.bannerIndex++
        }else{
          this.bannerIndex = 0
        }
      },
      preIndex() {
        if(this.bannerIndex > 0){
          this.bannerIndex--
        }else{
          this.bannerIndex = this.bannerList.length-1
        }
      },
      toWriteWish(e) {
        this.isShowWrite = true
        this.curCardType = e.target.id
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    width: 100%;
    height: 100%;
    .list-wrap
      width: 100%;
      height: 100%;
      background: url("../../../static/images/bg-home.png") repeat-y;
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
        .creater
          position absolute
          z-index 2
          width: 100%
          height: 28rpx
          display flex
          justify-content center
          align-items center
          font-size 28rpx
          .content
            margin 0 20rpx
            .creater-name
              color: #f77e78
          .star
            width:14rpx
            height:14rpx

        .cards-num
          position: absolute
          top:46rpx;
          left:308rpx;
          z-index 3
          width: 142rpx
          height:109rpx
          .num-bg
            position: absolute
            width: 142rpx
            height:109rpx
          .num
            position: absolute
            width:100%
            height: 100%
            display flex
            justify-content center
            align-items: center
            color: #fff
            padding-bottom 16rpx
            box-sizing border-box
      .content-wrap
        flex:1
        display flex
        flex-direction column
        align-items stretch
        justify-content space-between
        .stage
          height: 500rpx; width: 100%;
          .banner
            height:80%;padding-top:50px; overflow: hidden; position: relative; -webkit-perspective: 400;
            .banner-item
              position: absolute; width:400rpx; height: 300rpx; margin-left:-200rpx; transition: 1s;   background: #dd8; display: flex; align-items: center; justify-content:center;
            .banner-item-act
              z-index: 999; opacity: 1; transform: rotateY(0) translateZ(70px); background: #ddf;
            .banner-item-left
              z-index: 9; transform: rotateY(45deg)
            .banner-item-right
              z-index: 9;  transform: rotateY(-45deg);
        .joiner-container
          width:100%
          align-self flex-end
          .scroll-content
            white-space nowrap
            .scroll-item
              margin-right 36rpx
              display inline-block
              .joiner-pic
                width:80rpx
                height:80rpx
              .joiner-name
                width: 80rpx
                text-align center
                font-size 20rpx
                color: #fff
      .submit-wrap
        width: 100%;
        height: 245rpx;
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
          top: -32rpx;
          left: 0;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top:86rpx;
          box-sizing border-box
          .submit-icon
            width:184rpx
            height:187rpx
            position: relative
            top: -20rpx
          .create-wish
            align-self flex-end
            width 224rpx
            height 96rpx
          .share-wish
            align-self flex-end
            width 223rpx
            height 94rpx
      .wish-type
        width:100%
        height:100%
        background-color: rgba(0,0,0,.6);
        position fixed
        z-index 999
        display flex
        justify-content center
        align-items center
        .type-wrap
          .type-title
            display flex
            justify-content center
            color: #fff
            font-size 48rpx
            margin-bottom 60rpx
          .type-list
            padding: 0 50rpx
            box-sizing border-box
            display flex
            flex-wrap wrap
            justify-content space-around
            .type-item
              width: 267rpx
              height:107rpx
              margin-bottom 40rpx
</style>