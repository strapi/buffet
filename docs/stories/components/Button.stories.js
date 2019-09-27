import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, radios } from '@storybook/addon-knobs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrash,
  faBaseballBall,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@buffetjs/core';
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
  const icon = <FontAwesomeIcon icon={faPlus} />;

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
import { Button } from '@buffetjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrash,
  faBaseballBall,
} from '@fortawesome/free-solid-svg-icons';

function Example() {
  return (
    <>
      <Button color="${color}" icon={<FontAwesomeIcon icon={faPlus} />} label="${label}" />

      <Button color="${color}" icon={<FontAwesomeIcon icon={faPlus} />}>${label}</Button>
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
            <Button
              type="submit"
              color="delete"
              icon={<FontAwesomeIcon icon={faTrash} />}
            >
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
            <Button
              type="submit"
              color="secondary"
              icon={<FontAwesomeIcon icon={faBaseballBall} />}
            >
              Text
            </Button>
          </div>
        </section>
      </>
    </Presentation>
  );
}

storiesOf('Components', module).add('Button', () => ButtonStory());
