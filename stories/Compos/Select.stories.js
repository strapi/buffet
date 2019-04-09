import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Select from '../../src/components/Select';

const defaultProps = {
  name: 'select',
  options: ['first option', 'second option'],
};

class SelectStory extends React.Component {
  state = {
    value: {
      select: '',
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
      <Select
        {...defaultProps}
        onChange={this.handleChange}
        value={value.select}
      />
    );
  }
}

storiesOf('Components|Select', module).add('Simple', () => <SelectStory />);
