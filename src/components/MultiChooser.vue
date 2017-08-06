<template>
  <div class="choser-component">
    <ul>
      <li :class="{ liactive: item.value }" v-for="(item,index) in dataNewDataList" @click="onSelect(index)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    props:{
      dataList:{
        type:Array
      }
    },
    data () {
      return {
        dataNewDataList:[],
        hasSelect:[]
      }
    },
      mounted(){
        this.dataNewDataList = this.dataList
    },
    methods:{
      onSelect(index){
          let me = this;
        this.dataNewDataList[index].value = !this.dataNewDataList[index].value
        if(this.dataNewDataList[index].value){
            this.hasSelect.push(this.dataNewDataList[index])
        }else{
          _.remove(this.hasSelect,function (obj) {
            return obj.label==me.dataNewDataList[index].label
          })
        }
        this.$emit("onChange",{label:this.hasSelect});
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
    border:1px solid #fff;
  }


</style>
