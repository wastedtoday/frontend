import React from 'react';
import Items from './Items.js'
import {Tabs, Tab} from 'material-ui/Tabs';

const Categories = React.createClass({
    render() {
        return (
            <Tabs>
                <Tab label="Technology">
                    <Items/>
                </Tab>
                <Tab label="Lifestyle">
                    <Items />
                </Tab>
            </Tabs>
        );
    }
});

export default Categories;
