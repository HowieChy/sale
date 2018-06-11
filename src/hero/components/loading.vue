<template>
    <transition name="load">
        <div class="load-wrap" v-if="show">
            <header v-if="hasheader"></header>
            <div class="s-loading">
                <div class="load-img">
                    <div class="load-icon"></div>
                    </svg>
                </div>
            </div>
            <footer v-if="hasfooter"></footer>
        </div>
    </transition>
</template>
<script>
    export default {
      data(){
        return{
          positionY: 0,
          timer: null
        }
      },
      props:{
        show:{
          type:Boolean,
          default:true
        },
        hasfooter:{
          type:Boolean,
          default:true,
        },
        hasheader:{
          type:Boolean,
          default:true,
        }
      },
      watch:{
        show(val){
          if(!val){
            clearInterval(this.timer);
          }
        }
      },
      mounted(){

      }
    }
</script>
<style lang="less">
    /*@keyframes load{*/
        /*0%   {transform: translateY(0px);}*/
        /*50%  {transform: translateY(-50px);}*/
        /*100% {transform: translateY(0px);}*/
    /*}*/
.load-wrap{

    background-color: transparent;
    background: #5e4674;
    position: absolute;
    z-index: 260;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    header{
        height: 2.5rem;
        background: #5e4674;
    }
    footer{
        height: 2.5rem;
        background: #5e4674;
    }
}
.s-loading{
    flex: 1;
    width: 100%;
    position: relative;
    background-color: white;
    background: #5e4674;
}
.load-icon{
    width: 100%;
    height: 100%;
    background: url('../img/loading.gif') no-repeat 0 0;
    background-size: 100% auto;
}
.load-img{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 261;
    transform: translate(-50%,-50%);
    width: 4rem;
    height:4rem;
}
.load-enter-active, .load-leave-active {
    transition: opacity .3s ease;
}
.load-enter, .load-leave-to {
    opacity: 0;
}
</style>