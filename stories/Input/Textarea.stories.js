import React from 'react';

import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Textarea from '../../src/components/Textarea';
import Form from '../components/Form';

class TextareaStory extends React.Component {
  state = {
    value: {
      textarea: '',
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
        <Textarea
          rows="4"
          name="textarea"
          placeholder="Write your little description here…"
          onChange={this.handleChange}
          value={value.inputText}
        />
      </Form>
    );
  }
}

storiesOf('Input|Input', module).add('Input|Textarea', () => <TextareaStory />);
