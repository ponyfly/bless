<template>
  <div class="card-container">
    <div class="head">
      <img src="../../static/img/bg-04.png" alt="" class="head-bg">
      <div class="creater">
        <img src="../../static/img/star@2x.png" alt="" class="star">
        <div class="content">
          本次祝福由<span class="creater-name">默默</span>发起
        </div>
        <img src="../../static/img/star@2x.png" alt="" class="star">
      </div>
    </div>
    <div class="content-wrap">
      <div class="common-bg bg-1"></div>
      <div class="common-bg bg-2"></div>
      <div class="common-bg bg-3"></div>
      <div class="common-bg bg-4">
        <!--<typeword v-if="type==1"></typeword>
        <typeaudio v-if="type==2"></typeaudio>
        <typevideo v-if="type==3"></typevideo>
        <typeimage v-if="type==4"></typeimage>-->
        <!--<typeaudio @getTempFilePath="getTempFilePath" :isAfterWirte.sync="isAfterWirte"></typeaudio>-->
        <typeword @getTypeWord="getTypeWord"></typeword>
      </div>
    </div>
    <div class="bottom">
      <img src="../../static/img/bg-03.png" class="bg-bottom">
      <div class="form-area">
        <img src="../../static/img/cancel@2x.png" alt="" class="form-btn cancel">
        <img :src="isAfterWirte ? '../../static/img/confirm-2@2x.png' : '../../static/img/confirm@2x.png'" alt="" class="form-btn confirm" @click="uploadContent">
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import API from '@/api/index'

  import TypeAudio from '@/components/audio.vue'
  import TypeVideo from '@/components/video.vue'
  import TypeImage from '@/components/image.vue'
  import TypeWord from '@/components/word.vue'
  export default {
    props:['type'],
    data() {
      return {
        isAfterWirte:false,
        tempFilePath: '',
        tempWord: ''
      }
    },
    components: {
      typeaudio: TypeAudio,
      typevideo: TypeVideo,
      typeimage: TypeImage,
      typeword: TypeWord
    },
    computed: {
    },
    created(){
    },
    //setCardContent
    methods: {
      getTempFilePath(path) {
        this.tempFilePath = path
      },
      getTypeWord(word) {
        this.tempWord = word
      },
      buildCard(config) {
        wx.request({
          url: API.buildCard,
          method: 'POST',
          data: config,
          success: res => {

          }
        })
      },
      uploadContent() {
//        const type = parseInt(this.type)
        const type = 1
        let config = {}
        switch (type) {
          case 1:
            config = {
              openId: store.state.openId,
              owerHeadPic: store.state.userInfo.avatarUrl,
              ownerName: store.state.userInfo.nickName,
              wishTemplateId: '',
              wishText: this.tempWord,
              wishType: 'text',
              wishUrl: '',
              wishid: ''
            }
            this.buildCard(config)
        }
      }
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  .card-container
    width:100%
    height:100%
    display flex
    flex-direction column
    align-items stretch
    justify-content center
    .head
      width 100%
      height: 50rpx
      position: relative
      .head-bg
        width:100%
        height: 100%
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
    .content-wrap
      flex 1
      position: relative
      .common-bg
        position: absolute
        width 100%
        height:100%
        border-radius 14rpx
      .bg-1
        background-color: #9f4444;
      .bg-2
        background-color: #c38989;
        right: 10rpx
      .bg-3
        background-color: #dfb3b3;
        right:20rpx
      .bg-4
        width: 720rpx
        background-color: #fff;
        right:30rpx
        border-top-left-radius 0
        border-bottom-left-radius 0
    .bottom
      width:100%
      height: 188rpx
      position: relative
      background-color: #f6a;
      .bg-bottom
        width:100%
        height:100%
        position: absolute
        z-index 1
      .form-area
        width:100%
        height:100%
        position absolute
        z-index 2
        display flex
        justify-content space-around
        align-items center
        .form-btn
          width: 195rpx
          height:112rpx
</style>
