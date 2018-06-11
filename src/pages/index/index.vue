<template>
  <div class="container" @click="clickHandle('test click', $event)">


    <!--<div class="warp" @touchstart="wxtouchStart" @touchmove="wxtouchMove" @touchend="wxtouchEnd">-->
      <!--<div class="box">-->
        <!--<div  v-for="(item,index) in arr"  :class="{outActive:door&&index==0,inActive:door&&index==1,outActive2:door2&&index==0}" >-->
          <!--<img :src="item" alt="">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


    <div class="htmleaf-content">
      <div class="slider" @touchstart="wxtouchStart" @touchmove="wxtouchMove" @touchend="wxtouchEnd">
        <div v-if="arr2==2"  v-for="(item,index)  in arr" :class="{slide:true,activeRight2:doorRight&&index==leave,activeLeft2:doorLeft&&index==leave,activeIn2:doorLeft&&index==inShow,activeIn2:doorRight&&index==inShow}" >
          <a :href="'/pages/detail/detail?id='+item.id">
            <img :src="item.img" />
            <div class="info">
              <h2>S1原液</h2>
              <h3>S1原液S1原液S1原液S1原液S1原液S1原液S1原液S1原液</h3>
              <h4>￥4000.00</h4>
              <a href="">查看详情 &gt;</a>
              <button>立即购买</button>
            </div>
          </a>
        </div>
        <div v-if="arr2==3" v-for="(item,index)  in arr" :class="{slide:true,activeRight3:doorRight&&index==leave,activeLeft3:doorLeft&&index==leave,activeIn3:doorLeft&&index==inShow,activeIn3:doorRight&&index==inShow}" >  <a :href="'/pages/detail/detail?id='+item.id">
          <img :src="item.img" />
          <div class="info">
            <h2>S1原液</h2>
            <h3>S1原液S1原液S1原液S1原液S1原液S1原液S1原液S1原液</h3>
            <h4>￥4000.00</h4>
            <a href="">查看详情 &gt;</a>
            <button>立即购买</button>
          </div>
        </a></div>
        <div v-if="arr2==4"  v-for="(item,index)  in arr" :class="{slide:true,activeRight4:doorRight&&index==leave,activeLeft4:doorLeft&&index==leave,activeIn4:doorLeft&&index==inShow,activeIn4:doorRight&&index==inShow}" >  <a :href="'/pages/detail/detail?id='+item.id">
          <img :src="item.img" />
          <div class="info">
            <h2>S1原液</h2>
            <h3>S1原液S1原液S1原液S1原液S1原液S1原液S1原液S1原液</h3>
            <h4>￥4000.00</h4>
            <a href="">查看详情 &gt;</a>
            <button>立即购买</button>
          </div>
        </a></div>
        <div v-if="arr2==5"  v-for="(item,index)  in arr" :class="{slide:true,activeRight5:doorRight&&index==leave,activeLeft5:doorLeft&&index==leave,activeIn5:doorLeft&&index==inShow,activeIn5:doorRight&&index==inShow}" >  <a :href="'/pages/detail/detail?id='+item.id">
          <img :src="item.img" />
          <div class="info">
            <h2>S1原液</h2>
            <h3>S1原液S1原液S1原液S1原液S1原液S1原液S1原液S1原液</h3>
            <h4>￥4000.00</h4>
            <a href="">查看详情 &gt;</a>
            <button>立即购买</button>
          </div>
        </a></div>
        <span @click="left" class="left"></span>
        <span @click="right"  class="right"></span>
      </div>

    </div>


  </div>
</template>

<script>
import card from '@/components/card'
import magi from 'magi.js'
import pic1 from '../../assets/img/1.jpg'
import pic2 from '../../assets/img/2.jpg'
import pic3 from '../../assets/img/3.jpg'
import pic4 from '../../assets/img/4.jpg'

export default {
  data () {
    return {
      anRight:null,
      anLeft:null,
      anIn:null,
      leave:null,
      inShow:null,
      arr:[{
        img:'http://imgstore.cdn.sogou.com/app/a/100540002/402468.jpg',
        id:1
      },{
        img:'http://i1.hdslb.com/bfs/archive/763293ce06bf1e684ef0ea3da43ae5008d8564b8.jpg',
        id:2
      }
      // ,{
      //   img:'http://img4.imgtn.bdimg.com/it/u=1941886659,1104103226&fm=214&gp=0.jpg',
      //   id:3
      // },
      // {
      //     img:'http://imgstore.cdn.sogou.com/app/a/100540002/402468.jpg',
      //     id:4
      //   },     {
      //     img:'http://img4.imgtn.bdimg.com/it/u=1941886659,1104103226&fm=214&gp=0.jpg',
      //     id:5
      //   }
      ],
      arr2:null,
      userInfo: {},
      touchDot:null,
      interval:null,
      time:null,
      done:null,

      door:false,
      doorLeft:false,
      doorRight:false
    }
  },
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

  components: {
    card
  },


  methods: {
//触摸开始事件
    wxtouchStart: function(e) {

      this.touchDot = e.pageX;
      var that = this;
      this.interval = setInterval(function(){
        that.time+=1;
      },100);
    },
    //触摸移动事件
    wxtouchMove: function(e) {

      let touchMove = e.pageX;
      let touchDot = this.touchDot;
      let time = this.time;
      // console.log("touchMove: " + touchMove + ", touchDot: " + touchDot + ", diff: " + (touchMove - touchDot));
      //向左滑动
      if(touchMove - touchDot <= -40 && time<10 &&!this.done) {
        console.log(" 向左滑动");
        this.done = true;
        this.scrollLeft();
      }
      //向右滑动
      if (touchMove - touchDot >= 40 && time < 10 && !this.done) {
        console.log("向右滑动");
        this.done = true;
        this.scrollRight();
      }
    },
    //触摸结束事件
    wxtouchEnd: function(e) {
      clearInterval(this.interval);
      this.time = 0;
      this.done = false;
    },

    scrollRight(){
      console.log('右滑动')
      if(this.doorRight){
        return false
      }
      this.arr.unshift(this.arr[this.arr.length-1])
      this.doorRight=true;
      setTimeout(()=>{
        this.arr.pop()
        this.doorRight=false;
      },800)
    },

    scrollLeft(){
      console.log('左滑动')
      if(this.doorLeft){
        return false
      }
      this.arr.unshift(this.arr[this.arr.length-1])
      this.doorLeft=true;
      setTimeout(()=>{
        this.arr.pop()
        this.doorLeft=false;
      },800)
    },

    left(){
      console.log(2333)
      this.scrollLeft();
    },
    right(){
      console.log(2333)
      this.scrollRight();
    },

    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
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
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },


  },

  created () {


    this.arr2=this.arr.length;
    this.leave=this.arr.length;
    this.inShow=this.arr.length-1;
    console.log(this.leave,this.inShow)
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()

  }
}
</script>

<style scoped lang="less">

  .container{
    position: revert;
    overflow: hidden;
    height: 100vh;
    background-image: url("data:image/png;base64,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") ;
  }

  @keyframes animation{from{opacity:0;transform:scale(1.2) rotateX(45deg)} to{ }}

  .slider div p{
    color:#1c1c1c;position:absolute;bottom:-55px; font-family:Raleway; font-size:16px;
  }
  .slider{

    position: revert;
    animation:animation ease 1s;animation-delay:.8s;animation-fill-mode:backwards;
    margin: 0 auto;
    height:600px;
    width:265px;
    padding-top: 65px;
    top:100px;
    perspective:1000px;
    transition:ease-in-out .2s;
  }

  .slide{
    user-select:none;
    position:absolute;
    height:450px;
    width:265px;
    box-shadow: 0px 3px 20px 0px rgba(188,231,251,1);
    background:#fcfcfc;
    transform-style:preserve-3d;
    text-align:center;
    border:12px white solid;
    box-sizing:border-box;
    border-bottom:55px white solid;
    border-radius:8px;
    img{
      text-align:center;
      width:100%;
      user-drag:none;
      border-radius:2px;
      height: 200px;
      box-shadow: 0px 0px 20px 3px rgba(188,231,251,1);
    }
    .info{
      h2{
        margin-top: 15px;
      }
      h3{
        font-size: 14px;
        color: #666;
        margin-top: 10px;
      }
      h4{
        margin-top: 15px;
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
  .transition {
    transition: cubic-bezier(0,1.95,.49,.73) .4s ;
  }

  @keyframes outRight2{from{transform: translateZ(50px) translateY(-18px); } to{ transform: translateZ(50px) translateY(-18px) translateX(200px) rotateZ(20deg);  }}
  @keyframes outLight2{from{transform: translateZ(50px) translateY(-18px);} to{ transform:translateX(-200px) translateZ(50px) translateY(-18px)  rotateZ(-20deg)}}
  @keyframes inShow2{from{  transform: translateZ(50px)  translateY(-18px);} to{ transform: translateZ(50px) translateY(-18px); }}


  .activeRight2{
    animation:outRight2 ease 1s;animation-fill-mode:backwards;
  }

  .activeLeft2{
    animation:outLight2 ease 1s;animation-fill-mode:backwards;
  }

  .activeIn2{
    position: absolute;
    animation:inShow2 ease 0.8s;animation-fill-mode:backwards ;
  }

  @keyframes outRight3{from{transform: translateZ(100px) translateY(-36px); } to{ transform: translateZ(100px) translateY(-36px) translateX(200px) rotateZ(20deg);  }}
  @keyframes outLight3{from{transform: translateZ(100px) translateY(-36px);} to{ transform:translateX(-200px) translateZ(100px) translateY(-36px)  rotateZ(-36deg)}}
  @keyframes inShow3{from{  transform: translateZ(100px)  translateY(-36px);} to{ transform: translateZ(100px) translateY(-36px); }}


  .activeRight3{
    animation:outRight3 ease 1s;animation-fill-mode:backwards;
  }

  .activeLeft3{
    animation:outLight3 ease 1s;animation-fill-mode:backwards;
  }

  .activeIn3{
    position: absolute;
    animation:inShow3 ease 0.8s;animation-fill-mode:backwards ;
  }

  @keyframes outRight4{from{transform: translateZ(150px) translateY(-54px); } to{ transform: translateZ(150px) translateY(-54px) translateX(200px) rotateZ(20deg);  }}
  @keyframes outLight4{from{transform: translateZ(150px) translateY(-54px);} to{ transform:translateX(-200px) translateZ(150px) translateY(-54px)  rotateZ(-20deg)}}
  @keyframes inShow4{from{  transform: translateZ(150px)  translateY(-54px);} to{ transform: translateZ(150px) translateY(-54px); }}


  .activeRight4{
    animation:outRight4 ease 1s;animation-fill-mode:backwards;
  }

  .activeLeft4{
    animation:outLight4 ease 1s;animation-fill-mode:backwards;
  }

  .activeIn4{
    position: absolute;
    animation:inShow4 ease 0.8s;animation-fill-mode:backwards ;
  }

  @keyframes outRight5{from{transform: translateZ(200px) translateY(-72px); } to{ transform: translateZ(200px) translateY(-72px) translateX(200px) rotateZ(20deg);  }}
  @keyframes outLight5{from{transform: translateZ(200px) translateY(-72px);} to{ transform:translateX(-200px) translateZ(200px) translateY(-40px)  rotateZ(-20deg)}}
  @keyframes inShow5{from{  transform: translateZ(200px)  translateY(-72px);} to{ transform: translateZ(200px) translateY(-72px); }}


  .activeRight5{
    animation:outRight5 ease 1s;animation-fill-mode:backwards;
  }

  .activeLeft5{
    animation:outLight5 ease 1s;animation-fill-mode:backwards;
  }

  .activeIn5{
    position: absolute;
    animation:inShow5 ease 0.8s;animation-fill-mode:backwards ;
  }

  .slide:nth-child(1){
    z-index: 9;
    transform: translateZ(0px) translateY(0px);
  }
  .slide:nth-child(2){
    z-index: 9;
    transform: translateZ(50px) translateY(-18px);

  }
  .slide:nth-child(3){
    z-index: 99;
    transform: translateZ(100px)  translateY(-36px);

  }
  .slide:nth-child(4){
    z-index: 99;
    transform: translateZ(150px) translateY(-54px);
  }
  .slide:nth-child(5){
    z-index: 99;
    transform: translateZ(200px) translateY(-72px);
  }
  .slide:nth-child(6){
    z-index: 99;
    transform: translateZ(250px) translateY(-90px);
  }


  .left{
    position: absolute;
    left: -45px;
    top: 45%;
    width: 30px;
    height: 30px;
    background: url("../../assets/img/left.png") no-repeat;
    background-size:contain ;
  }
  .right{
    position: absolute;
    right: -45px;
    top: 45%;
    width: 30px;
    height: 30px;
    background: url("../../assets/img/right.png") no-repeat;
    background-size:contain ;
  }
</style>
