import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

const style = {
  'borderRadius': '4px',
  'display': 'block',
  'height': '50px',
  'lineHeight': '40px',
  'marginBottom': '8px',
  'outline': 0,
  'padding': '0 16px 0 16px',
  'width': '700px',
  'backgroundColor': 'rgba(0,0,0,0.4)',
  'border': 'none',
  'fontSize': 'x-large'
}

const textStyle = {
  'color': '#fff',
}

const buttonStyle = {
  margin: 12,
};

class Items extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
			hours: 1,
      dataSource: [],
      items: []
		};
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

  handleChange = (event) => {
		if (event.target.name === 'hours' && parseFloat(event.target.value) < 24) {
			let value = event.target.value === '' ? 0 : parseFloat(event.target.value);
			this.setState({
				hours: value
			});
		} else if (event.target.name === 'item') {
			this.setState({
				item: event.target.value
			});
		}
	};

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });

    this.setState({
      thing: value
    })
  };

  submitForm() {
    this.firebaseRefs['items'].push({
      hours: this.state.hours,
      thing: this.state.thing,
      description: ""
    });
  }

  render() {
    return (
      <div>
        Today I wasted
        <input name="hours" className="input-hours" type="number" value={this.state.hours} onChange={this.handleChange} />
        { this.state.hours === 1 ? 'hour ' : 'hours ' }
        on

        <div>
          <AutoComplete
            style={style}
            textFieldStyle={textStyle}
            hintText="Type anything"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
        </div>

        <RaisedButton label="Submit" primary={true} style={buttonStyle} onClick={this.submitForm.bind(this)} />
      </div>
    );
  }
}

reactMixin(Items.prototype, ReactFireMixin)

export default Items;
