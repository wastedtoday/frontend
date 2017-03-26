import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { cyan500, grey50, darkBlack } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import Header from './Header.js'
import AddTimeHeading from './AddTimeHeading.js'

import firebase from 'firebase'

import Login from "./Login";
import Item from "./Item";
import Categories from "./Categories";
injectTapEventPlugin();


var config = {
  apiKey: "AIzaSyC0TzUJs3ZRgmUOvgY4I4v2W4_yLrkO7HQ",

  // Only needed if using Firebase Realtime Database (which we will be in this example)
  databaseURL: "https://wastedtoday-d654f.firebaseio.com",

  // Only needed if using Firebase Authentication
  authDomain: "wastedtoday-d654f.firebaseapp.com",

  // Only needed if using Firebase Storage
  storageBucket: "wastedtoday-d654f.appspot.com"
};

firebase.initializeApp(config);

const style = {
  width: '50%',
  margin: 'auto',
  //display: 'inline-block'
}

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
        height: 50
    },
});

document.body.style.backgroundColor = muiTheme.palette.backgroundColor;

ReactDOM.render((
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <span>
          <Header />
          <br />
          <AddTimeHeading />
          <br />
          <Paper style={style} zDepth={3}>
            <span>
              <Route path="/" component={Categories} />
              <Route path="/login" component={Login} />
              <Route path="/item/:itemId" component={Item}/>
            </span>
            <br />
          </Paper>
        </span>
      </Router>
    </MuiThemeProvider>
), document.getElementById('root'));
