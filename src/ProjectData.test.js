import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow, to } from 'enzyme';

import ProjectData from './ProjectData';

configure({ adapter: new Adapter() });

describe("ProjectData component", () => {
  test('renders', () => {
    const wrapper = shallow(<ProjectData />);
    expect(wrapper.exists()).toBe(true);
  });
  test('renders nothing if data is empty', () => {
    const wrapper = shallow(<ProjectData data={{}} />);
    expect(wrapper.exists()).toBe(true);
  });
  test('renders project data wrapper', () => {
    const dataJSON = `
        {
        "Name": "JSON_Example",
        "Version": "0.1",
        "Platform": "WindowsEditor",
        "Author": "DefaultCompany",
        "UnityVersion": "2019.2.16f1",
        "StartTime": "6:00:19 PM",
        "EndTime": "6:00:29 PM",
        "Date": "4/11/2020",
        "Duration": "00:00:10.2195326"
        }
    `;
    const data = JSON.parse(dataJSON);
    const wrapper = shallow(<ProjectData data={data} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.Project-Data')).toHaveLength(1);
  });
  test('renders project data', () => {
    const dataJSON = `
    {
    "Name": "JSON_Example",
    "Version": "0.1",
    "Platform": "WindowsEditor",
    "Author": "DefaultCompany",
    "UnityVersion": "2019.2.16f1",
    "StartTime": "6:00:19 PM",
    "EndTime": "6:00:29 PM",
    "Date": "4/11/2020",
    "Duration": "00:00:10.2195326"
    }
    `;
    const data = JSON.parse(dataJSON);
    const { getByText } = render(<ProjectData data={data} />);
    let linkElement = getByText(/JSON_Example/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/v.0.1/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/WindowsEditor/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/DefaultCompany/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/2019.2.16f1/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/6:00:19 PM/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/6:00:29 PM/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/4\/11\/2020/i);
    expect(linkElement).toBeInTheDocument();
    linkElement = getByText(/00:00:10.2195326/i);
    expect(linkElement).toBeInTheDocument();
  });
});