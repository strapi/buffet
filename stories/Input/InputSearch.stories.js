import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import InputBase from '../../src/components/InputBase';
import Form from '../components/Form';

class InputSearchStory extends React.Component {
  state = {
    value: {
      inputText: '',
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
        <InputBase
          type="search"
          name="inputText"
          placeholder="Tap something to search"
          onChange={this.handleChange}
          value={value.inputText}
        />
      </Form>
    );
  }
}

storiesOf('Input|Input', module).add('Input|InputText|Search', () => (
  <InputSearchStory />
));
