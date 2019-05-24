import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import Label from '../../src/components/Label';

const message = () => "I'm a label as function";

function LabelStory() {
  return (
    <div className="story">
      <div className="container">
        <h1>Label</h1>
        <section>
          <div className="row">
            <div className="col-12">
              <Label htmlFor="input" message="Input label" />
            </div>
          </div>
        </section>
        <section>
          <h2>Examples</h2>
          <div className="row">
            <div className="col-12">
              <Label htmlFor="input" message="I'm a label as string" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Label htmlFor="input">
                <span>I&apos;m a label as child</span>
              </Label>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Label htmlFor="input" message={message} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const source = `
import { Label } from 'buffet'; 

// Label string
<Label htmlFor="input" message="I'm a label as string" />

// Label node
<Label htmlFor="input">
  <span>I'm a label as child</span>
</Label>

// Label function
const message = () => "I'm a label as function";
<Label htmlFor="input" message={message} />`;

storiesOf('Components', module)
  .addDecorator(withStorySource(source))
  .add('Label', () => LabelStory());
