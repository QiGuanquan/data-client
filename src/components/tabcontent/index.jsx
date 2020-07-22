import React, { Component } from 'react'
import './index.less'
import {Card, Table } from 'antd'
import ReactEcharts from 'echarts-for-react'

import { connect } from 'react-redux'

const dataSource = [
  {
    key: '1',
    name: '一室',
    number: 32
  },
  {
    key: '2',
    name: '二室',
    number: 42
  },
  {
    key: '3',
    name: '三室',
    number: 42
  },
  {
    key: '4',
    name: '四室',
    number: 42
  },
  {
    key: '5',
    name: '五室',
    number: 42
  },
  {
    key: '6',
    name: '六室',
    number: 42
  },
  {
    key: '7',
    name: '七室',
    number: 42
  },
  {
    key: '8',
    name: '八室',
    number: 42
  }
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '数量',
    dataIndex: 'number',
    key: 'number',
  }
];
class Tabcontent extends Component {

  state = { 
    xiaoliang: [5, 20, 36, 100, 10, 20]
  }
  
  getOption= (xiaoliang) => {
    return {
      title: {
          text: ''
      },
      tooltip: {},
      legend: {
          data:['访问量']
      },
      xAxis: {
          data: ["一室","二室","三室","四室","五室","六室"]
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        top: '8px',
        left: '32px'
      },
      series: [{
          name: '销量',
          type: 'bar',
          data: xiaoliang,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
          }
      }]
    }
  }

  render() {
    const { xiaoliang } = this.state
    // const key = this.props.tabKey
    console.log('tabKey', this.props.tabKey)
    return(
      <div className="tab-content">
        <Card className="card-header">
          <div className="card-head">
            <a href="#self">今日</a>
            <a href="#self">本周</a>
            <a href="#self">本月</a>
          </div>
        </Card>
        <Card title='柱状图' className="card-echarts">
          <div className="card-content">
            <div className="content-left">
              <ReactEcharts option={this.getOption(xiaoliang)} className="echarts"/>
            </div>
            <div className="content-right">
              <h1>排行</h1>
              <Table 
                dataSource={dataSource}
                columns={columns}
                bordered
              />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default connect(
  state => ({tabKey: state.tabKey}),{}
)(Tabcontent)