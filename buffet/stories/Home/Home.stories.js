import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

function IntroStory() {
  return (
    <div className="story">
      <div className="container">
        <h1>Welcome to Storybook for BuffetJS!</h1>
        <section>
          <h2>Play with the knobs to interact with the compo</h2>
        </section>
      </div>
    </div>
  );
}

function InstallStory() {
  return (
    <div className="story">
      <div className="container">
        <h1>Installation</h1>
        <section>
          <h2>
            Install BuffetJS, the world&apos;s coolest React UI framework made
            by Strapiers for Strapiers.
          </h2>
          <p>BuffetJS is available as an npm package.</p>
        </section>
        <section>
          <h2>npm</h2>
          <p>To install and save in your package.json dependencies, run:</p>
        </section>

        <pre>
          <code>npm install buffetjs</code>
        </pre>
      </div>
    </div>
  );
}

function UsageStory() {
  const source = `
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'buffetjs';

function App() {
  return (
    <Button type="submit" color="primary">
      Save
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'))`;

  return (
    <div className="story">
      <div className="container">
        <h1>Usage</h1>
        <section>
          <h2>Quick start</h2>
          <p>
            Here&apos;s a quick example to get you started, it&apos;s literally
            all you need:
          </p>
          <pre>
            <code>{source}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}

storiesOf('Welcome', module)
  .add('Intro', () => IntroStory())
  .add('Install', () => InstallStory())
  .add('Usage', () => UsageStory());
