import Vue from 'vue'
import App from './App'
import './assets/css/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [ 'pages/index/index','pages/demo/demo','pages/about/about','^pages/center/center','pages/share/share','pages/detail/detail','pages/order/order'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Drjessie',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#20b3ff',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      /* eslint-disable */
      list: [{
        pagePath: 'pages/index/index',
        text: '1首页',
        // iconPath: 'static/images/icon_nav_button.png',
        // selectedIconPath: 'static/images/icon_nav_button.png'
      },
        {
          pagePath: 'pages/demo/demo',
          text: 'Demo',
          // iconPath: 'static/images/icon_nav_cell.png',
          // selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/about/about',
          text: '关于我们',
          // iconPath: 'static/images/icon_nav_cell.png',
          // selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/center/center',
          text: '个人中心',
          // iconPath: 'static/images/icon_nav_cell.png',
          // selectedIconPath: 'static/images/icon_nav_cell.png'
        },
      ]
      /* eslint-enable */
    }
  },

}
