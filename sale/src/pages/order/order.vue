<template>
  <div>
    <div class="button">
      <span @click="tab(0)" :class="{'active':type==0}">待支付</span><span  @click="tab(1)" :class="{active:type==1}">已支付</span>
    </div>
    <ul>
      <li v-for="(item,index) in items">
        <p class="code"><span>订单号:{{item.code}}</span> <ins>{{type==0?'待支付':'已支付'}}</ins></p>
        <a :href="'/pages/detail/detail?id='+item.id" class="info">
          <img :src="item.img" >
          <div class="right">
            <h2>{{item.text}}</h2>
            <h3>{{item.time}}</h3>
            <p><em>￥{{item.money}}</em></p>
          </div>
        </a>
      </li>
    </ul>

    <div v-show="door" class="weui-loadmore">
      <div class="weui-loading"></div>
      <div class="weui-loadmore__tips">正在加载</div>
    </div>

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
      type:0,
      door:false,
      items:[{
        code:11111111,
        img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        id:1,
        text:'S1原液',
        time:'2018-06-05 10:35:30',
        money:8000
      },{
        code:11111111,
        img:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        id:2,
        text:'S2原液',
        time:'2018-06-05 10:35:30',
        money:8000
      },{
        code:11111111,
        img:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        id:2,
        text:'S2原液',
        time:'2018-06-05 10:35:30',
        money:8000
      }]
    }
  },

  mounted () {
    console.log(this.$root.$mp.query.id)
    this.type=this.$root.$mp.query.id;

    wx.showLoading({
      title: '加载中',
    })
    setTimeout(()=>{
      wx.hideLoading();
    },500)
  },
    // wx.showShareMenu({
    //   withShareTicket: true
    // })


  async onPullDownRefresh() {
    console.log('更新数据')
    // 停止下拉刷新
    wx.stopPullDownRefresh();
  },
  onReachBottom() {
    // 到这底部在这里需要做什么事情
    this.loadMore();
  },

  methods: {
    tab(val){
      this.type=val;
      this.load()
    },
    //加载
    load(){
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(()=>{
        wx.hideLoading();
      },500)
    },

    //加载更多
    loadMore(){
      this.door=true;
      setTimeout(()=>{
        this.items.push({
          code:11111111,
          img:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          id:2,
          text:'S2原液',
          time:'2018-06-05 10:35:30',
          money:8000
        })
        this.door=true;
      },500)
  }}

}
</script>

<style scoped lang="less">

  ul{
    padding: 20px 20px 0 20px;
    /*border-top: 1px solid #ddd;*/
  }
  li{
    margin-bottom: 20px;
    height: 180px;
    border-radius: 10px;
    box-shadow: 0px 1px 10px 0px rgba(188,231,251,0.7);
    background-size: contain;
    .code{
      font-size: 14px;
      padding: 10px 30px;
      color: #999;
      display: flex;
      span{
        flex: 1;
      }
    }
    .info{
      align-items: center;

      display: flex;
    }
    img{
      width: 120px;
      height: 120px;
      margin: 0 20px 0 30px;
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
        font-size: 12px;
        color: #999;
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
        width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border-radius: 20px;
        background: #34baff;
        color: #fff;
        margin-right: 30px;
      }
    }
  }
  .button{
    text-align: center;
    span{
      display: inline-block;
      width: 130px;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #34baff;
      color: #34baff;
    }
    span:first-child{
      border-radius: 20px 0 0 20px;
      border-right: none;
    }
    span:last-child{
      border-radius:0 20px 20px 0;
      border-left: none;
    }
    .active{
      background: #35baff;
      color: #fff;
    }
  }
</style>
