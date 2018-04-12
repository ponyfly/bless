import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


export default {
  // 这个字段走 app.json
  config: {
    pages: ['pages/index/main','^pages/cardlist/main', 'pages/writetheme/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fee7dd',
      navigationBarTitleText: '小祝愿',
      navigationBarTextStyle: 'black'
    }
  }
}
