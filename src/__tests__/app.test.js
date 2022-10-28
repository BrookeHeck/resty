import App from '../App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('Testing app component', () => {
  test('render app component', () => {
    render(<App/>)
  })
});