import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable  */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faPencilAlt,
  faCube,
} from '@fortawesome/free-solid-svg-icons';
import { List } from '@buffetjs/custom';
import { IconLinks } from '@buffetjs/core';
import { CustomRow as Row } from '@buffetjs/styles';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';
import Subtitle from '../ui/Subtitle';

const CustomRow = ({ icon, description, links, name, onClick }) => {
  const styles = {
    name: {
      textTransform: 'capitalize',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>{icon}</td>
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
  icon: PropTypes.node,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      onClick: PropTypes.func,
    })
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
  const subtitle = text('Subtitle', 'The most successful French Top Chefs');
  const buttonProps = {
    color: 'secondary',
    icon: true,
    label: 'New',
    onClick,
    type: 'button',
  };

  const customItems = [
    {
      icon: <FontAwesomeIcon icon={faCube} />,
      name: 'ratatouille',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
      links: [
        {
          icon: <FontAwesomeIcon icon={faPencilAlt} />,
          onClick: handleEditClick,
        },
        {
          icon: <FontAwesomeIcon icon={faTrashAlt} />,
          onClick: handleDeleteClick,
        },
      ],
      onClick: () => alert('Article'),
    },
    {
      icon: <FontAwesomeIcon icon={faCube} />,
      name: 'Alfredo Linguini',
      description: 'Tenderloin drumstick cupim cow.',
      links: [
        {
          icon: <FontAwesomeIcon icon={faPencilAlt} />,
          onClick: handleEditClick,
        },
        {
          icon: <FontAwesomeIcon icon={faTrashAlt} />,
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
    subtitle,
  };

  return (
    <Presentation title="List" description="Display data.">
      <section style={{ marginTop: 29, paddingBottom: 40 }}>
        <Subtitle style={{ marginBottom: 32 }}>Default List</Subtitle>
        <div style={{ marginBottom: 35 }}>
          <List {...initProps} items={defaultItems} />
        </div>
        <Pre>{defaultListSource}</Pre>
      </section>
      <section style={{ marginTop: 25 }}>
        <Subtitle style={{ marginBottom: 30 }}>List with custom row</Subtitle>
        <div style={{ marginBottom: 35 }}>
          <List
            {...initProps}
            subtitle={subtitle}
            items={customItems}
            customRowComponent={props => <CustomRow {...props} />}
          />
        </div>
        <Pre>{customListSource}</Pre>
      </section>
    </Presentation>
  );
}

const defaultListSource = `
import React from 'react';

import { List } from '@buffetjs/custom';
import { IconLinks } from '@buffetjs/core';

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

const customListSource = `
import React from 'react';
import { List } from '@buffetjs/custom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faPencilAlt,
  faCube,
} from '@fortawesome/free-solid-svg-icons';

const CustomRow = ({ icon, description, links, name, onClick }) => {
  const styles = {
    name: {
      textTransform: 'capitalize',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>
        {icon}
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


function Example() {
  const props = {
    title: 'Best Top Chefs',
    subtitle: 'The most successful French Top Chefs',
    button: {
      color: 'secondary',
      icon: true,
      label: 'New',
      onClick: () => alert('Do you want to create a new chief entry?'),
      type: 'button',
    },
  };

  const handleEditClick = e => {
    alert('Edit');
    e.stopPropagation();
  };

  const handleDeleteClick = e => {
    alert('Delete');
    e.stopPropagation();
  };

  const rows = [
    {
      icon: <FontAwesomeIcon icon={faCube} />,
      name: 'ratatouille',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
      links: [
        {
          icon: <FontAwesomeIcon icon={faPencilAlt} />,
          onClick: handleEditClick,
        },
        {
          icon: <FontAwesomeIcon icon={faTrashAlt} />,
          onClick: handleDeleteClick,
        },
      ],
      onClick: () => alert('Ratatouille'),
    },
    {
      icon: <FontAwesomeIcon icon={faCube} />,
      name: 'users',
      description: 'Tenderloin drumstick cupim cow.',
      links: [
        {
          icon: <FontAwesomeIcon icon={faPencilAlt} />,
          onClick: handleEditClick,
        },
        {
          icon: <FontAwesomeIcon icon={faTrashAlt} />,
          onClick: handleDeleteClick,
        },
      ],
      onClick: () => alert('Users'),
    },
  ];

  return (
    <CustomList
      {...props}
      items={rows}
      customRowComponent={props => <CustomRow {...props} />}
    />
  );
}
`;

storiesOf('Custom', module).add('List', () => ListStory());
