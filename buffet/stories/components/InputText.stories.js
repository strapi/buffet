import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';
import { withStorySource } from '@storybook/addon-storysource';

import Input from '../../src/components/InputText';
import Presentation from '../ui/Presentation';

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
    <>
      <Presentation
        title="InputText"
        description="Play with the knobs to interact with the component."
      >
        <section>
          <div>
            <InputCompo type={type} {...defaultProps} />
          </div>
        </section>
        <section style={{ marginTop: 30 }}>
          <h2 style={{ marginBottom: 10 }}>Examples</h2>
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
              <InputCompo name="password" placeholder="" type="password" />
            </div>
          </div>
        </section>
      </Presentation>
    </>
  );
}

const source = `
import React, { useState } from 'react';
import { Input } from 'buffet';

function Example(props) {
  const [val, setValue] = useState('');

  return (
    <Input
      name="input"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      placeholder="Lastname"
      type="search"
      value={val}
    />
  );
}
`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('InputText', () => InputTextStory());
