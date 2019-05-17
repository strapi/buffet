/* eslint-disable import/no-extraneous-dependencies */
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import DefaultTabs, { CustomTabs } from './Tabs';

storiesOf('Combined|Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(
    StoryRouter({}, { initialEntries: ['/plugins/users-permissions/roles'] }),
  )
  .add('String', () => DefaultTabs())
  .add('Component', () => CustomTabs());
