import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import { object } from '@storybook/addon-knobs';

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

const navLinks = object('Links', [
  {
    label: 'Roles \u0026 Permissions',
    to: '/plugins/users-permissions/roles',
  },
  {
    label: 'Providers',
    to: '/plugins/users-permissions/providers',
  },
  {
    label: 'Email Templates',
    to: '/plugins/users-permissions/email-templates',
  },
  {
    label: 'Advanced Settings',
    to: '/plugins/users-permissions/advanced',
  },
]);

function CombinedTabs() {
  return (
    <div>
      <NavTabs links={navLinks} />
      <Route path="/plugins/:pluginId/:id" component={ChildId} exact />
    </div>
  );
}

export default CombinedTabs;
