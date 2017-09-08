import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Header extends Component {
    render() {
        return (
            <div>
                WOLA
                <div>isLogged: { JSON.stringify(this.props.isLogged) }
                </div>
            </div>

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

