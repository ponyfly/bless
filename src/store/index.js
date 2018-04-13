import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    openId: '',
    userInfo: {
      avatarUrl: '',
      nickName: ''
    },
    wishTemplates: [],
    curWishTemp: {
      id: '',
      wishTempletCss: {}
    },
    myWishes:[],
    wish:{
      wishTitle: '',
      wishId: '',
      wishTemplateId: '',
      wishThemeImgUrl: ''
    },
    wishCards:[],
    innerAudioContext: null
  },
  mutations: {
    setOpenId(state, openId) {
      state.openId = openId
    },
    getUserInfo(state,data) {
      state.userInfo.avatarUrl = data.avatarUrl
      state.userInfo.nickName = data.nickName
    },
    getWishTemplets(state, data) {
      state.wishTemplates = data
    },
    getWishTempletCss(state, data) {
      state.curWishTemp.wishTempletCss = data
    },
    getMyWishes(state, data) {
      state.myWishes = data
    },
    getCurWishTempId(state, data) {
      state.curWishTemp.id = data
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
    },
    getWishCards(state, data) {
      state.wishCards = data
    }
  },
  getters: {

  },
  actions: {
    getOpenId({commit}) {
      const openId = wx.getStorageSync('openId');
      if (openId) {
        commit('setOpenId', openId)
      } else {
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
                commit('setOpenId', res.data.openId)
                wx.setStorageSync('openId', res.data.openId)
              }
            })
          }
        })
      }
    },
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
    buildWish({commit, dispatch, state}, data) {
      wx.showToast({
        title: '正在创建祝福'
      })
      commit('changeTitle', data)
      return new Promise((resolve, reject) => {
        wx.request({
          url: API.buildWish,
          method: 'POST',
          data: {
            initiator: state.userInfo.nickName,
            openId: state.openId,
            wishTemplateId: state.curWishTemp.id,
            wishTheme: state.wish.wishTitle
          },
          success:res => {
            commit('buildWish', res.data)
            resolve()
            wx.hideToas
            dispatch('getWishCards')
          }
        })
      })
    },
    async getWishTemplets({commit, dispatch, state}) {
      await dispatch('getOpenId')
      wx.request({
        url:API.getWishTemplets,
        method: 'POST',
        data: {
          openId: state.openId
        },
        success:res => {
          commit('getWishTemplets', res.data.wishTemplates)
        }
      })
    },
    getMyWishes({commit, state}) {
      wx.request({
        url:API.getMyWishes,
        method: 'POST',
        data: {
          openId: state.openId
        },
        success:res=>{
          commit('getMyWishes', res.data.myWishes)
        }
      })
    },
    getWishTempletCss({commit, state}) {
      wx.request({
        url: API.getWishTempletCss,
        method: 'POST',
        data: {
          openId: state.openId,
          wishTempletId: state.curWishTemp.id
        },
        success: res => {
          commit('getWishTempletCss', res.data.wishTempletCss)
        }
      })
    },
    getWishCards({commit, state}) {
      wx.request({
        url: API.getWishCards,
        method: 'POST',
        data: {
          openId: state.openId,
          round: 10,
          start: 1,
          wishId: state.wish.wishId,
        },
        success: res => {
          commit('getWishCards', res.data.wishCards)
        }
      })
    }
  }
})

export default store