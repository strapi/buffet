import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Checkbox from '../../src/components/Checkbox';
import Form from '../components/Form';

class CheckboxStory extends React.Component {
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

storiesOf('Input|Input', module).add('Input|InputText|Checkbox', () => (
  <CheckboxStory />
));
