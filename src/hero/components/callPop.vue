<template>
    <div class="pop-mask"  v-show="showValue" @click="hide">
        <transition name="popShow">
            <div class="pop-box" v-show="show" @click.stop="stopUp">
                <p class="pop-title">提示</p>
                <p class="pop-call" >确定拨打电话：400-8610177</p>
                <div class="pop-btn">
                    <p @click="hide">取消</p>
                    <a @click="hide" href="tel:400-8610177">确定</a>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                show:false,
                load:true,
                showValue:false
            }
        },
        watch:{
            showValue(val){
                if(val){
                    if(this.load){
                        this.load = false;
                        setTimeout(()=>{
                            this.load = true;
                            this.show = true;
                        },50)
                    }
                }
            },
        },
        methods:{
            hide(){
                if(this.load){
                    this.load = false;
                    this.show = false;
                    setTimeout(()=>{
                        this.load = true;
                        this.showValue = false;
                    },300);
                }
            },
            stopUp(){

            }
        },
    }
</script>
<style lang="less">
    @base: 18rem;
    .pop-mask{
        position: absolute;
        z-index: 999;
        left: 0;
        top:0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
    }
    .pop-box{
        position: absolute;
        width: 75%;
        background-color: white;
        border-radius: 5px;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) scale(1);
        transition: all 0.3s;
        .pop-title{
            font-weight: 400;
            font-size: 16/@base;
            line-height: 40/@base;
            text-align: center;
        }
    }
    .pop-call{
        border-bottom: 1px solid #D5D5D6;
        color: red;
        font-size:14/@base;
        text-align: center;
        padding: 10px 10px 20px 10px;
    }
    .pop-btn{
        display: flex;
        text-align: center;
        line-height: 40/@base;
        p{
            font-size: 14/@base;
            color: #666666;
            flex: 1;
            border-right: 1px solid #D5D5D6;
        }
        a{
            font-size: 14/@base;
            color: #666666;
            display: block;
            flex:1;
        }
    }
    .popShow-enter,.popShow-leave-to{
        opacity: 0;
        transform: translate(-50%,-50%) scale(1.2);
    }
    .popShow-enter-active,.popShow-leave-active{
        transition: all .3s;
    }
</style>

