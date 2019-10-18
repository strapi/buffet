import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Grab, GrabLarge, Pencil, Remove } from '@buffetjs/icons';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const IconsStory = () => {
  const icons = [
    {
      name: 'grab',
      Compo: Grab,
    },
    {
      name: 'grab-large',
      Compo: GrabLarge,
    },
    {
      name: 'pencil',
      Compo: Pencil,
    },
    {
      name: 'Remove',
      Compo: Remove,
    },
  ];

  return (
    <Presentation
      title="All icons"
      description="Icons targeted from Strapi's Administration Panel."
    >
      <div className="container-fluid" style={{ marginBottom: 30 }}>
        <div className="row">
          {icons.map(({ name, Compo }) => (
            <div key={name} className="col-3">
              <Compo />
              &nbsp; {name}
            </div>
          ))}
        </div>
      </div>
      <Pre>
        {`
import { GrabLarge } from '@buffetjs/icons';

const Example = () => (<GrabLarge />)
        `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Icons', module).add('All icons', () => <IconsStory />);
