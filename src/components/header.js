import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import './header.css'
import { MdMenu, MdSearch } from 'react-icons/lib/md'

export class Header extends Component {
    render() {
        return (
            <Jumbotron className="jumbo">
                <div className="left-container" onClick={this.props.menuHandler}>
                    <MdMenu style={{
                        color: '#fff',
                        fontSize: '40'
                    }} />
                </div>
                <div className="center-container">
                    <h1 className='jumbo-header'>React-Sandbox</h1>
                </div>
                <div className="right-container">
                    <MdSearch style={{
                        color: '#fff',
                        fontSize: '40'
                    }} />
                </div>
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

