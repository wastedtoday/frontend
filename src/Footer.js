import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return <div className="page-footer">{this.props.text}</div>;
    }
}

export default  Footer