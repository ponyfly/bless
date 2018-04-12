import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    opendId: '',
    userInfo: {
      avatarUrl: '',
      nickName: ''
    },
    wish:{
      wishTitle: '',
      wishId: '',
      wishTemplateId: '',
      wishThemeImgUrl: ''
    },
    innerAudioContext: null
  },
  mutations: {
    setOpenId(state, openId) {
      state.opendId = openId
    },
    getUserInfo(state,data) {
      state.userInfo.avatarUrl = data.avatarUrl
      state.userInfo.nickName = data.nickName
    },
    changeTitle(state, data) {
      state.wish.wishTitle = data
    },
    buildWish(state, data) {
      state.wish.wishId = data.wishId
      state.wish.wishTemplateId = data.wishTemplateId
      state.wish.wishThemeImgUrl = data.wishThemeImgUrl
    },
    createInnerAudioContext(state) {
      state.innerAudioContext = wx.createInnerAudioContext()
    }
  },
  getters: {

  },
  actions: {
    getUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                commit('getUserInfo', res.userInfo)
                wx.setStorageSync('userInfo', {
                  avatarUrl: res.userInfo.avatarUrl,
                  nickName: res.userInfo.nickName
                })
                resolve()
              }
            })
          }
        })
      })
    },
    buildWish({commit, state}, data) {
      commit('changeTitle', data)
      return new Promise((resolve, reject) => {
        wx.request({
          url: API.buildWish,
          method: 'POST',
          data: {
            initiator: state.userInfo.nickName,
            openId: state.openId,
            wishTemplateId: '',
            wishTheme: ''
          },
          success:res => {
            commit('buildWish', res.data)
            resolve()
          },
          fail: () => {
            resolve()
          }
        })
      })
    }
  }
})

export default store