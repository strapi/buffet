import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean, text, radios } from '@storybook/addon-knobs';

import Button from '../../src/components/Button';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function ButtonStory() {
  const colors = {
    primary: 'primary',
    secondary: 'secondary',
    cancel: 'cancel',
    delete: 'delete',
  };

  const label = text('Title', 'Save');
  const color = radios('Color', colors, 'primary');
  const icon = boolean('Icon', false);

  return (
    <Presentation
      title="Buttons"
      description="Checkout the knobs to interact with the component."
    >
      <>
        <section>
          <div className="btn-wrapper">
            <Button type="submit" color={color} icon={icon} label={label} />
          </div>
          <Pre>{`
import React from 'react';
import { Button } from 'buffetjs';

function Example() {
  return (
    <>
      <Button color="${color}" icon={${icon}} label="${label}" />

      <Button color="${color}" icon={${icon}}>${label}</Button>
    </>
  );
}
`}</Pre>
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 style={{ marginBottom: 12 }}>Examples</h2>
          <div className="btn-wrapper">
            <Button type="submit">Save</Button>
          </div>
          <div className="btn-wrapper">
            <Button type="submit" color="primary" icon>
              Add
            </Button>
          </div>
          <div className="btn-wrapper">
            <Button type="submit" color="delete">
              Delete
            </Button>
          </div>
          <div className="btn-wrapper">
            <Button type="submit" color="delete" icon>
              Delete
            </Button>
          </div>
          <div className="btn-wrapper">
            <Button type="submit" color="cancel">
              Cancel
            </Button>
          </div>
          <div className="btn-wrapper">
            <Button type="submit" color="secondary">
              Text
            </Button>
          </div>
          <div className="btn-wrapper">
            <Button type="submit" color="secondary" icon>
              Text
            </Button>
          </div>
        </section>
      </>
    </Presentation>
  );
}

storiesOf('Components', module).add('Button', () => ButtonStory());
