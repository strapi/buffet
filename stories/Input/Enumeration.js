import React from 'react';

import Enumeration from '../../src/components/Enumeration';
import Form from '../components/Form';

export default class EnumerationStory extends React.Component {
  state = {
    value: {
      inputEnum: '',
    },
  };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      value: { ...prevState.value, [target.name]: target.value },
    }));
  };

  render() {
    const { value } = this.state;
    const options = ['first', 'second', 'third'];

    return (
      <Form>
        <Enumeration
          name="inputEnum"
          onChange={this.handleChange}
          value={value.inputEnum}
          options={options}
        />
      </Form>
    );
  }
}
