import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { Checkbox } from '@buffetjs/core';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

function CheckboxStory() {
  const [val, setValue] = useState(false);
  const [checkboxes, setCheckboxValue] = useState({
    checkbox1: false,
    checkbox2: true,
  });
  const defaultProps = {
    message: 'Check me',
    name: 'checkbox',
  };

  const areAllCheckboxesSelected = Object.keys(checkboxes).every(
    key => checkboxes[key] === true
  );

  const hasSomeCheckboxesSelected = Object.keys(checkboxes).some(
    key => checkboxes[key] === true
  );

  const handleChange = () => {
    const valueToSet = !areAllCheckboxesSelected;

    setCheckboxValue(prevState => {
      return Object.keys(prevState).reduce((acc, current) => {
        acc[current] = valueToSet;

        return acc;
      }, {});
    });
  };

  const message = areAllCheckboxesSelected ? 'Unselect all' : 'Select all';

  return (
    <Presentation
      title="Checkbox"
      description="A simple input that returns true or false."
    >
      <div style={{ paddingTop: 7, marginBottom: 23 }}>
        <Checkbox
          {...defaultProps}
          onChange={({ target: { value } }) => setValue(value)}
          value={val}
        />
      </div>
      <div style={{ marginTop: '-5px', marginBottom: 20 }}>
        <Checkbox
          name="selectAll"
          onChange={handleChange}
          message={message}
          someChecked={hasSomeCheckboxesSelected && !areAllCheckboxesSelected}
          value={areAllCheckboxesSelected}
        />
        <ul>
          {Object.keys(checkboxes).map(current => {
            return (
              <li key={current} style={{ paddingTop: 18, paddingLeft: 15 }}>
                <Checkbox
                  name={current}
                  message={current}
                  value={checkboxes[current]}
                  onChange={({ target: { name, value } }) => {
                    setCheckboxValue(prevState => ({
                      ...prevState,
                      [name]: value,
                    }));
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Pre>
        {`
import React, { useState } from 'react';
import { Checkbox } from '@buffetjs/core';

function Example() {
  const [value, setValue] = useState(false);
  const [checkboxes, setCheckboxValue] = useState({
    checkbox1: false,
    checkbox2: true,
  });
  const defaultProps = {
    message: 'Check me',
    name: 'checkbox',
  };

  const areAllCheckboxesSelected = Object.keys(checkboxes).every(
    key => checkboxes[key] === true
  );

  const hasSomeCheckboxesSelected = Object.keys(checkboxes).some(
    key => checkboxes[key] === true
  );

  const handleChange = () => {
    const valueToSet = !areAllCheckboxesSelected;

    setCheckboxValue(prevState => {
      return Object.keys(prevState).reduce((acc, current) => {
        acc[current] = valueToSet;

        return acc;
      }, {});
    });
  };

  const message = areAllCheckboxesSelected ? 'Unselect all' : 'Select all';

  return (
    <>
      <Checkbox
        message="Check me"
        name="checkbox"
        onChange={({ target }) => setValue(target.value)}
        value={value}
      />
      <div>
        <Checkbox
          name="selectAll"
          onChange={handleChange}
          message={message}
          someChecked={hasSomeCheckboxesSelected && !areAllCheckboxesSelected}
          value={areAllCheckboxesSelected}
        />
        <ul>
          {Object.keys(checkboxes).map(current => {
            return (
              <li key={current} style={{ padding: 15 }}>
                <Checkbox
                  name={current}
                  message={current}
                  value={checkboxes[current]}
                  onChange={({ target: { name, value } }) => {
                    setCheckboxValue(prevState => ({
                      ...prevState,
                      [name]: value,
                    }));
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}`}
      </Pre>
    </Presentation>
  );
}

storiesOf('Components', module).add('Checkbox', () => <CheckboxStory />);
