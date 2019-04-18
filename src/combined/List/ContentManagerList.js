/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListCard from '../../styled/ListCard';
import ListHeader from '../../components/ListHeader';
import ListCompo from '../../components/List';
import Links from '../../components/Links';

import Row from '../../styled/CustomRow';

const CustomRow = props => {
  const { icon, description, links, name, onClick } = props;

  const styles = {
    links: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    name: {
      textTransform: 'capitalize',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>
        <i className={icon} />
      </td>
      <td>
        <p style={styles.name}>{name}</p>
      </td>
      <td>
        <p>{description}</p>
      </td>
      <td style={styles.links}>
        <Links links={links} />
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

function List() {
  const handleEditClick = e => {
    console.log('Edit'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const initProps = {
    title: 'Types de contenu',
    subtitle: 'Configurez les paramètres spécifiques',
    list: [
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
    ],
  };

  return (
    <ListCard>
      <ListHeader
        title={initProps.title}
        subtitle={initProps.subtitle}
        button={initProps.button}
      />
      <ListCompo
        list={initProps.list}
        customRowComponent={props => <CustomRow {...props} />}
      />
    </ListCard>
  );
}

export default List;
