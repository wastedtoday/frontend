import React from 'react';
import Items from './Items.js'
import {Tabs, Tab} from 'material-ui/Tabs';


export default class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {categories: []};

        fetch(`http://wasted.today/server.api/category/`)
            .then(result=>result.json())
            .then(categories=>this.setState({categories}));
    }


    render() {
        return (
            <Tabs>
                {this.state.categories.map(category=>
                    <Tab label={category.name} key={category.id}>
                        <Items items={category.items}/>
                    </Tab>
                )}
            </Tabs>
        );
    }
}