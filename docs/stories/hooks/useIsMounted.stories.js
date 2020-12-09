import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import Presentation from '../ui/Presentation';
import Pre from '../ui/Pre';

const Story = () => {
  return (
    <Presentation
      title="useIsMounted"
      description="Hook to check is a component is mounted. Kindly taken from react-is-mounted-hook"
    >
      <p style={{ fontSize: 13, marginTop: 17, marginBottom: 20 }}>
        <a
          href="https://github.com/hupe1980/react-is-mounted-hook#react-is-mounted-hook"
          target="_blank"
        >
          Check out the original package
        </a>
      </p>
      <Pre>
        {`
import React, { useState, useEffect } from 'react';
import { useIsMounted } from '@buffetjs/hooks';
import axios from 'axios';
import Loading from './loading';
import Result from './result';

const FetchComponent = () => {
  const isMounted = useIsMounted();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux'
      );

      if (isMounted()) {
        setData(result.data);
      }
    };

    fetchData();
  }, []);

  return data ? <Result data={data} /> : <Loading />;
};

export default FetchComponent;
          `}
      </Pre>
    </Presentation>
  );
};

storiesOf('Hooks', module).add('useIsMounted', () => <Story />);
