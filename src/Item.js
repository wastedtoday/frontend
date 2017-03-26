import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

class Item extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    const ref = firebase.database().ref("items");
    this.bindAsArray(ref, 'items')
    /*
    this.firebaseRefs['items'].push({
      test: "test"
    });
    */
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

    console.log(this.state.items);

    return (
      <div>
        <List>

        </List>
        {this.state.items.map(item =>
          <Link to={"/item/" + item['.key']}>
            <ListItem
            primaryText={"Someone wasted " + item.hours + " on " + item.thing}
            secondaryText={item.description}
            insetChildren={true}
            rightAvatar={<Avatar src={"https://randomuser.me/api/portraits/thumb/men/" + Math.floor(Math.random() * 80) + ".jpg"} />}
            />
          </Link>
        )}
      </div>
    );
  }
}

reactMixin(Item.prototype, ReactFireMixin)

export default Item;
