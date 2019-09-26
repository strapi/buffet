import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import NavTabs from '../../src/components/NavTabs';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const links = [
  {
    compo: <span>Roles Permissions</span>,
    to: '/plugins/users-permissions/roles',
  },
  {
    compo: <span>Providers</span>,
    to: '/plugins/users-permissions/providers',
  },
  {
    compo: <span>Email Templates</span>,
    to: '/plugins/users-permissions/email-templates',
  },
  {
    compo: <span>Advanced Settings</span>,
    to: '/plugins/users-permissions/advanced',
  },
];

function TabsStory() {
  return (
    <Presentation title="Tabs" description="Useful to handle navigation.">
      <div style={{ paddingTop: 7, marginBottom: 23 }}>
        <NavTabs links={links} />
      </div>
      <Pre>
        {`
import React from 'react';
import { Route } from 'react-router-dom';
import { Tabs } from 'buffetjs';

const ChildId = ({ match }) => (
  <div>
    <h3>{match.params.id} page</h3>
  </div>
);

const links = [
  {
    compo: <span>Roles Permissions</span>,
    to: '/plugins/users-permissions/roles',
  },
  {
    compo: <span>Providers</span>,
    to: '/plugins/users-permissions/providers',
  },
  {
    compo: <span>Email Templates</span>,
    to: '/plugins/users-permissions/email-templates',
  },
  {
    compo: <span>Advanced Settings</span>,
    to: '/plugins/users-permissions/advanced',
  },
];

function Example() {
  return (
    <>
      <Tabs links={links} />
      <Route path="/plugins/:pluginId/:id" component={ChildId} exact />
    </>
  );
}
        `}
      </Pre>
    </Presentation>
  );
}

storiesOf('Custom', module)
  .addDecorator(
    StoryRouter({}, { initialEntries: ['/plugins/users-permissions/roles'] }),
  )
  .add('Tabs', () => TabsStory());
