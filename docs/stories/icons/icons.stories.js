import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import {
  Grab,
  GrabLarge,
  Pencil,
  Remove,
  Calendar,
  Bool,
  Component,
  DynamicZone,
  Email,
  Enumeration,
  Json,
  Media,
  NumberIcon,
  Password,
  Relation,
  RichText,
  Text,
  Uid,
} from '@buffetjs/icons';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const IconsStory = () => {
  const icons = [
    {
      name: 'bool',
      Compo: Bool,
    },
    {
      name: 'calendar',
      Compo: Calendar,
    },
    {
      name: 'component',
      Compo: Component,
    },
    {
      name: 'dynamic-zone',
      Compo: DynamicZone,
    },
    {
      name: 'email',
      Compo: Email,
    },
    {
      name: 'enum',
      Compo: Enumeration,
    },
    {
      name: 'grab',
      Compo: Grab,
    },
    {
      name: 'grab-large',
      Compo: GrabLarge,
    },
    {
      name: 'json',
      Compo: Json,
    },
    {
      name: 'media',
      Compo: Media,
    },
    {
      name: 'number',
      Compo: NumberIcon,
    },
    {
      name: 'password',
      Compo: Password,
    },
    {
      name: 'relation',
      Compo: Relation,
    },
    {
      name: 'text',
      Compo: Text,
    },
    {
      name: 'rich-text',
      Compo: RichText,
    },
    {
      name: 'uid',
      Compo: Uid,
    },

    {
      name: 'pencil',
      Compo: Pencil,
    },
    {
      name: 'remove',
      Compo: Remove,
    },
  ];

  return (
    <Presentation
      title="All icons"
      description="Icons used in Strapi's administration panel."
    >
      <div className="container-fluid" style={{ marginBottom: 30 }}>
        <div className="row">
          {icons.map(({ name, Compo }) => (
            <div key={name} className="col-4" style={{ marginBottom: 10 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContendt: 'space-between',
                }}
              >
                <div style={{ width: 50 }}>
                  <Compo fill="#b3b5b9" rectFill="#b3b5b9" pathFill="#fff" />
                </div>
                <span>&nbsp; {name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pre>
        {`
import { GrabLarge } from '@buffetjs/icons';

const icons = [
  {
    name: 'bool',
    Compo: Bool,
  },
  {
    name: 'calendar',
    Compo: Calendar,
  },
  {
    name: 'component',
    Compo: Component,
  },
  {
    name: 'dynamic-zone',
    Compo: DynamicZone,
  },
  {
    name: 'email',
    Compo: Email,
  },
  {
    name: 'enum',
    Compo: Enumeration,
  },
  {
    name: 'grab',
    Compo: Grab,
  },
  {
    name: 'grab-large',
    Compo: GrabLarge,
  },
  {
    name: 'json',
    Compo: Json,
  },
  {
    name: 'media',
    Compo: Media,
  },
  {
    name: 'number',
    Compo: NumberIcon,
  },
  {
    name: 'password',
    Compo: Password,
  },
  {
    name: 'relation',
    Compo: Relation,
  },
  {
    name: 'text',
    Compo: Text,
  },
  {
    name: 'rich-text',
    Compo: RichText,
  },
  {
    name: 'uid',
    Compo: Uid,
  },

  {
    name: 'pencil',
    Compo: Pencil,
  },
  {
    name: 'remove',
    Compo: Remove,
  },
];

const Example = () => (
  icons.map(({name, Compo}) => (
    <Compo
      key={name}
      fill="#b3b5b9" // Change the fill of most icons
      rectFill="#b3b5b9" // Change the fill for the Bool icon
      pathFill="#fff" // Change the fill for the Bool icon
    />
  )
);
        `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Icons', module).add('All icons', () => <IconsStory />);
