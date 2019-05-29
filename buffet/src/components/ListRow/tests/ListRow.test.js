import React from 'react';
import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import ListRow from '../index';

describe('<ListRow />', () => {
  it('Should not crash', () => {
    mount(
      <table>
        <tbody>
          <ListRow />
        </tbody>
      </table>,
    );
  });

  it('should display some cells', () => {
    const cells = { name: 'name', test: 'test' };
    const renderedComponent = mount(
      <table>
        <tbody>
          <ListRow cells={cells} />
        </tbody>
      </table>,
    );
    const tds = renderedComponent.find('td');

    expect(tds.at(0).text()).toBe('name');
    expect(tds.at(1).text()).toBe('test');
  });
});
