<template>
  <div class="slide">
    <div class="ad">
      <swiper  indicator-color="#fff" indicator-active-color="#23b4ff" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="item in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>


      <div class="info">
        <h2>{{title}}</h2>
        <h3>S1原液S1原液S1原液S1原液S1原液S1原液S1原液S1原液</h3>
        <h4>￥4000.00</h4>
        <button>立即购买</button>
      </div>

  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import Fly from "flyio/dist/npm/wx";
// import card from '@/components/card'

export default {
  // components: {
  //   card
  // },

  data () {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      title:null
    }
  },

  //转发
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(233,res.target)
    }
    return {
      title: '6666',
      path: '/pages/about/about'
    }
  },


  methods: {

  },
  mounted(){
    wx.showLoading({
      title: '加载中',
    })
    this.title=this.$root.$mp.query.id
    console.log(this.$root.$mp.query)

    let fly = new Fly;
    fly.get('/user', {
      id: this.$root.$mp.query.id
    })
      .then(function (res) {
        console.log(res);
        wx.hideLoading()
      })
      .catch(function (error) {

        console.log(error);
        wx.hideLoading()
      });

      // setTimeout(()=>{
      //   wx.setNavigationBarTitle({
      //     title: '23333',
      //     success: function(res) {
      //       // success
      //     }
      //   })
      // },3000)
  }

}
</script>

<style scoped lang="less">

  .slide{
    padding: 7vw;
    .ad{
      width:86vw;
      height: 300px;
      .slide-image {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      swiper{
        box-shadow: 0px 0px 20px 3px rgba(188,231,251,0.7);
        border-radius: 10px;
        background:  rgba(188,231,251,0.7);
        width: 100%;
        height: 100%;
      }
  }
  .info{
    padding: 40px;
    text-align: center;
    h2{

    }
    h3{
      font-size: 14px;
      color: #666;
      margin-top: 10px;
    }
    h4{
      margin-top: 25px;
      color: red;
      font-size: 14px;
    }
    a{
      color: #666;
      font-size: 12px;
      margin-top: 10px;
    }
    button{
      width: 170px;
      height: 35px;
      line-height: 35px;
      margin-top: 20px;
      background: #3ebdff;
      color: #fff;
      border-radius: 20px;
    }
    }
  }
</style>
