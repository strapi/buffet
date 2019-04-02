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

    const options = [
      { value: 'option1', label: 'option 1' },
      { value: 'option2', label: 'option 2' },
      { value: 'option3', label: 'option 3' },
    ];

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
