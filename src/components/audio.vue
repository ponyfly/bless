<template>
  <div class="audio-container">
    <img class="audio-icon" src="../../static/img/audio-1@2x.png" alt="">
    <img class="theme-temp" src="../../static/img/bg-temp1.png" alt="">
    <img class="card-title" src="../../static/img/card-title@2x.png" alt="">
    <img v-if="isStart" class="audio-start" src="../../static/img/audio-2@2x.png" alt="" @touchstart="startRecord" @touchend="stopRecord">
    <div v-if="!isStart" class="audio-end">
      <div class="re-record common-circle" @click="reRecord">重录</div>
      <div class="audition common-circle" @click="tryListen">试听</div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    props: ['isAfterWirte'],
    data() {
      return {
        isStart: true,
        recorderManager: null,
        tempFilePath: ''
      }
    },
    computed: {
      innerAudioContext() {
        return store.state.innerAudioContext
      }
    },
    methods: {
      startRecord(){
        this.recorderManager.start()
      },
      stopRecord() {
        this.recorderManager.stop()
      },
      reRecord() {
        this.isStart = true
        this.$emit('update:isAfterWirte', false)
        this.innerAudioContext.stop()
      },
      tryListen() {
        this.innerAudioContext.src = this.tempFilePath
        this.innerAudioContext.play()
      },
      initRecorderManager() {
        this.recorderManager = wx.getRecorderManager()
        this.recorderManager.onStop((res) => {
          this.tempFilePath = res.tempFilePath
          this.$emit('getTempFilePath', this.tempFilePath)
          this.isStart = false
          this.$emit('update:isAfterWirte', true)
        })
        this.recorderManager.onError(function(){
          wx.showToast({
            title: '录音失败'
          })
        });
      },
      initAudioContextEvent() {
        this.innerAudioContext.onPlay(() => {
          console.log(this.innerAudioContext.src)
        })
        this.innerAudioContext.onError(() => {
          wx.showToast({
            title: '播放失败'
          })
        })
      }
    },
    created() {
      this.initRecorderManager()
      this.initAudioContextEvent()
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
      z-index 3
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