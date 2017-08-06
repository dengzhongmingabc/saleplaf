<template>
  <div class="choser-component">
    <ul>
      <li :class="{ liactive: index==nowIndex }" v-for="(item,index) in dataList" @click="onSelect(index)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:{
      dataList:{
        type:Array
      }
    },
    data () {
      return {
        nowIndex:0
      }
    },

    methods:{
      onSelect(index){
        this.nowIndex = index;
        console.log(index)
        this.$emit("onChange",{label:this.dataList[index].label});
      }
    }
  }
</script>

<style scoped>
  li{
    width: 78px;
    height: 27px;
    display:inline-block;
    line-height: 27px;
    text-align: center;
    margin-right:5px;
    border:1px solid #e3e3e3;
    font-weight: 700;
    cursor: pointer;
  }

  .liactive{
    background-color:#4fc08d;
    color:#fff;
    border:0px;
  }


</style>
