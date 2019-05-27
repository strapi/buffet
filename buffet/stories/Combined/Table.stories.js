import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Table from '../../src/combined/Table';
import Checkbox from '../../src/styled/Checkbox';
import IconLinks from '../../src/components/IconLinks';
import Row from '../../src/styled/CustomRow';

const CustomRow = ({ id, username, email, links, provider, onClick }) => {
  const styles = {
    links: {
      width: 'fit-content',
      float: 'right',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>
        <Checkbox />
      </td>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{username}</p>
      </td>
      <td>
        <p>{username}</p>
      </td>
      <td>
        <p>{email}</p>
      </td>
      <td>
        <p>{provider}</p>
      </td>
      <td>
        <p>●●●●●●●●</p>
      </td>
      <td>
        <div style={styles.links}>
          <IconLinks links={links} />
        </div>
      </td>
    </Row>
  );
};

CustomRow.defaultProps = {
  id: null,
  email: null,
  links: null,
  onClick: null,
  provider: null,
  username: null,
};

CustomRow.propTypes = {
  email: PropTypes.string,
  id: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  onClick: PropTypes.func,
  provider: PropTypes.string,
  username: PropTypes.string,
};

function TableStory() {
  const handleEditClick = e => {
    console.log('Edit'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const handleDeleteClick = e => {
    console.log('Delete'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const items = [
    {
      created_at: 1558010491450,
      email: 'soup@strapi.io',
      id: 1,
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
      provider: 'local',
      username: 'Soup',
      onClick: handleEditClick,
    },
    {
      email: 'jim@strapi.io',
      id: 2,
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
      provider: 'local',
      username: 'jimminy',
      onClick: handleEditClick,
    },
  ];

  const initProps = {
    items,
    checkEnabled: true,
  };

  return (
    <div className="container">
      <Table
        {...initProps}
        customRowComponent={props => <CustomRow {...props} />}
      />
    </div>
  );
}

storiesOf('Combined|Table', module).add('DefaultList', () => TableStory());
