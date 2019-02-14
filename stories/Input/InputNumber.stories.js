import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import InputNumber from '../../src/components/InputNumber';
import Form from '../components/Form';

class InputNumberStory extends React.Component {
  state = { value: { inputNumber: null } };

  handleChange = ({ target }) =>
    this.setState(prevState => ({
      value: { ...prevState.value, [target.name]: target.value },
    }));

  render() {
    const { value } = this.state;

    return (
      <Form>
        <InputNumber
          name="inputNumber"
          onChange={this.handleChange}
          value={value.inputNumber}
        />
      </Form>
    );
  }
}

storiesOf('Input|Input', module).add('Input|InputNumber', () => (
  <InputNumberStory />
));
