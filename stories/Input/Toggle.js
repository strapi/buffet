import React from 'react';

import Toggle from '../../src/components/Toggle';
import Form from '../components/Form';

export default class ToggleStory extends React.Component {
  state = {
    value: {
      inputToggle: false,
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
        <Toggle
          name="inputToggle"
          onChange={this.handleChange}
          value={value.inputToggle}
          message="Toggle"
        />
      </Form>
    );
  }
}
