import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { AttributeIcon } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function AttributeIconStory() {
  return (
    <Presentation
      title="AttributeIcon"
      description="A component to represent a field type"
    >
      <div
        style={{
          paddingTop: 7,
          marginBottom: 23,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {[
          'boolean',
          'component',
          'contentType',
          'date',
          'dynamiczone',
          'email',
          'enum',
          'json',
          'media',
          'number',
          'password',
          'relation',
          'richtext',
          'singleType',
          'text',
          'uid',
        ].map(attr => (
          <AttributeIcon key={attr} type={attr} />
        ))}
      </div>
      <Pre>
        {`
import React from 'react';
import { AttributeIcon } from '@buffetjs/core';

const Example = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
    }}
    >
      {[
        'boolean',
        'component',
        'contentType',
        'date',
        'dynamiczone',
        'email',
        'enum',
        'json',
        'media',
        'number',
        'password',
        'relation',
        'richtext',
        'singleType',
        'text',
        'uid',
      ].map(attr => (
        <AttributeIcon key={attr} type={attr} />
      ))}
    </div>
);
`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('AttributeIcon', () => (
  <AttributeIconStory />
));
