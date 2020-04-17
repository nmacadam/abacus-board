import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, to } from 'enzyme';

import Layout from './Layout';

configure({ adapter: new Adapter() });

describe("Layout component", () => {
  test('renders', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.exists()).toBe(true);
  });
  test('wraps internal layout', () => {
    const h = window.innerHeight;
    const ht = 90; // magic! :(
    const hc = h - ht;

    const element = (<div id="layoutContainer" style={{height: hc}} />);
    const wrapper = shallow(<Layout />);
    expect(wrapper.getElement()).toEqual(element);
  });
});