import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

import Button from '../../src/components/Button';

function CombinedList() {
  const colors = {
    primary: 'primary',
    secondary: 'secondary',
    cancel: 'cancel',
    delete: 'delete',
  };

  const title = text('Title', 'Save');
  const color = radios('Color', colors, 'primary');
  const icon = boolean('Icon', false);

  return (
    <>
      <div className="story">
        <h1>Button</h1>
        <section>
          <h2>Play with the knobs to interact with the compo</h2>
          <Button type="submit" color={color} icon={icon} label={title} />
        </section>
        <section>
          <h2>Examples</h2>
          <div>
            <Button type="submit">Save</Button>
          </div>
          <div>
            <Button type="submit" color="primary" icon>
              Add
            </Button>
          </div>
          <div>
            <Button type="submit" color="delete">
              Delete
            </Button>
          </div>
          <div>
            <Button type="submit" color="delete" icon>
              Delete
            </Button>
          </div>
          <div>
            <Button type="submit" color="cancel">
              Cancel
            </Button>
          </div>
          <div>
            <Button type="submit" color="secondary">
              Text
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => CombinedList());
