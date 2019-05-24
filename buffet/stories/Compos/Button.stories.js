import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean, text, radios } from '@storybook/addon-knobs';
import { withStorySource } from '@storybook/addon-storysource';

import Button from '../../src/components/Button';

function ButtonStory() {
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
    <div className="story">
      <div className="container">
        <h1>Button</h1>
        <section>
          <h2>Play with the knobs to interact with the compo</h2>
          <div className="btn-wrapper">
            <Button type="submit" color={color} icon={icon} label={title} />
          </div>
        </section>
        <section>
          <h2>Examples</h2>
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
        </section>
      </div>
    </div>
  );
}

const source = `
import { Button } from 'buffet'; 

<Button type="submit">
  Save
</Button>

<Button type="submit" color="primary" icon>
  Add
</Button>

<Button type="submit" color="delete">
  Delete
</Button>

<Button type="submit" color="delete" icon>
  Delete
</Button>

<Button type="submit" color="cancel">
  Cancel
</Button>

<Button type="submit" color="secondary">
  Text
</Button>`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Button', () => ButtonStory());
