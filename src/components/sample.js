import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'

export class Sample extends Component {
    render() {
        return (
            <div></div>
        )
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sample)

