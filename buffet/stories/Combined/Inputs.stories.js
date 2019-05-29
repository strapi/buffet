import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';
import { withStorySource } from '@storybook/addon-storysource';

import Inputs from '../../src/combined/Inputs';
import Presentation from '../ui/Presentation';

const form = {
  checkbox: {
    styleName: 'col-6',
    description: 'Select to set this field as required',
    label: 'Required field',
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
  datetime: {
    styleName: 'col-6',
    label: 'Date Time',
    description: 'Select a slot',
    type: 'datetime',
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
  select: {
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
    toggle: 'bool',
  };
  const type = radios('Types', types, 'text');
  const errors = {
    required: 'required',
    uppercase: 'uppercase',
    min: 'email',
  };

  const error = radios('Error', errors, 'text');
  const description =
    'This input is very usefull when you want to build dynamic form.';
  const [state, setState] = React.useState({});
  const handleChange = ({ target: { name, value } }) => {
    setState({ [name]: value });
  };

  return (
    <Presentation title="Input with Errors" description={description}>
      <>
        <section style={{ marginTop: 29 }}>
          <h2 style={{ marginBottom: 36 }}>
            Play with the knobs to interact with the component.
          </h2>
          <div>
            <Inputs
              name="input"
              type={type}
              {...form[type]}
              error={error}
              value={state.input}
              onChange={handleChange}
            />
          </div>
        </section>
        <section style={{ marginTop: 3 }}>
          <h2 style={{ marginBottom: 36 }}>Examples</h2>
          <form onSubmit={() => {}}>
            <div className="row">
              {Object.keys(form).map(input => (
                <div className={form[input].styleName} key={input}>
                  <Inputs
                    name={input}
                    {...form[input]}
                    onChange={handleChange}
                    value={state[input] || form[input].value}
                  />
                </div>
              ))}
            </div>
          </form>
        </section>
      </>
    </Presentation>
  );
}

const source = ``;

storiesOf('Custom', module)
  .addDecorator(withStorySource(source))
  .add('Inputs', () => <InputStory />);
