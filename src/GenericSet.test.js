import React from 'react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, to } from 'enzyme';

import GenericSet from './GenericSet';

configure({ adapter: new Adapter() });

describe("GenericSet component", () => {
  test('renders', () => {
    const wrapper = shallow(<GenericSet />);
    expect(wrapper.exists()).toBe(true);
  });
});