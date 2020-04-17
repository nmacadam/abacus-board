import React from 'react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, to } from 'enzyme';

import Splitwatch from './Splitwatch';

configure({ adapter: new Adapter() });

describe("Splitwatch component", () => {
  test('renders', () => {
    const dataJSON = `
      [
        {
          "Name": "Split",
          "StartTime": 1.68864834,
          "EndTime": 4.049621,
          "Duration": 2.360973
        },
        {
          "Name": "Split",
          "StartTime": 4.72536135,
          "EndTime": -1.0,
          "Duration": 5.16479445
        }
      ]
    `;
    const data = JSON.parse(dataJSON);
    const wrapper = shallow(<Splitwatch dataSet={data} />);
    expect(wrapper.exists()).toBe(true);
  });
});