<template>
  <div>
    <view class="banner-wrap">
      <view class="banner">
        <block wx:for="{{bannerList}}" wx:key="{{index}}">
          <view class="banner-item {{index == bannerIndex ? 'banner-item-act': index > bannerIndex ? 'banner-item-right' : 'banner-item-left'}}" style="left:{{indexPositoin-(bannerIndex-index)*6}}%; z-index:{{bannerIndex<index ? 999- (index-bannerIndex): ''}}" bindtap="setIndex" data-index="{{index}}">{{item}}</view>
        </block>
      </view>
      <image src="../../static/img/left@2x.png" alt="" class="left" @click="preIndex" wx:if="{{bannerIndex > 3}}"></image>
      <image src="../../static/img/right@2x.png" alt="" class="right" @click="nextIndex" wx:if="{{bannerList.length - bannerIndex > 4}}"></image>
    </view>
  </div>
</template>

<script>
  export default {
    //logs.js
    data() {
      return {

        bannerIndex: 3,
        bannerList: [1,2,3,4,5,6,7],
        indexPositoin: 50,

      }
    },
    computed: {},
    methods: {
      nextIndex() {
        if(this.bannerIndex < this.bannerList.length-1){
          this.bannerIndex++
        }
      },

      preIndex() {

        if(this.bannerIndex > 3){
          this.bannerIndex--
        }
      },

      setIndex(e) {
        this.bannerIndex = e.currentTarget.dataset.index
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner-wrap{ height: 684rpx; width: 100%; position: relative; top: -20rpx}
  .banner-wrap .left{position: absolute; top:50%;left:40rpx; transform:translateY(-50%);z-index:10;height: 96rpx;width 91rpx}
  .banner-wrap .right{position: absolute; top:50%;right:40rpx; transform:translateY(-50%);z-index:10;height: 96rpx;width 91rpx}
  .banner{height: 100%; position: relative; -webkit-perspective: 400;perspective-origin: center center}
  .banner-item{ position: absolute; width:523rpx; height: 684rpx; margin-left:-262rpx; transition: 1s;   background: #dd8; display: flex; align-items: center; justify-content:center;box-sizing: border-box;border: 5rpx solid #000; border-radius: 20rpx}

  .banner-item-act{  z-index: 999; opacity: 1; transform: rotateY(0); background: #ddf;}
  .banner-item-left{ z-index: 9; transform: rotateY(25deg) scale(.85)}
  .banner-item-right{ z-index: 9;  transform: rotateY(-25deg) scale(.85)}

  .b{display: flex}
  .b button{flex:1;}
</style>