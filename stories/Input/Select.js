import React from 'react';

import Select from '../../src/components/Select';
import Form from '../components/Form';

export default class SelectStory extends React.PureComponent {
  state = {
    value: {
      inputSelect: '',
    },
  };

  handleChange = ({ target }) =>
    this.setState(prevState => ({
      value: { ...prevState.value, [target.name]: target.value },
    }));

  render() {
    const { value } = this.state;
    const options = ['first', 'second'];

    return (
      <Form>
        <Select
          name="inputSelect"
          onChange={this.handleChange}
          options={options}
          value={value.inputSelect}
        />
      </Form>
    );
  }
}
