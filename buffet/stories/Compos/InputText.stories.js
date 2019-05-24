import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';
import { withStorySource } from '@storybook/addon-storysource';

import Input from '../../src/components/Input';

function InputCompo(props) {
  const [val, setValue] = useState('');

  return (
    <Input
      {...props}
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      value={val}
    />
  );
}

function InputTextStory() {
  const types = {
    text: 'text',
    search: 'search',
    email: 'email',
    password: 'password',
  };
  const type = radios('Types', types, 'text');

  const defaultProps = {
    placeholder: 'Tap something…',
    name: 'input',
  };

  return (
    <div className="story">
      <div className="container">
        <h1>Input Text</h1>
        <section>
          <h2>Play with the knobs to interact with the compo</h2>
          <div className="row">
            <div className="col-12">
              <InputCompo {...defaultProps} type={type} />
            </div>
          </div>
        </section>
        <section>
          <h2>Examples</h2>
          <div className="row">
            <div className="col-6">
              <InputCompo name="lastname" placeholder="Lastname" type="text" />
            </div>
            <div className="col-6">
              <InputCompo
                name="search"
                placeholder="Tap something to search…"
                type="search"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <InputCompo
                name="email"
                placeholder="Write your email here…"
                type="email"
              />
            </div>
            <div className="col-6">
              <InputCompo
                name="password"
                placeholder="●●●●●●●●"
                type="password"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const source = `
import React, { useState } from 'react';
import { Input } from 'buffet'; 

// Input Text
function InputTextStory(props) {
  const [val, setValue] = useState('');

  return (
    <Input
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      placeholder="Lastname"
      type="text"
      value={val}
    />
  );
}

// Input Search
function InputTextStory(props) {
  const [val, setValue] = useState('');

  return (
    <Input
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      placeholder="Tap something to search…"
      type="search"
      value={val}
    />
  );
}

// Input Email
function InputTextStory(props) {
  const [val, setValue] = useState('');

  return (
    <Input
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      placeholder="Write your email here…"
      type="email"
      value={val}
    />
  );
}

// Input Password
function InputTextStory(props) {
  const [val, setValue] = useState('');

  return (
    <Input
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      placeholder="●●●●●●●●"
      type="password"
      value={val}
    />
  );
}
`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('InputText', () => InputTextStory());
