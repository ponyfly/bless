<template>
  <div class="photo-container">
    <img class="theme-temp" src="../../static/images/photo-temp.png" alt="">
    <img class="card-title" src="../../static/images/card-title@2x.png" alt="">
    <div class="photo-common">
      <img class="photo-bg" src="../../static/images/photo-01.png" alt="">
      <div class="upload-photo"></div>
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

<style lang="stylus" rel="stylesheet/stylus">
  .photo-container
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
      top:234rpx
      left:159rpx
    .photo-common
      position absolute
      left: 0rpx
      top: 259rpx
      width 616rpx
      height:573rpx
      .photo-bg
        position absolute
        width 718rpx
        height:689rpx
      .upload-photo
        position absolute
        top:272rpx;
        left:166rpx;
        z-index 2
        width:330rpx
        height:140rpx
</style>