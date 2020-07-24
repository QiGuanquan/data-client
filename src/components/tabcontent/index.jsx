import React, { Component } from 'react'
import './index.less'
import {Card, Table } from 'antd'
import ReactEcharts from 'echarts-for-react'

import { connect } from 'react-redux'

const dataSource = [
  {
    key: '1',
    name: '二部',
    number: 32
  },
  {
    key: '2',
    name: '二十三所',
    number: 42
  },
  {
    key: '3',
    name: '二十五所',
    number: 42
  },
  {
    key: '4',
    name: '二零一所',
    number: 42
  },
  {
    key: '5',
    name: '二零三所',
    number: 42
  },
  {
    key: '6',
    name: '二零八所',
    number: 42
  },
  {
    key: '6',
    name: '七零六所',
    number: 42
  },
  {
    key: '6',
    name: '物资部',
    number: 42
  },
  {
    key: '6',
    name: '二八三厂',
    number: 42
  },
  {
    key: '6',
    name: '六九九厂',
    number: 42
  }
];


class Tabcontent extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
    // dataSource.forEach((item, index) => {
    //   item.number = this.props.data[index]
    // })
  }


  getOption= (a) => {
    return {
      title: {
          text: ''
      },
      tooltip: {},
      legend: {
          data:['访问量']
      },
      xAxis: {
          data: ["二部","二十三所","二十五所","二零一所","二零三所","二零八所","七零六所","物资部","二八三厂","六九九厂"]
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        top: '8px',
        left: '40px',
        // bottom: '80px'
      },
      series: [{
          name: '销量',
          type: 'bar',
          data: a,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
          }
      }]
    }
  }

  render() {
    // const abc = []
    // abc.push(parseInt(Math.random()*(11)+50,10),1,2,2,2,2)
    // console.log('随机数', abc)
    dataSource.forEach((item, index) => {
      item.number = this.props.data[index]
    })
    const columns = [
      {
        title: '单位名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '数量',
        dataIndex: 'number',
        key: 'number',
        // sortOrder: 'descend',
        // sorter: (a, b) => a.number - b.number,
      }
    ];
    const a = this.props.data
    return(
      <div className="tab-content">
        <Card className="card-header">
          <div className="flex">
            <div className="card-head">
              <a href="#self">今日</a>
              <a href="#self">本周</a>
              <a href="#self">本月</a>
            </div>
            <div className="companyName">
              二院单位
            </div>
          </div>
        </Card>
        <Card title='柱状图' className="card-echarts">
          <div className="card-content">
            <div className="content-left">
              <ReactEcharts option={this.getOption(a)} className="echarts" style={{width: '100%', height: '100%' }} id="myEcharts"/>
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
  state => ({tabKey: state.tabKey
    }),{}
)(Tabcontent)