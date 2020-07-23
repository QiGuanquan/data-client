import React, { Component } from 'react'
import { Tabs } from 'antd'
import './index.less'
import Tabcontent from '../tabcontent'

import { connect } from 'react-redux'
import { setTabKey, setVisitNumber, setMessageNumber, setDocumentNumber, setGroupNumber } from '../../redux/actionCreators'

const { TabPane } = Tabs

class Visits extends Component {

  callback= (key) => {
    console.log(key)
    this.props.setTabKey(key)
    console.log('qweqweeqw', this.props.tabKey)
  }

  update () {
    const visitArry = []
    const messageArry = []
    const documentArry = []
    const groupArry = []
    this.props.visitNumber.map(item => {
        return visitArry.push(item + parseInt(Math.random()*10))
    })
    this.props.messageNumber.map(item => {
        return messageArry.push(item + parseInt(Math.random()*10))
    })
    this.props.documentNumber.map(item => {
        return documentArry.push(item + parseInt(Math.random()*10))
    })
    this.props.groupNumber.map(item => {
        return groupArry.push(item + parseInt(Math.random()*10))
    })
    this.props.setVisitNumber(visitArry)
    this.props.setMessageNumber(messageArry)
    this.props.setDocumentNumber(documentArry)
    this.props.setGroupNumber(groupArry)
  }

  componentDidMount() {
    setInterval(() => {this.update()}, 3000)
  }

    render() {
      return (
          <Tabs onChange={this.callback} type="card" className="tabs">
            <TabPane tab="访问量" key="1">
              <Tabcontent data={this.props.visitNumber} />
            </TabPane>
            <TabPane tab="消息量" key="2">
              <Tabcontent data={this.props.messageNumber} />
            </TabPane>
            <TabPane tab="文件数" key="3">
              <Tabcontent data={this.props.documentNumber} />
            </TabPane>
            <TabPane tab="群组数" key="4">
              <Tabcontent data={this.props.groupNumber} />
            </TabPane>
          </Tabs>
      )
    }
}

export default connect(
  state => ({
            tabKey: state.tabKey,
            visitNumber: state.visitNumber,
            messageNumber: state.messageNumber,
            documentNumber: state.documentNumber,
            groupNumber: state.groupNumber
            }),{setTabKey,setVisitNumber,setMessageNumber,setDocumentNumber,setGroupNumber}
            )(Visits)