import React, { useReducer } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import reducer from '../utils/reducer';

import Form from '../../src/combined/Form';

const form = {
  firstName: {
    styleName: 'col-6',
    description: 'You should enter your firstname',
    label: 'First Name',
    placeholder: 'Vi',
    type: 'text',
    validations: {
      required: true,
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
      uppercase: true,
    },
  },
  birthdate: {
    styleName: 'col-6',
    label: 'Birth date',
    description: 'You should enter your birth date',
    type: 'date',
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
  password: {
    styleName: 'col-6',
    description: 'You should enter your password',
    label: 'Password',
    placeholder: '●●●●●●',
    type: 'password',
    validations: {
      required: true,
      min: 8,
    },
  },
  number: {
    styleName: 'col-6',
    description: 'You should enter how many children you have',
    label: 'Children',
    placeholder: '2',
    type: 'number',
    validations: {
      required: true,
      max: 99,
    },
  },
};

function FormStory() {
  const [values, dispatch] = useReducer(reducer, {});

  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: 'ON_CHANGE',
      key: name,
      value,
    });
  };

  const onSubmit = () => {
    console.log('HEY');
    console.log(values);
  };

  return (
    <div className="container">
      <Form
        form={form}
        onChange={handleChange}
        onSubmit={onSubmit}
        values={values}
      />
    </div>
  );
}

storiesOf('Combined|FormWithErrors', module).add('Simple', () => <FormStory />);
