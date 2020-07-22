import React, { Component } from 'react'
import { Tabs } from 'antd'
import './index.less'
import Tabcontent from '../tabcontent'

import { connect } from 'react-redux'
import { setTabKey } from '../../redux/actionCreators'

const { TabPane } = Tabs

class Visits extends Component {

  callback= (key) => {
    console.log(key)
    this.props.setTabKey(key)
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

export default connect(
  state => ({setTabKey}),{}
)(Visits)