<template>
  <div class="audio-container">
    <img class="audio-icon" src="../../static/img/audio-1@2x.png" alt="">
    <img class="theme-temp" src="../../static/img/bg-temp1.png" alt="">
    <img class="card-title" src="../../static/img/card-title@2x.png" alt="">
    <img v-if="isStart" class="audio-start" src="../../static/img/audio-2@2x.png" alt="" @touchstart="startRecord" @touchend="stopRecord">
    <div v-if="!isStart" class="audio-end">
      <div class="re-record common-circle">重录</div>
      <div class="audition common-circle">试听</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isStart: true,
        recorderManager: null
      }
    },
    computed: {},
    methods: {
      startRecord(){
        console.log('start')
        this.recorderManager.start()
      },
      stopRecord() {
        console.log('stop')
        this.recorderManager.stop()
      }
    },
    created() {
      this.recorderManager = wx.getRecorderManager()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .audio-container
    width:100%
    height: 100%
    position: relative
    .theme-temp
      position: absolute
      width:100%
      height:100%
      z-index 2
    .audio-icon
      position: absolute
      top: 326rpx
      left: 66rpx
      width: 584rpx
      height: 342rpx
      z-index 1
    .card-title
      width: 414rpx
      height:43rpx
      position: absolute
      top:246rpx
      left:191rpx
    .audio-start
      position: absolute
      left: 276rpx
      top: 715rpx
      width:164rpx
      height:164rpx
      z-index 3
    .audio-end
      width: 100%
      height:164rpx
      position: absolute
      top:715rpx
      display flex
      justify-content center
      align-items center
      .common-circle
        width:164rpx
        height:164rpx
        border-radius:82rpx
        box-shadow 6rpx -2rpx 0rpx #9c4448 inset
        display: flex
        justify-content center
        align-items center
        font-size 30rpx
        color: #fff
        font-weight bold
        margin:0 22rpx
      .re-record
        background-color: #f4828d;
      .audition
        background-color: #e74d45;
</style>