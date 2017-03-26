import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

const buttonStyle = {
  margin: 12,
};

class Item extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          currentName: '',
          currentComment: '',
          comments: []
        }
    }

    handleUpdateInput(name) {
      return function(event, newValue) {
        if (name === 'name') {
          this.setState({
            currentName: newValue
          });
        }
        if (name === 'comment') {
          this.setState({
            currentComment: newValue
          });
        }
      }
    }

    componentDidMount () {
      const ref = firebase.database().ref("comments").child(this.props.match.params.itemKey);
      this.bindAsArray(ref, 'comments')
    }

    submitComment() {
      this.firebaseRefs['comments'].push({
        name: this.state.currentName,
        comment: this.state.currentComment,
        timestamp: new Date()
      });
      this.setState({ // todo: doesn't work, need to bind currentComment to textfield
        currentComment: ''
      });
    }

    render() {
      return (
        <span>
          <List>
            {this.state.comments.map(comment =>
                <ListItem
                key={comment['.key']}
                primaryText={comment.name}
                secondaryText={comment.comment}
                insetChildren={true}
                rightAvatar={<Avatar src={"https://randomuser.me/api/portraits/thumb/men/" + Math.floor(Math.random() * 80) + ".jpg"} />}
                />
            )}
          </List>
          <span>
            <TextField
              hintText="Name"
              onChange={this.handleUpdateInput('name').bind(this)}
            />
            <br />
            <TextField
              hintText="Comment"
              onChange={this.handleUpdateInput('comment').bind(this)}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={buttonStyle} onClick={this.submitComment.bind(this)} />
          </span>
        </span>
      );
    }
}

reactMixin(Item.prototype, ReactFireMixin)

export default Item;
