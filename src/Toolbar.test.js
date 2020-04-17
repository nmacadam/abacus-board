import React from 'react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, to } from 'enzyme';

import Toolbar from './Toolbar';
import ProjectData from './ProjectData';

configure({ adapter: new Adapter() });

describe("Toolbar component", () => {
  test('renders', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.exists()).toBe(true);
  });
  test('contains ProjectData', () => {
    const wrapper = shallow( <Toolbar /> );
    expect(wrapper.find(ProjectData)).toHaveLength(1);
  });
});