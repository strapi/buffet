import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';

import { InputText } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';
import Subtitle from '../ui/Subtitle';

function InputCompo(props) {
  const [val, setValue] = useState('');

  return (
    <InputText
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
    placeholder: 'Type something…',
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
          <Subtitle style={{ marginBottom: 10 }}>Examples</Subtitle>
          <div className="row">
            <div className="col-6">
              <InputCompo name="lastname" placeholder="Last name" type="text" />
            </div>
            <div className="col-6">
              <InputCompo
                name="search"
                placeholder="Type something to search…"
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
        <section>
          <Pre>
            {`
import React, { useState } from 'react';
import { InputText } from '@buffetjs/core';

function Example(props) {
  const [val, setValue] = useState('');

  return (
    <InputText
      name="input"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
      placeholder="Lastname"
      type="${type}"
      value={val}
    />
  );
}
            `}
          </Pre>
        </section>
      </Presentation>
    </>
  );
}

storiesOf('Components', module).add('InputText', () => InputTextStory());
