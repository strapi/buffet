import React from 'react';

import InputBase from '../../src/components/InputBase';
import Form from '../components/Form';

export default class InputSearchStory extends React.Component {
  state = {
    value: {
      inputText: '',
    },
  };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      value: { ...prevState.value, [target.name]: target.value },
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <Form>
        <div className="col-6">
          <InputBase
            type="search"
            name="inputText"
            placeholder="Tap something to search"
            onChange={this.handleChange}
            value={value.inputText}
          />
        </div>
      </Form>
    );
  }
}
