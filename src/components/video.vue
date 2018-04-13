<template>
    <div class="video-container">
      <img class="theme-temp" src="../../static/img/video-temp.png" alt="">
      <img class="card-title" src="../../static/img/card-title@2x.png" alt="">
      <div class="video-common">
        <img class="video-bg" src="../../static/img/video-01.png" alt="">
        <div class="upload-video"></div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .video-container
    width:100%
    height: 100%
    position: relative
    .theme-temp
      position: absolute
      width:100%
      height:100%
      z-index 2
    .card-title
      width: 414rpx
      height:43rpx
      position: absolute
      top:266rpx
      left:159rpx
    .video-common
      position absolute
      left: 50rpx
      top: 360rpx
      width 616rpx
      height:573rpx
      .video-bg
        position absolute
        width 616rpx
        height:573rpx
      .upload-video
        position absolute
        top:136rpx;
        left:108rpx
        z-index 2
        width:330rpx
        height:140rpx
</style>