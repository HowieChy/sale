import Vue from 'vue'
import App from './share'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '分享中心',
    "enablePullDownRefresh": true,
  }
}
