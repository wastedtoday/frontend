import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router'

const Items = (props) => (
        <List>
            <Link to={'/item/1'}>
            <ListItem
                leftAvatar={<Avatar src="https://bower.io/img/bower-logo.png" />}
                rightIcon={<span style={{overflow:'hidden'}}>20 hours</span>}
                primaryText="Bower"
                secondaryText="https://bower.io"
            />
            </Link>
        </List>
);

export default Items;