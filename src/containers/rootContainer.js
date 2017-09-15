import React, { Component } from 'react'
import LaunchScreen from '../containers/launchScreen'
import DrawerMenu from '../containers/drawerMenu'
import Header from '../components/header'

import './styles/drawer.css'
import { connect } from 'react-redux'
import Sidebar from 'react-sidebar';

// Styles

class RootContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen = function (open) {
    this.setState({ sidebarOpen: open });
  }


  componentDidMount() {
  }

  render() {

    return (
      <Sidebar sidebar={<DrawerMenu />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        sidebarClassName="root-drawer"
      >
        <Header menuHandler={this.onSetSidebarOpen} />
        <LaunchScreen />
      </Sidebar>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
