import React, { useReducer } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import InputWithError from '../../src/combined/InputWithError';
import Form from '../../src/components/Form';

import reducer from '../utils/reducer';

const form = {
  firstName: {
    styleName: 'col-6',
    description: 'You should enter your name',
    label: 'First Name',
    placeholder: 'Vi',
    type: 'text',
    validations: {
      required: true,
      uppercase: true,
    },
  },
  lastName: {
    styleName: 'col-6',
    description: 'You should enter your lastname',
    label: 'Last Name',
    placeholder: 'Ky',
    type: 'text',
    validations: {
      required: true,
    },
  },
  email: {
    styleName: 'col-6',
    description: 'You should enter your email',
    label: 'Email',
    placeholder: 'hi@strapi.io',
    type: 'email',
    validations: {
      required: true,
    },
  },
};

function InputStory() {
  const [values, dispatch] = useReducer(reducer, {});

  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: 'ON_CHANGE',
      key: name,
      value,
    });
  };

  const onSubmit = () => {
    console.log(values);
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <div className="row">
          {Object.keys(form).map(input => (
            <div className={form[input].styleName} key={input}>
              <InputWithError
                {...form[input]}
                name={input}
                onChange={handleChange}
                value={values[input] || ''}
              />
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
}

storiesOf('Combined|InputWithError', module).add('Simple', () => (
  <InputStory />
));
