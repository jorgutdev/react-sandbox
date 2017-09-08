import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <Jumbotron  />
        )
    }
}


const mapStateToProps = state => {
    return {
        isLogged: state.userReducer.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)

