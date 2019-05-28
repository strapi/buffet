import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withStorySource } from '@storybook/addon-storysource';

import List from '../../src/combined/List';
import IconLinks from '../../src/components/IconLinks';
import Row from '../../src/styled/CustomRow';
import Presentation from '../ui/Presentation';

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
    console.log('New Model'); // eslint-disable-line no-console
  };

  const handleEditClick = e => {
    console.log('Edit'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const handleDeleteClick = e => {
    console.log('Delete'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const title = text('Title', '2 Content Types are available');
  const buttonProps = {
    color: 'secondary',
    icon: true,
    label: 'New',
    onClick,
    type: 'submit',
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
      onClick: () => console.log('Article'), // eslint-disable-line no-console
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
      onClick: () => console.log('Users'), // eslint-disable-line no-console
    },
  ];

  const defaultItems = [
    {
      firstname: 'John',
      name: 'Doe',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
    },
    {
      firstname: 'John',
      name: 'Smith',
      description: 'Tenderloin drumstick cupim cow.',
    },
    {
      firstname: 'Will',
      name: 'Smith',
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
    <Presentation title="List" description="Create some lists">
      <section style={{ marginTop: 29 }}>
        <h2 style={{ marginBottom: 30 }}>Default List</h2>
        <List {...initProps} items={defaultItems} />
      </section>
      <section style={{ marginTop: 25 }}>
        <h2 style={{ marginBottom: 30 }}>List with custom row</h2>
        <List
          {...initProps}
          items={customItems}
          customRowComponent={props => <CustomRow {...props} />}
        />
      </section>
    </Presentation>
  );
}

const source = `
import React from 'react';
import { List, Row, IconLinks } from 'buffet';

// Default List

function ListStory() {
  const defaultItems = [
    {
      firstname: 'John',
      name: 'Doe',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
    },
    {
      firstname: 'John',
      name: 'Smith',
      description: 'Tenderloin drumstick cupim cow.',
    },
    {
      firstname: 'Will',
      name: 'Smith',
      description: 'Pancetta pig buffalo bresaola.',
    },
  ];

  const buttonProps = {
    color: 'secondary',
    icon: true,
    label: 'New',
    onClick,
    type: 'submit',
  };

  <List title="2 Content Types are available" button={buttonProps} items={defaultItems} />
}


// List with custom row

const CustomRow = ({
  icon,
  description,
  links,
  name,
  onClick
}) => {
  const styles = {
    name: {
      textTransform: 'capitalize',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>
        <i className={\`fa \${icon}\`} />
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

function ListStory() {
  const onClick = () => {
    console.log('New Model');
  };

  const handleEditClick = e => {
    console.log('Edit');
    e.stopPropagation();
  };

  const handleDeleteClick = e => {
    console.log('Delete');
    e.stopPropagation();
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
      onClick: () => console.log('Article'),
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
      onClick: () => console.log('Users'),
    },
  ];

  const buttonProps = {
    color: 'secondary',
    icon: true,
    label: 'New',
    onClick,
    type: 'submit',
  };

  return (
    <List
      title="2 Content Types are available"
      button={buttonProps}
      customRowComponent={props => <CustomRow {...props} />}
    />
  );
}`;

storiesOf('Combined', module)
  .addDecorator(withStorySource(source))
  .add('List', () => ListStory());
