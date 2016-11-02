import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Header = (props) => (
    <h1 style={{height:'150px', marginTop:'50px', color: 'white'}}>time wasted.today:</h1>
);

export default muiThemeable()(Header);
