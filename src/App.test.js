import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders toolbar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/abacus board/i);
  expect(linkElement).toBeInTheDocument();
});
