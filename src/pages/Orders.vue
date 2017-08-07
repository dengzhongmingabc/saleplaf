<template>
  <div class="orders-wrap">
  <div class="timepicker"><datepicker v-model="date" class="timecss"></datepicker></div>
    <ul>
      <li class="head">
        <div>商品信息</div>
        <div>单价</div>
        <div>数量</div>
        <div>总价</div>
        <div>操作</div>
      </li>

      <li v-for=" item in orders" class="list">
        <div>{{item.info}}</div>
        <div>{{item.price}}</div>
        <div>{{item.count}}</div>
        <div>{{item.total}}</div>
        <div>删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import datepicker from 'vue-date'
  export default {
    components: { datepicker },
    data () {
      return {
        date: '2016-10-16',
          orders:[{
            info:'版本1',
            count:'10',
            price:'100',
            total:'1000'
          },{
            info:'版本2',
            count:'10',
            price:'50',
            total:'500'
          },
            {
              info:'版本3',
              count:'10',
              price:'80',
              total:'800'
            }]
      }
    }
  }
</script>

<style scoped>
  li{
    width:100%;
    height:60px;
    border:1px solid #e3e3e3;
    display: flex;
    margin-top: 10px;
  }
  li div{
    display: inline-block;
    border:1px solid #e3e3e3;
    vertical-align: middle;
    width:100%;
    line-height: 60px;
    text-align: center;
  }

  .head{
    background-color: #4fc08d;
  }

  .list{
    margin-top: 10px;
  }
  .timepicker{
    width: 112px;
    margin-top: 30px;
  }
  .timecss{
    vertical-align: middle;
  }
</style>
