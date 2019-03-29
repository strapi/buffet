import React from 'react';

import Textarea from '../../src/components/Textarea';
import Form from '../components/Form';

export default class TextareaStory extends React.Component {
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
        <div className="col-6">
          <Textarea
            rows="4"
            name="textarea"
            placeholder="Write your little description here…"
            onChange={this.handleChange}
            value={value.textarea}
          />
        </div>
      </Form>
    );
  }
}
