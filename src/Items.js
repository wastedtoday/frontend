import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';



const Items = (props) => (
        <List>
            <ListItem
                onClick={props.onItemClick}
                leftAvatar={<Avatar src="https://bower.io/img/bower-logo.png" />}
                rightIcon={<span style={{overflow:'hidden'}}>20 hours</span>}
                primaryText="Bower"
                secondaryText="https://bower.io"
            />
        </List>

);

export default Items;