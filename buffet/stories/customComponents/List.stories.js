import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable  */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import List from '../../src/combined/List';
import IconLinks from '../../src/components/IconLinks';
import Row from '../../src/styled/CustomRow';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const CustomRow = ({ icon, description, links, name, onClick }) => {
  const styles = {
    name: {
      textTransform: 'capitalize',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>
        <i className={`fa ${icon}`} />
      </td>
      <td>
        <p style={styles.name}>{name}</p>
      </td>
      <td>
        <p>{description}</p>
      </td>
      <td>
        <IconLinks links={links} />
      </td>
    </Row>
  );
};

CustomRow.defaultProps = {
  icon: null,
  description: null,
  links: null,
  name: null,
  onClick: null,
};

CustomRow.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  name: PropTypes.string,
  onClick: PropTypes.func,
};

function ListStory() {
  const onClick = () => {
    alert('Do you want to create a new chief entry?');
  };

  const handleEditClick = e => {
    alert('Edit');
    e.stopPropagation();
  };

  const handleDeleteClick = e => {
    alert('Delete');
    e.stopPropagation();
  };

  const title = text('Title', 'Best Top Chefs');
  const subtitle = text('Subtitle', 'Configure the specific settings');
  const buttonProps = {
    color: 'secondary',
    icon: true,
    label: 'New',
    onClick,
    type: 'button',
  };

  const customItems = [
    {
      icon: 'fa-cube',
      name: 'article',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
      links: [
        {
          icon: 'fa fa-pencil',
          onClick: handleEditClick,
        },
        {
          icon: 'fa fa-trash',
          onClick: handleDeleteClick,
        },
      ],
      onClick: () => alert('Article'),
    },
    {
      icon: 'fa-cube',
      name: 'users',
      description: 'Tenderloin drumstick cupim cow.',
      links: [
        {
          icon: 'fa fa-pencil',
          onClick: handleEditClick,
        },
        {
          icon: 'fa fa-trash',
          onClick: handleDeleteClick,
        },
      ],
      onClick: () => alert('Users'),
    },
  ];

  const defaultItems = [
    {
      firstname: 'Georges',
      name: 'Blanc',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
    },
    {
      firstname: 'Joël',
      name: 'Robuchon',
      description: 'Tenderloin drumstick cupim cow.',
    },
    {
      firstname: 'Michel',
      name: 'Guerard',
      description: 'Pancetta pig buffalo bresaola.',
    },
  ];

  const hasButton = boolean('Button', true);

  const button = hasButton ? buttonProps : null;

  const initProps = {
    title,
    button,
  };

  return (
    <Presentation title="List" description="Display some data.">
      <section style={{ marginTop: 29 }}>
        <h2 style={{ marginBottom: 30 }}>Default List</h2>
        <div style={{ marginBottom: 35 }}>
          <List {...initProps} items={defaultItems} />
        </div>
        <Pre>{source}</Pre>
      </section>
      <section style={{ marginTop: 25 }}>
        <h2 style={{ marginBottom: 30 }}>List with custom row</h2>
        <List
          {...initProps}
          subtitle={subtitle}
          items={customItems}
          customRowComponent={props => <CustomRow {...props} />}
        />
      </section>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { CustomList } from 'buffetjs';

const rows = [
  {
    firstname: 'Georges',
    name: 'Blanc',
    description:
      'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
  },
  {
    firstname: 'Joël',
    name: 'Robuchon',
    description: 'Tenderloin drumstick cupim cow.',
  },
  {
    firstname: 'Michel',
    name: 'Guerard',
    description: 'Pancetta pig buffalo bresaola.',
  },
];

function Example() {
  const props = {
    title: 'Best Top Chefs',
    button: {
      color: 'secondary',
      icon: true,
      label: 'New',
      onClick: () => alert('Do you want to create a new chief entry?'),
      type: 'button',
    },
  };

  return (
    <CustomList {...props} items={rows} />
  );
}
`;

storiesOf('Custom', module).add('List', () => ListStory());
