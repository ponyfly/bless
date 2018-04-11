<template>
  <div class="word-container">
    <img class="theme-temp" src="../../static/images/word-temp.png" alt="">
    <img class="card-title" src="../../static/images/card-title@2x.png" alt="">
    <textarea name="wishcontent" id="wisharea" cols="30" rows="10" maxlength="20" placeholder="输入你的祝福" wrap="hard"></textarea>
    <div class="desc">（ 最多可输入 xx字 )</div>
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
  .word-container
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
      top:354rpx
      left:179rpx
    #wisharea
      position: absolute
      top: 460rpx
      left: 75rpx
      z-index 2
      width:578rpx
      height:384rpx
      border-radius 10rpx
      background-color: #ffd0d1;
      border:1px solid #5f3f08
      padding 20rpx 30rpx
      box-sizing border-box
      font-size 40rpx
    .desc
      position: absolute
      bottom 82rpx
      right:82rpx
      font-size 24rpx
      color: #949494
</style>