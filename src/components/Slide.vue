<template>
  <div class="slide-show" @mouseover="timeout()" @mouseout="start()">
    <div class="slide-img">
        <a :href="slideData[nowIndex].href">
          <transition name="slide-trans">
            <img v-if="show" :src="slideData[nowIndex].src">
          </transition>
          <transition name="slide-trans-old">
            <img v-if="!show" :src="slideData[nowIndex].src">
          </transition>
        </a>
    </div>
    <h2></h2>
    <ul class="slide-pages" >
      <li @click="pre(nowIndex)">&lt;</li>
      <li v-for="(item,index) in slideData" @click="go(index)">{{index+1}}</li>
      <li @click="next(nowIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        slideData:{
            type:Array
        },
      inv: {
        type: Number,
        default: 2000
      }
    },
  mounted:function () {
    this.start();
  },
  data () {
    return {
        nowIndex:0,
        invId:"",
        show:true
    }
  },
  methods:{
    go(index){
      this.show = false
        this.nowIndex = index;
    },
    pre(index){
      this.show = false
        this.nowIndex=index-1<0?this.slideData.length-1:index-1
    },
    next(index){
      this.show = false
      this.nowIndex=index+1>=this.slideData.length?0:index+1
    },
    start(){
      let me = this;
      this.invId = window.setInterval(function () {
        me.next(me.nowIndex);
      },me.inv)
    },
    timeout(){
      window.clearInterval(this.invId)
    }
  }
}
</script>

<style scoped>
  /*.slide-new-enter {
    transform: translateX(900px);
  }
  .slide-new-enter-active {
    transition: all .5s;
  }
  .slide-new-enter-to {
    transform: translateX(0px);
  }

  .slide-old-leave {
    transform: translateX(0px);
  }
  .slide-old-leave-active {
    transition: all .5s;
  }
  .slide-old-leave-to {
    transform: translateX(-900px);
  }*/
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
  }
</style>

