import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Inputs } from '@buffetjs/custom';
import { Globe, GlobeCrossed } from '@buffetjs/icons';
import { isUndefined } from 'lodash';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';
import Subtitle from '../ui/Subtitle';

const Foo = () => (
  <div>This is a custom component that can be passed to the component</div>
);
const form = {
  checkbox: {
    styleName: 'col-6',
    description: 'Select to set this field as required',
    label: 'Required field',
    message: 'Check me',
    type: 'checkbox',
  },
  text: {
    styleName: 'col-6',
    description: 'You should enter your name',
    label: 'Name',
    labelIcon: {
      title: 'Not localized',
      icon: <GlobeCrossed />,
    },
    placeholder: 'Paul Bocuse',
    type: 'text',
    validations: {
      required: true,
      uppercase: true,
    },
  },
  time: {
    styleName: 'col-6',
    label: 'Time',
    description: 'Select a slot',
    labelIcon: {
      title: 'Localized',
      icon: <Globe />,
    },
    type: 'time',
    validations: {
      required: true,
    },
  },
  datepicker: {
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
  email1: {
    styleName: 'col-6',
    description: 'You should enter your email',
    label: 'Email',
    placeholder: 'hi@strapi.io',
    type: 'text',
    validations: {
      required: true,
    },
  },
  password: {
    styleName: 'col-6',
    description: 'You should enter your password',
    label: 'Password',
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
  textarea: {
    styleName: 'col-6',
    description: 'You should enter how many children you have',
    label: 'Children',
    placeholder: '2',
    type: 'textarea',
    validations: {},
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
    value: false,
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
  custom: {
    type: 'custom',
    validations: {},
  },
};

function InputStory() {
  const [state, setState] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Presentation
      title="Inputs"
      description="Use this component to build dynamic forms."
    >
      <>
        <section style={{ marginTop: 29 }}>
          <Subtitle style={{ marginBottom: 36 }}>Examples</Subtitle>
          <form onSubmit={() => {}}>
            <div className="row">
              {Object.keys(form).map(input => (
                <div className={form[input].styleName} key={input}>
                  <Inputs
                    customInputs={{ custom: Foo }}
                    name={input}
                    {...form[input]}
                    onChange={handleChange}
                    value={
                      isUndefined(state[input])
                        ? form[input].value
                        : state[input]
                    }
                    translatedErrors={{
                      date: 'This is not a date',
                      email: 'This is not an email',
                      string: 'This is not a string',
                      number: 'This is not a number',
                      json: 'This is not a JSON',
                      max: 'This is too high',
                      maxLength: 'This is too long',
                      min: 'This is too small',
                      minLength: 'This is too short',
                      required: 'This value is required',
                      regex: 'This does not match the format',
                      uppercase: 'This must be a upper case string',
                    }}
                  />
                </div>
              ))}
            </div>
          </form>
        </section>
        <section>
          <Pre>
            {`
import React, { useState } from 'react';
import { Inputs } from '@buffetjs/custom';
import { Globe } from '@buffetjs/icons';

const Foo = () => (
  <div>This is a custom component that can be passed to the component</div>
);

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
    labelIcon: {
      icon: <Globe />,
      title: 'Localized',
    },
    validations: {
      required: true,
      uppercase: true,
    },
  },
  datepicker: {
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

  // Add a custom type
  customInput: {
    type: 'custom',
    validations: {},
  },
};

function Example() {
  const [state, setState] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section style={{ marginTop: 3 }}>
      <h2 style={{ marginBottom: 36 }}>Examples</h2>
      <form onSubmit={() => {}}>
        <div className="row">
          {Object.keys(form).map(input => (
            <div className={form[input].styleName} key={input}>
              <Inputs
                customInputs={{ custom: Foo }} // Props to pass custom input type to the component
                name={input}
                {...form[input]}
                onChange={handleChange}
                translatedErrors={{
                  date: 'This is not a date',
                  email: 'This is not an email',
                  string: 'This is not a string',
                  number: 'This is not a number',
                  json: 'This is not a JSON',
                  max: 'This is too high',
                  maxLength: 'This is too long',
                  min: 'This is too small',
                  minLength: 'This is too short',
                  required: 'This value is required',
                  regex: 'This does not match the format',
                  uppercase: 'This must be a upper case string',
                }}
                value={state[input] || form[input].value}
              />
            </div>
          ))}
        </div>
      </form>
    </section>
  );
}
            `}
          </Pre>
        </section>
      </>
    </Presentation>
  );
}

storiesOf('Custom', module).add('Inputs', () => <InputStory />);
