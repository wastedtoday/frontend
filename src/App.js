import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Items from './Items.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import {cyan500, grey50, darkBlack} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';

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
document.body.style.fontWeight = 300;


class App extends Component {

    onItemClick(){
        alert('ok');
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <Header text="This ist the header text"/>

                    <Paper style={{width: '80%', display: 'inline-block'}} zDepth={3}>

                        <Tabs>
                            <Tab label="Technology">
                                <Items onItemClick={this.onItemClick} />
                            </Tab>
                            <Tab label="Lifestyle">
                                <Items />
                            </Tab>
                        </Tabs>

                    </Paper>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
