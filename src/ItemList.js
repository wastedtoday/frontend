import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

class ItemList extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    const ref = firebase.database().ref("items").orderByKey().limitToLast(10);
    this.bindAsArray(ref, 'items')
    /*
    this.firebaseRefs['items'].push({
      test: "test"
    });
    */
  }

  render() {
    let clonedArray = [...this.state.items]; // Weird things happen if you don't clone the object

    return (
        <List>
          {clonedArray.reverse().map(item =>
            <Link to={"/item/" + item['.key']} key={item['.key']}>
              <ListItem
              primaryText={"Someone wasted " + item.hours + " " + (item.hours === 1 ? "hour" : "hours") + " on " + item.thing}
              secondaryText={item.description}
              insetChildren={true}
              rightAvatar={<Avatar src={"https://randomuser.me/api/portraits/thumb/men/" + Math.floor(Math.random() * 80) + ".jpg"} />}
              />
            </Link>
          )}
        </List>
    );
  }
}

reactMixin(ItemList.prototype, ReactFireMixin)

export default ItemList;
