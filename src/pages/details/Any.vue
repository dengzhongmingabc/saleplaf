<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <count @onChange="onChange('count',$event)"></count>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <Vselect :selectList = 'buyTypes' @onChange="onChange('buyTypes',$event)"></Vselect>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <multi-chooser :dataList="periodList" @onChange="onChange('periodList',$event)"></multi-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <chooser :dataList="versionList" @onChange="onChange('versionList',$event)"></chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
         <span>200</span> 元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button" @click="toBuy" >
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
    <my-dialog :isShow="isShow" @dialogclose="dialogclose">
      <table>
        <tr>
          <td>
            <table class="buy-dialog-table">
              <tr>
                <th>数量</th>
                <th>版本</th>
                <th>时间</th>
                <th>类型</th>
                <th>总价</th>
              </tr>
              <tr>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <banks></banks>
          </td>
        </tr>
        <tr>
          <td align="center">
            <div class="button" >
              确定购买
            </div>
          </td>
        </tr>
      </table>
    </my-dialog>
  </div>
</template>

<script>
  import Vselect from '../../components/VSelect.vue'
  import Chooser from '../../components/Chooser.vue'
  import MultiChooser from '../../components/MultiChooser.vue'
  import Count from '../../components/Count.vue'
  import MyDialog from '../../components/Dialog.vue'
  import Banks from '../../components/bankChooser.vue'
  export default {
    components: {
      Vselect,
      Chooser,
      MultiChooser,
      Count,
      MyDialog,
      Banks
    },
    data () {
      return {
        buyNum: 0,
        buyType: {},
        versions: [],
        period: {},
        price: 0,
        isShow:false,
        versionList: [
          {
            label: '客户版',
            value: 0
          },
          {
            label: '代理商版',
            value: 1
          },
          {
            label: '专家版',
            value: 2
          }
        ],
        periodList: [
          {
            label: '半年',
            value: false
          },
          {
            label: '一年',
            value: false
          },
          {
            label: '三年',
            value: false
          }
        ],
        buyTypes: [
          {
            label: '入门版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          }
        ],
        isShowPayDialog: false,
        bankId: null,
        orderId: null,
        isShowCheckOrder: false,
        isShowErrDialog: false
      }
    },
    methods:{
      onChange(type,value){
          if(type=='count'){
            this.buyNum = value
          }
          if(type=='buyTypes'){
            this.buyType = value
          }
          if(type=='versionList'){
            this.versions = value
          }
         if(type=='periodList'){
           this.period = value
         }
          var param = new Object();
          param.count = this.buyNum
          param.buyType = this.buyType
          param.versions = this.versions
          param.period = this.period
          console.log(param)
      },
      toBuy(){
          this.isShow=true
      },
      dialogclose(){
          this.isShow=false
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }
  .buy-dialog-btn {
    margin-top: 20px;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,
  .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }
</style>
