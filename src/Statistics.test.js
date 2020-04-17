import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, mount } from 'enzyme';

import Statistics from './Statistics';

configure({ adapter: new Adapter() });

describe("Statistics component", () => {
  test('renders', () => {
    const wrapper = shallow(<Statistics dataset={[1,2,3]}/>);
    expect(wrapper.exists()).toBe(true);
  });
  test('renders average text', () => {
    const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
    const linkElement = getByText(/average/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders median text', () => {
    const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
    const linkElement = getByText(/median/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders max text', () => {
    const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
    const linkElement = getByText(/max/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders min text', () => {
    const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
    const linkElement = getByText(/min/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders standard deviation text', () => {
    const { getByText } = render(<Statistics dataset={[1,2,3,4,5]}/>);
    const linkElement = getByText(/stddev/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('calculates correct statistics', () => {
    const dataSet = [1,2,3];
    const wrapper = shallow(<Statistics dataset={dataSet}/>);
    const instance = wrapper.instance();
    const stats = instance.generateStatistics(dataSet);
    expect(stats.average).toBe(2);
    expect(stats.median).toBe(2);
    expect(stats.max).toBe(3);
    expect(stats.min).toBe(1);
    expect(stats.range).toBe(2);
    expect(Math.abs(stats.stddev - 0.8164965809) < .01).toBe(true);
  });
});