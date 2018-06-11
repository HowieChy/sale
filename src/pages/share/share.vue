<template>
  <div>
    <ul>
      <li v-for="(item,index) in items">
        <img :src="item.img" >
        <div class="right">
          <h2>{{item.text}}</h2>
          <h3>购买时间：{{item.time}}</h3>
          <p><em>￥{{item.money}}</em><button :data-share="item" open-type="share" >一键分享</button></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
// import card from '@/components/card'

export default {
  // components: {
  //   card
  // },


  data () {
    return {
      items:[{
        img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        id:1,
        text:'S1原液',
        time:'2018-06-05 10:35:30',
        money:8000
      },{
        img:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        id:2,
        text:'S2原液',
        time:'2018-06-05 10:35:30',
        money:8000
      }]
    }
  },

  mounted () {
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
  },

  //转发
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      return {
        title: res.target.dataset.share.text,
        path: '/pages/detail/detail?id='+res.target.dataset.share.id,
        imageUrl:res.target.dataset.share.img
      }
    }
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      return {
        title: '分享中心',
        path: '/pages/share/share'
      }
    }

  },

  // async onPullDownRefresh() {
  //   console.log('停止更新')
  //   // 停止下拉刷新
  //   wx.stopPullDownRefresh();
  // },
  // onReachBottom() {
  //   // 到这底部在这里需要做什么事情
  //   this.loadMore();
  // },
  //
  // methods: {
  //   loadMore(){
  //     wx.showLoading({
  //       title: '玩命加载中',
  //     })
  //     console.log('加载数据')
  //     setTimeout(()=>{
  //       wx.hideLoading();
  //     },2000)
  //   }
  //
  // }

}
</script>

<style scoped lang="less">

  ul{
    padding: 20px ;
    /*border-top: 1px solid #ddd;*/
  }
  li{
    height: 150px;
    border-radius: 10px;
    box-shadow: 0px 1px 10px 0px rgba(188,231,251,0.7);
    background-size: contain;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    img{
      width: 120px;
      height: 120px;
      margin: 0 20px;
    }
    .right{
      position: relative;
      height: 120px;
      flex: 1;
      h2{
        font-size: 18px;
        margin-bottom: 5px;
      }
      h3{
        font-size: 11px;
      }
      p{
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        em{
          color: red;
          flex: 1;
          font-size: 14px;
        }
      }
      button{
        width: 90px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border-radius: 20px;
        background: #34baff;
        color: #fff;
        margin-right: 13px;
      }
    }
  }
</style>
