import React from 'react';

import Checkbox from '../../src/components/Checkbox';
import Form from '../components/Form';

export default class CheckboxStory extends React.Component {
  state = {
    value: {
      inputCheckbox: false,
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
        <Checkbox
          name="inputCheckbox"
          onChange={this.handleChange}
          value={value.inputCheckbox}
          message="Checkbox"
        />
      </Form>
    );
  }
}
