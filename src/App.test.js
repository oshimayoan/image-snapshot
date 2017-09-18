import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Chrome} from 'navalia';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
expect.extend({toMatchImageSnapshot});

describe('Test', () => {
  let chrome = null;

  beforeEach(() => {
    chrome = new Chrome();
  });

  afterEach(() => {
    chrome.done();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders correctly', () => {
    return chrome
      .goto('http://localhost:3000')
      .then(() => chrome.screenshot())
      .then(image => expect(image).toMatchImageSnapshot());
  });
});
