import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router'

export default class Items extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List>
                {this.props.items.map(item=>
                    <Link to={'/item/' + item.id} key={item.id}>
                        <ListItem
                            leftAvatar={<Avatar src={item.imageUrl} />}
                            rightIcon={<span style={{overflow:'hidden'}}>20 hours</span>}
                            primaryText={item.name}
                            secondaryText={item.referenceUrl}
                        />
                    </Link>
                )}
            </List>
        );
    }
}