import React from 'react';
import { render } from '@testing-library/react';
import Statistics from './Statistics';

test('renders average', () => {
  const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
  const linkElement = getByText(/average/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders median', () => {
  const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
  const linkElement = getByText(/median/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders max', () => {
  const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
  const linkElement = getByText(/max/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders min', () => {
  const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
  const linkElement = getByText(/min/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders standard deviation', () => {
  const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
  const linkElement = getByText(/stddev/i);
  expect(linkElement).toBeInTheDocument();
});