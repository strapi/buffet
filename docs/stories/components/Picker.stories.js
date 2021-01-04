import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Picker, Padded, Text, Button } from '@buffetjs/core';
import { Arrow } from '@buffetjs/icons';

import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const styles = {
  spacerCode: {
    display: 'block',
    marginBottom: 30,
  },
};

const PickerStory = () => (
  <Presentation title="Picker" description="A simple dropdown picker">
    <div style={{ paddingTop: 17, marginBottom: 22 }}>
      <div style={{ display: 'flex' }}>
        <Picker
          renderButtonContent={(isOpen) => (
            <>
              <Arrow fill="black" />
              <Text>Sort {isOpen ? 'open' : 'close'}</Text>
            </>
          )}
          renderSectionContent={(onToggle) => (
            <>
              <Padded top left right bottom>
                <Text>Picker content</Text>
              </Padded>
              <Padded top left right bottom>
                <Button onClick={onToggle}>
                  <Text color="white" fontSize="md">
                    Close
                  </Text>
                </Button>
              </Padded>
            </>
          )}
        />
        <div style={{ paddingLeft: '10px' }} />

        <Picker
          renderButtonContent={(isOpen) => (
            <>
              <Arrow fill="black" />
              <Text>Filter {isOpen ? 'open' : 'close'}</Text>
            </>
          )}
          renderSectionContent={(onToggle) => (
            <>
              <Padded top left right bottom>
                <Text>Picker content</Text>
              </Padded>
              <Padded top left right bottom>
                <Button onClick={onToggle}>
                  <Text color="white" fontSize="md">
                    Close
                  </Text>
                </Button>
              </Padded>
            </>
          )}
        />
      </div>

      <span style={styles.spacerCode} />
      <Pre language="Pre">
        {`
import React from 'react';
import { Picker, Padded, Text } from '@buffetjs/core';

function Example() {
  return (
    <Picker
      position="left"
      renderButtonContent={(isOpen) => <Text>Picker button {isOpen ? 'open' : 'close'}</Text>}
      renderSectionContent={(onToggle) => (
          <>
              <Padded top left right bottom>
                  <Text>Picker content</Text>
              </Padded>
              <Padded top left right bottom>
                  <Button onClick={onToggle}>
                      <Text color='white' fontSize='md'>Close</Text>
                  </Button>
              </Padded>
          </>
      )}
    />
    <Picker
      position="right"
      renderButtonContent={(isOpen) => <Text>Picker button {isOpen ? 'open' : 'close'}</Text>}
      renderSectionContent={(onToggle) => (
          <>
              <Padded top left right bottom>
                  <Text>Picker content</Text>
              </Padded>
              <Padded top left right bottom>
                  <Button onClick={onToggle}>
                      <Text color='white' fontSize='md'>Close</Text>
                  </Button>
              </Padded>
          </>
      )}
    />
  );
}
`}
      </Pre>
    </div>
  </Presentation>
);

storiesOf('Components', module).add('Picker', () => PickerStory());
