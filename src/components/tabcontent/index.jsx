import React, { Component } from 'react'
import './index.less'
import {Card, Table } from 'antd'
import ReactEcharts from 'echarts-for-react'

import { connect } from 'react-redux'

const dataSource = [
  {
    key: '1',
    name: '院本部',
    number: 32
  },
  {
    key: '2',
    name: '二部',
    number: 32
  },
  {
    key: '3',
    name: '二十三所',
    number: 42
  },
  {
    key: '4',
    name: '二十五所',
    number: 42
  },
  {
    key: '5',
    name: '二零一所',
    number: 42
  },
  {
    key: '6',
    name: '二零三所',
    number: 42
  },
  {
    key: '7',
    name: '二零六所',
    number: 32
  },
  {
    key: '8',
    name: '二零七所',
    number: 32
  },
  {
    key: '9',
    name: '二零八所',
    number: 42
  },
  {
    key: '10',
    name: '七零六所',
    number: 42
  },
  {
    key: '11',
    name: '物资部',
    number: 42
  },
  {
    key: '12',
    name: '二八三厂',
    number: 42
  },
  {
    key: '13',
    name: '六九九厂',
    number: 42
  },
  {
    key: '14',
    name: '八零一所',
    number: 32
  },
  {
    key: '15',
    name: '空间部',
    number: 32
  }
];


class Tabcontent extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.data
    }
  }

  today= () => {
    window.fetch('http://10.11.24.128:8089/data.json').then(res => {
      console.log(res)
    })
    this.setState({
      list: this.props.data
    })
  }

  thisWeek = () => {
    this.setState({
      list: this.props.data.map(item => {
        return item*6
      })
    })   
  }

  thisMonth = () => {
    this.setState({
      list: this.props.data.map(item => {
        return item*29
      })
    }) 
  }


  getOption= (data) => {
    return {
      title: {
          text: ''
      },
      tooltip: {},
      legend: {
          data:['访问量']
      },
      xAxis: {
          data: ["院本部","二部","二十三所","二十五所","二零一所","二零三所","二零六所","二零七所","二零八所","七零六所","物资部","二八三厂","六九九厂","八零一厂","空间部"]
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        top: '16px',
        left: '50px',
        bottom: '80px'
      },
      series: [{
          name: '销量',
          type: 'bar',
          data: data,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
          }
      }]
    }
  }

  render() {
    dataSource.forEach((item, index) => {
      item.number = this.state.list[index]
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

    return(
      <div className="tab-content">
        <Card className="card-header">
          <div className="flex">
            <div className="card-head">
              <a href="#today" onClick={this.today}>今日</a>
              <a href="#week" onClick={this.thisWeek}>本周</a>
              <a href="#month" onClick={this.thisMonth}>本月</a>
            </div>
            <div className="companyName">
              二院单位
            </div>
          </div>
        </Card>
        <Card title='柱状图' className="card-echarts">
          <div className="card-content">
            <div className="content-left">
              <ReactEcharts option={this.getOption(this.state.list)} className="echarts" style={{width: '100%', height: '100%' }} id="myEcharts"/>
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