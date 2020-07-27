import React, { Component } from 'react'
import { Tabs } from 'antd'
import './index.less'
import Tabcontent from '../tabcontent'

import { connect } from 'react-redux'
import { setTabKey, setVisitNumber, setMessageNumber, setDocumentNumber, setGroupNumber } from '../../redux/actionCreators'


const { TabPane } = Tabs

class Visits extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  callback= (key) => {
    this.props.setTabKey(key)
  }

  update () {
    // const a = require('../../../public/data.json')
    // console.log('a', a)
    let newDate = new Date().getDate()
    const visitArry = [44,512,511,32,25,54,202,32,50,53,18,35,83,0,54]
    const messageArry = [216,2449,1810,85,79,190,587,216,168,189,20,65,243,0,311]
    const documentArry = [49,672,879,57,56,107,250,28,81,91,17,44,139,0,90]
    const groupArry = [2,5,4,2,2,3,4,2,3,4,1,2,3,0,1]
    const visit = visitArry.map(item => {
      return item + newDate
    })
    const message = messageArry.map(item => {
      return item + newDate
    })
    const document = documentArry.map(item => {
      return item + newDate
    })
    // const group = visitArry.map(item => {
    //   return item + newDate
    // })
    // this.props.groupNumber.map(item => {
    //     return groupArry.push(item + parseInt(Math.random()*10))
    // })
    this.props.setVisitNumber(visit)
    this.props.setMessageNumber(message)
    this.props.setDocumentNumber(document)
    this.props.setGroupNumber(groupArry)
  }

  componentDidMount() {
    setInterval(() => {this.update()}, 1000)
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