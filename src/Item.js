import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';


export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {item: {comments:[]}};

        fetch('http://wasted.today/server.api/item/' + this.props.params.itemId)
            .then(result=>result.json())
            .then(item=>this.setState({item}));
    }


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <h1>{this.state.item.name}</h1>
                <h1>wasted: {this.state.item.name}</h1>

                <List>
                    {
                        this.state.item.comments.map(comment=>
                        <ListItem key={comment.id}
                          primaryText={comment.username}
                          secondaryText={comment.text}
                        />
                    )}
                </List>

            </div>
        );
    }
}