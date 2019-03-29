import React from 'react';

import InputNumber from '../../src/components/InputNumber';
import Form from '../components/Form';

export default class InputNumberStory extends React.Component {
  state = { value: { inputNumber: null } };

  handleChange = ({ target }) =>
    this.setState(prevState => ({
      value: { ...prevState.value, [target.name]: target.value },
    }));

  render() {
    const { value } = this.state;

    return (
      <Form>
        <div className="col-6">
          <InputNumber
            name="inputNumber"
            onChange={this.handleChange}
            value={value.inputNumber}
          />
        </div>
      </Form>
    );
  }
}
