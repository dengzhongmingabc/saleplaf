<template>
  <div class="component">
    <div class="adddiv" @click="minus">-</div><div>
      <input type="text" v-model="count">
    </div><div class="minusdiv" @click="add">
    +</div>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    data () {
      return {
          count:1
      }
    },
    methods:{
        add(){
            if(this.count<10){
              this.count++
            }
            this.$emit("onChange",this.count)
        },
      minus(){
            if(this.count>1){
              this.count--
            }
            this.$emit("onChange",this.count)
      }
    }
  }
</script>

<style scoped>
  .component div{
    display:inline-block;
    display: table-cell;
    vertical-align: middle;
  }
  .adddiv{
    width:30px;
    height:27px;
    line-height: 27px;
    border:1px solid #e3e3e3;
    text-align: center;
    border-radius: 3px 0px 0px 3px;
    cursor: pointer;
  }
  .minusdiv{
    width:30px;
    height:27px;
    line-height: 27px;
    border:1px solid #e3e3e3;
    text-align: center;
    border-radius: 0px 3px 3px 0px;
    cursor: pointer;
  }
  input{
    width:40px;
    height:27px;
    border-left:0 ;
    border-right:0 ;
    border-top:1px solid #e3e3e3 ;
    border-bottom:1px solid #e3e3e3 ;
    padding:0;
    text-align: center;
    outline: none;
  }
</style>
