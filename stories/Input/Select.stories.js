import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import Select from '../../src/components/Select';
import Form from '../components/Form';

class SelectStory extends React.PureComponent {
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

storiesOf('Input|Input', module).add('Input|Select', () => <SelectStory />);
