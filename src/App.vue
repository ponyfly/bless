<script>
  import store from '@/store/index'
  import API from '@/api/index'

  export default {
    created() {
      this.getOpenId()
      this.createInnerAudioContext()
    },
    methods: {
      getOpenId() {
        const openId = wx.getStorageSync('openId');
        if (openId) {
          store.commit('setOpenId', openId)
        }
        wx.login({
          success: function (res) {
            const code = res.code
            wx.request({
              url: API.getOpenId,
              method: 'POST',
              data: {
                appId: 'wx6b61571b20b0c664',
                jsCode: code
              },
              success: res => {
                store.commit('setOpenId', res.data.opendId)
                wx.setStorageSync('opendId', res.data.opendId)
              }
            })
          }
        })
      },
      createInnerAudioContext() {
        store.commit('createInnerAudioContext')
      }
    }
  }
</script>

<style>
page{
  height:100%;
}
.container {
  display: flex;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
