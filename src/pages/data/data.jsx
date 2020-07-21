import React, {Component} from 'react'
import { Layout } from 'antd'
import './data.less'
import Visits from '../../components/visits'

const { Header, Content, Footer } = Layout;

export default class Data extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current: '/visit'
    }
  }

  componentDidMount() {
    if(this.props.location.pathname) {
        this.setState({
            current: this.props.location.pathname
        })
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    })
  }


  render() {
    return (
      <Layout className="layout">
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Visits></Visits>
      </Content>
      <Footer className="footer">云雀 ©2020 Cypher</Footer>
    </Layout>
    )
  }
}
