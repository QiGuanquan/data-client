import React, { Component } from 'react'
import { Tabs } from 'antd'
import './index.less'
import Tabcontent from '../tabcontent'

const { TabPane } = Tabs

export default class Visits extends Component {

  callback= (key) => {
    console.log(key)
  }

    render() {
      return (
          <Tabs onChange={this.callback} type="card" className="tabs">
            <TabPane tab="访问量" key="1">
              <Tabcontent />
            </TabPane>
            <TabPane tab="消息量" key="2">
              <Tabcontent />
            </TabPane>
            <TabPane tab="文件数" key="3">
              <Tabcontent />
            </TabPane>
            <TabPane tab="群组数" key="4">
              <Tabcontent />
            </TabPane>
          </Tabs>
      )
    }
}