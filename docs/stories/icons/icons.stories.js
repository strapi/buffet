import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import {
  Arrow,
  Bool,
  Carret,
  Calendar,
  Component,
  ContentType,
  Dots,
  Duplicate,
  DynamicZone,
  Email,
  Enumeration,
  Envelope,
  Fail,
  Globe,
  GlobeCrossed,
  Grab,
  GrabLarge,
  Json,
  Media,
  NumberIcon,
  Password,
  Pencil,
  Pending,
  Play,
  Plus,
  Relation,
  Sync,
  Remove,
  RichText,
  SingleType,
  Success,
  Text,
  Uid,
} from '@buffetjs/icons';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const IconsStory = () => {
  const icons = [
    {
      name: 'arrow',
      Compo: Arrow,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'bool',
      Compo: Bool,
      props: {
        rectFill: '#b3b5b9',
        pathFill: '#fff',
      },
    },
    {
      name: 'carret',
      Compo: Carret,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'calendar',
      Compo: Calendar,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'component',
      Compo: Component,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'content-type',
      Compo: ContentType,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'dots',
      Compo: Dots,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'duplicate',
      Compo: Duplicate,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'dynamic-zone',
      Compo: DynamicZone,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'email',
      Compo: Email,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'enum',
      Compo: Enumeration,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'envelope',
      Compo: Envelope,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'fail',
      Compo: Fail,
      props: {
        fill: '#b3b5b9',
      },
      width: '55px',
      height: '55px',
    },
    {
      name: 'globe',
      Compo: Globe,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'globeCrossed',
      Compo: GlobeCrossed,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'grab',
      Compo: Grab,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'grab-large',
      Compo: GrabLarge,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'json',
      Compo: Json,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'media',
      Compo: Media,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'number',
      Compo: NumberIcon,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'password',
      Compo: Password,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'pending',
      Compo: Pending,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'relation',
      Compo: Relation,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'text',
      Compo: Text,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'rich-text',
      Compo: RichText,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'uid',
      Compo: Uid,
      props: {
        fill: '#b3b5b9',
      },
    },

    {
      name: 'pencil',
      Compo: Pencil,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'sync',
      Compo: Sync,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'remove',
      Compo: Remove,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'plus',
      Compo: Plus,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'play',
      Compo: Play,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'single-type',
      Compo: SingleType,
      props: {
        fill: '#b3b5b9',
      },
    },
    {
      name: 'success',
      Compo: Success,
      props: {
        fill: '#b3b5b9',
      },
    },
  ];

  return (
    <Presentation
      title="All icons"
      description="Icons used in Strapi's administration panel."
    >
      <div className="container-fluid" style={{ marginBottom: 30 }}>
        <div className="row">
          {icons.map(({ name, Compo, props }) => (
            <div key={name} className="col-4" style={{ marginBottom: 10 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContendt: 'space-between',
                }}
              >
                <div style={{ width: 50 }}>
                  <Compo {...props} />
                </div>
                <span>&nbsp; {name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pre>
        {`
import {
  Arrow,
  Bool,
  Carret
  Calendar,
  Component,
  ContentType,
  Dots,
  Duplicate,
  DynamicZone,
  Email,
  Enumeration,
  Envelope,
  Fail,
  Grab,
  GrabLarge,
  Json,
  Media,
  NumberIcon,
  Password,
  Pencil,
  Pending,
  Play,
  Plus,
  Relation,
  Sync,
  Remove,
  RichText,
  SingleType,
  Success,
  Text,
  Uid,
} from '@buffetjs/icons';

const icons = [
  {
    name: 'arrow',
    Compo: Arrow,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'bool',
    Compo: Bool,
    props: {
      rectFill: '#b3b5b9',
      pathFill: '#fff',
    },
  },
  {
    name: 'carret',
    Compo: Carret,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'calendar',
    Compo: Calendar,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'component',
    Compo: Component,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'content-type',
    Compo: ContentType,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'dots',
    Compo: Dots,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'duplicate',
    Compo: Duplicate,
    props: {
      fill: '#b3b5b9',
    }
  },
  {
    name: 'dynamic-zone',
    Compo: DynamicZone,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'email',
    Compo: Email,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'enum',
    Compo: Enumeration,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'envelope',
    Compo: Envelope,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'fail',
    Compo: Fail,
    props: {
      fill: '#b3b5b9',
    },
    width: '55px',
    height: '55px',
  },
  {
    name: 'grab',
    Compo: Grab,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'grab-large',
    Compo: GrabLarge,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'json',
    Compo: Json,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'media',
    Compo: Media,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'number',
    Compo: NumberIcon,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'password',
    Compo: Password,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'pending',
    Compo: Pending,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'relation',
    Compo: Relation,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'text',
    Compo: Text,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'rich-text',
    Compo: RichText,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'uid',
    Compo: Uid,
    props: {
      fill: '#b3b5b9',
    },
  },

  {
    name: 'pencil',
    Compo: Pencil,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'sync',
    Compo: Sync,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'remove',
    Compo: Remove,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'plus',
    Compo: Plus,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'play',
    Compo: Play,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'single-type',
    Compo: SingleType,
    props: {
      fill: '#b3b5b9',
    },
  },
  {
    name: 'success',
    Compo: Success,
    props: {
      fill: '#b3b5b9',
    },
  },
];

const Example = () => (
  icons.map(({ name, Compo, props }) => (
    <Compo
      key={name}
      {...props}
    />
  )
);
        `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Icons', module).add('All icons', () => <IconsStory />);
