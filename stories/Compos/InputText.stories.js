import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputText from '../../src/components/InputText';

const defaultProps = {
  placeholder: 'Firstname',
  name: 'input',
  type: 'text',
};

class InputTextStory extends React.Component {
  state = {
    value: {
      input: '',
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
      <InputText
        {...defaultProps}
        onChange={this.handleChange}
        value={value.input}
      />
    );
  }
}

storiesOf('Components|InputText', module).add('Default', () => (
  <InputTextStory />
));
