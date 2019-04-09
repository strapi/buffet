import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputNumber from '../../src/components/InputNumber';

const defaultProps = {
  name: 'input',
};

class InputNumberStory extends React.Component {
  state = {
    value: {
      input: null,
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
      <InputNumber
        {...defaultProps}
        onChange={this.handleChange}
        value={value.input}
      />
    );
  }
}

storiesOf('Components|InputNumber', module).add('Default', () => (
  <InputNumberStory />
));
