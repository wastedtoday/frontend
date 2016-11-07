import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js'
import {Route, Router, browserHistory} from 'react-router'
import {cyan500, grey50, darkBlack} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import Header from './Header.js'
import Autocomplete from './Autocomplete.js'

import Item from "./Item";
import Categories from "./Categories";
injectTapEventPlugin();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey50,
        backgroundColor: cyan500,
        textColor: darkBlack,
        alternateTextColor: darkBlack,
    },
    appBar: {
        height: 50,
    },
});

document.body.style.backgroundColor = muiTheme.palette.backgroundColor;

ReactDOM.render((
    <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
            <Header />
            <Autocomplete />
            <Paper style={{width: '80%', display: 'inline-block'}} zDepth={3}>
                <Router history={browserHistory}>
                    <Route path="/" component={Categories} />
                    <Route path="/item/:itemId" component={Item}/>
                </Router>
            </Paper>
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));
