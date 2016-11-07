import React from 'react';
import Items from './Items.js'
import {Tabs, Tab} from 'material-ui/Tabs';


export default class Categories extends React.Component {
    render() {
        return (
            <Tabs>
                <Tab label="Technology">
                    <Items/>
                </Tab>
                <Tab label="Lifestyle">
                    <Items />
                </Tab>
            </Tabs>        );
    }
}