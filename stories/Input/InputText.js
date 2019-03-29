import React from 'react';

import InputBase from '../../src/components/InputBase';
import Form from '../components/Form';

export default class InputTextStory extends React.Component {
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
            type="text"
            name="inputText"
            placeholder="Text"
            onChange={this.handleChange}
            value={value.inputText}
          />
        </div>
      </Form>
    );
  }
}
