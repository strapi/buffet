import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';

import NavTabs from '../../src/components/NavTabs';

const ChildId = ({ match }) => (
  <div>
    <h3>{match.params.id} page</h3>
  </div>
);

ChildId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }).isRequired,
  }).isRequired,
};

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
    <div className="story">
      <h1>Tabs</h1>
      <div>
        <NavTabs links={links} />
        <Route path="/plugins/:pluginId/:id" component={ChildId} exact />
      </div>
    </div>
  );
}

const source = `
import React from 'react';
import { Route } from 'react-router-dom';

import NavTabs from '../../../src/components/NavTabs';

const ChildId = ({ match }) => (
  <div>
    <h3>{match.params.id} page</h3>
  </div>
);

ChildId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }).isRequired,
  }).isRequired,
};

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

function CombinedTabs() {
  return (
    <div>
      <NavTabs links={links} />
      <Route path="/plugins/:pluginId/:id" component={ChildId} exact />
    </div>
  );
}`;

storiesOf('Combined', module)
  .addDecorator(
    StoryRouter({}, { initialEntries: ['/plugins/users-permissions/roles'] }),
  )
  .addDecorator(withStorySource(source))
  .add('Tabs', () => TabsStory());
