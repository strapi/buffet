import React, { useReducer } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
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
    value: 'User',
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
  birthtime: {
    styleName: 'col-6',
    label: 'Birth time',
    description: 'You should enter your birth hour',
    type: 'time',
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
  role: {
    styleName: 'col-6',
    description: 'Choose a role',
    label: 'Role',
    type: 'select',
    options: ['Administrator', 'User'],
    value: 'User',
  },
  icon: {
    styleName: 'col-6',
    description: 'Add an icon',
    label: 'Icon',
    type: 'bool',
  },
  options: {
    styleName: 'col-6',
    description: 'Add an icon',
    label: 'Options',
    type: 'enum',
    options: [
      { value: 'option1', label: 'option 1' },
      { value: 'option2', label: 'option 2' },
    ],
    value: 'option1',
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
    console.log(values);
  };

  return (
    <div className="story">
      <div className="container">
        <h1>Form</h1>
        <Form
          form={form}
          onChange={handleChange}
          onSubmit={onSubmit}
          values={values}
        />
      </div>
    </div>
  );
}

const source = ``;

storiesOf('Combined', module)
  .addDecorator(withStorySource(source))
  .add('Form', () => <FormStory />);
