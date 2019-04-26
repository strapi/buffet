import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import { text, object } from '@storybook/addon-knobs';

import List from '../../../src/combined/List';
import IconLinks from '../../../src/components/IconLinks';
import Row from '../../../src/styled/CustomRow';

const CustomRow = ({ icon, description, links, name, onClick }) => {
  const styles = {
    row: {
      backgroundColor: 'blue',
      '&:hover': {
        backgroundColor: 'red',
      },
    },
    iconCell: {
      width: '10%',
    },
    nameCell: {
      width: '25%',
    },
    descriptionCell: {
      width: '50%',
    },
    linksCell: {
      width: '15%',
    },
    links: {
      width: 'fit-content',
      float: 'right',
    },
    description: {
      textTransform: 'capitalize',
    },
  };

  return (
    <Row onClick={onClick}>
      <td style={styles.iconCell}>
        <i className={icon} />
      </td>
      <td style={styles.nameCell}>
        <p>
          <b>{name}</b>
        </p>
      </td>
      <td style={styles.descriptionCell}>
        <p style={styles.description}>{description}</p>
      </td>
      <td style={styles.linksCell}>
        <div style={styles.links}>
          <IconLinks links={links} />
        </div>
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

function CombinedList() {
  const onClick = () => {
    console.log('New field'); // eslint-disable-line no-console
  };

  const handleEditClick = e => {
    console.log('Edit'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const handleDeleteClick = e => {
    console.log('Delete'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const title = text('Title', '3 champs');
  const button = object('Button', {
    color: 'secondary',
    icon: 'add',
    label: 'New',
    onClick,
    type: 'submit',
  });
  const list = object('List', [
    {
      icon: 'fa-cube',
      name: 'title',
      description: 'Chaîne de caractères',
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
      onClick: () => console.log('Title'), // eslint-disable-line no-console
    },
    {
      icon: 'fa-cube',
      name: 'reviews',
      description: 'Entier',
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
      onClick: () => console.log('Reviews'), // eslint-disable-line no-console
    },
    {
      icon: 'fa-cube',
      name: 'date',
      description: 'Date',
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
      onClick: () => console.log('Date'), // eslint-disable-line no-console
    },
  ]);

  const initProps = {
    title,
    button,
    list,
  };

  return (
    <List
      {...initProps}
      customRowComponent={props => <CustomRow {...props} />}
    />
  );
}

export default CombinedList;
