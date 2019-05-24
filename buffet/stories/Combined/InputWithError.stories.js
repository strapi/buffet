import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';
import { withStorySource } from '@storybook/addon-storysource';

import InputWithError from '../../src/combined/InputWithError';
import Form from '../../src/components/Form';

const form = {
  checkbox: {
    styleName: 'col-6',
    description: 'Checkbox input',
    label: 'First Name',
    placeholder: 'Vi',
    type: 'checkbox',
  },
  text: {
    styleName: 'col-6',
    description: 'You should enter your firstname',
    label: 'First Name',
    placeholder: 'Viky',
    type: 'text',
    validations: {
      required: true,
      uppercase: true,
    },
  },
  date: {
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
  enum: {
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

function InputCompo(props) {
  const [val, setValue] = useState('');

  return (
    <InputWithError
      {...props}
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      value={val}
    />
  );
}

function InputStory() {
  const types = {
    checkbox: 'checkbox',
    date: 'date',
    email: 'email',
    enum: 'enum',
    number: 'number',
    password: 'password',
    search: 'search',
    select: 'select',
    text: 'text',
    textarea: 'textarea',
    time: 'time',
    toggle: 'toggle',
  };

  const type = radios('Types', types, 'text');

  return (
    <div className="story">
      <div className="container">
        <h1>Input with error</h1>
        <section>
          <h2>Play with the knobs to interact with the compo</h2>
          <div>
            <InputCompo name="input" type={type} {...form[type]} />
          </div>
        </section>
        <section>
          <h2>Examples</h2>
          <Form onSubmit={() => {}}>
            <div className="row">
              {Object.keys(form).map(input => (
                <div className={form[input].styleName} key={input}>
                  <InputCompo name={input} {...form[input]} />
                </div>
              ))}
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
}

const source = ``;

storiesOf('Combined', module)
  .addDecorator(withStorySource(source))
  .add('InputWithError', () => InputStory());
