import React from 'react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, to } from 'enzyme';

import FileDropzone from './FileDropzone';

configure({ adapter: new Adapter() });

describe("FileDropzone component", () => {
  test('renders', () => {
    const wrapper = shallow(<FileDropzone />);
    expect(wrapper.exists()).toBe(true);
  });
});