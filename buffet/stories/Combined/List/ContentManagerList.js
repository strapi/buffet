import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import { text, object } from '@storybook/addon-knobs';

import List from '../../../src/combined/List';
import IconLinks from '../../../src/components/IconLinks';
import Row from '../../../src/styled/CustomRow';

const CustomRow = ({ icon, description, links, name, onClick }) => {
  const styles = {
    links: {},
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
      <td style={styles.links}>
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

function CombinedList() {
  const handleEditClick = e => {
    console.log('Edit'); // eslint-disable-line no-console
    e.stopPropagation();
  };
  const title = text('Title', 'Types de contenu');
  const subtitle = text('Subtitle', 'Configurez les paramètres spécifiques');
  const items = object('List', [
    {
      icon: 'fa-cube',
      name: 'article',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
      links: [{ icon: 'fa fa-cog', onClick: handleEditClick }],
      onClick: () => console.log('Article'), // eslint-disable-line no-console
    },
    {
      icon: 'fa-cube',
      name: 'users',
      description: 'Tenderloin drumstick cupim cow.',
      links: [{ icon: 'fa fa-cog', onClick: handleEditClick }],
      onClick: () => console.log('Users'), // eslint-disable-line no-console
    },
  ]);

  const initProps = {
    title,
    subtitle,
    items,
  };

  return (
    <List
      {...initProps}
      customRowComponent={props => <CustomRow {...props} />}
    />
  );
}

export default CombinedList;
