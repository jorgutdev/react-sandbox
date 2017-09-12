import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import './styles.css'
export class Header extends Component {
    render() {
        return (
            <Jumbotron className="jumbo">
                <h1 className='jumbo-header'>React-Sandbox</h1>
            </Jumbotron>
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

