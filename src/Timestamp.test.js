import React from 'react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, to } from 'enzyme';

import Timestamp from './Timestamp';

configure({ adapter: new Adapter() });

describe("Timestamp component", () => {
  test('renders', () => {
    const dataJSON = `
      [
        {
          "Time": 2.851527,
          "Name": "someName"
        },
        {
          "Time": 5.11529255,
          "Name": "someName"
        },
        {
          "Time": 5.55360746,
          "Name": "someName"
        }
      ]
    `;
    const data = JSON.parse(dataJSON);
    const wrapper = shallow(<Timestamp dataSet={data} />);
    expect(wrapper.exists()).toBe(true);
  });
});