import React from 'react';

import InputBase from '../../src/components/InputBase';
import Form from '../components/Form';

export default class InputEmailStory extends React.Component {
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
            type="email"
            name="inputText"
            placeholder="john.doe@strapi.io"
            onChange={this.handleChange}
            value={value.inputText}
          />
        </div>
      </Form>
    );
  }
}
