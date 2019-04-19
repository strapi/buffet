import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  number,
  boolean,
  color,
  select,
  radios,
  array,
  date,
  object,
  files,
} from '@storybook/addon-knobs';

storiesOf('Combined|Knobs', module)
  .addDecorator(withKnobs)
  .add('Example', () => {
    const name = text('Name', 'Storyteller');
    const age = number('Age', 70, { range: true, min: 0, max: 90, step: 5 });
    const fruits = {
      Apple: 'apple',
      Banana: 'banana',
      Cherry: 'cherry',
    };
    const fruit = select('Fruit', fruits, 'apple');

    const otherFruits = {
      Kiwi: 'kiwi',
      Guava: 'guava',
      Watermelon: 'watermelon',
    };
    const otherFruit = radios('Other Fruit', otherFruits, 'watermelon');
    const dollars = number('Dollars', 12.5, { min: 0, max: 100, step: 0.01 });
    const years = number('Years in NY', 9);

    const backgroundColor = color('background', '#dedede');
    const items = array('Items', ['Laptop', 'Book', 'Whiskey']);
    const otherStyles = object('Styles', {
      border: '2px dashed silver',
      borderRadius: 10,
      padding: '10px',
    });
    const nice = boolean('Nice', true);
    const images = files('Happy Picture', 'image/*', [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',
    ]);

    // NOTE: the default value must not change - e.g., do not do date('Label', new Date()) or date('Label')
    const defaultBirthday = new Date('Jan 20 2017 GMT+0');
    const birthday = date('Birthday', defaultBirthday);

    const intro = `My name is ${name}, I'm ${age} years old, and my favorite fruit is ${fruit}. I also enjoy ${otherFruit}.`;
    const style = { backgroundColor, ...otherStyles };
    const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!';
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    };

    return (
      <div style={style}>
        <p>{intro}</p>
        <p>
          My birthday is:{' '}
          {new Date(birthday).toLocaleDateString('en-US', dateOptions)}
        </p>
        <p>I live in NY for {years} years.</p>
        <p>My wallet contains: ${dollars.toFixed(2)}</p>
        <p>In my backpack, I have:</p>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{salutation}</p>
        <p>
          When I am happy I look like this: <img src={images[0]} alt="happy" />
        </p>
      </div>
    );
  });
