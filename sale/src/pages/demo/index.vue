<template>
  <div class="container">

    <button class="weui-btn" type="default" @click="openConfirm">Confirm Dialog</button>
    <button class="weui-btn" type="default" @click="openAlert">Alert Dialog</button>

    <button class="weui-btn" type="default" @click="openToast">成功提示</button>
    <button class="weui-btn" type="default" @click="openLoading">加载中提示</button>

    <!--<span @click="photo">拍照</span>-->

    <!--<img :src="pic" alt="">-->
    <picker @change="bindPickerChange" :value="index" :range="array">
      <view class="picker">
        当前选择：{{array[index]}}
      </view>
    </picker>
    <radio-group class="radio-group" @change="radioChange">
      <label class="radio" v-for="(item, index) in items" :key="item.name">
        <radio :value="item.name" :checked="item.checked"/> {{item.value}}
      </label>
    </radio-group>
    <button @click="goTo">回首页</button>
    <a href="/pages/counter/counter" class="counter"><span>去往示例页面</span></a>
  </div>
</template>

<script>
import card from '@/components/card'


export default {
  data () {
    return {
      array: ['美国', '中国', '巴西', '日本'],
      index:1,items: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'},
        {name: 'BRA', value: '巴西'},
        {name: 'JPN', value: '日本'},
        {name: 'ENG', value: '英国'},
        {name: 'TUR', value: '法国'}
      ],
      pic:''
    }
  },

  components: {
    card
  },

  methods: {

    photo(){
      var This=this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          console.log(res.tempFilePaths)
          This.pic=res.tempFilePaths[0]
          console.log(this.pic)
        }
      })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为',e.mp.detail.value);
      this.index=e.mp.detail.value

    },
    radioChange (e) {
      console.log('radio发生change事件，携带value值为：', e.target.value)
    },
    goTo () {
      const url = '../index/index'
      wx.navigateTo({ url })
    },

    openConfirm: function () {
      wx.showModal({
        title: '2333',
        content: '1234567',
        confirmText: "是的",
        cancelText: "对",
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('用户点击主操作')
          }else{
            console.log('用户点击辅助操作')
          }
        }
      });
    },
    openAlert: function () {
      wx.showModal({
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    },

    openToast: function () {
      wx.showToast({
        title: '已完成',
        icon: 'success',
        duration: 3000
      });
    },
    openLoading: function () {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',
        duration: 3000
      });
    }
  },

  created () {

    // 调用应用实例的方法获取全局数据
    this.getUserInfo()

  }
}
</script>

<style scoped lang="less">

  .radio-group{
    display: flex;
    flex-direction: column;
  }

</style>
