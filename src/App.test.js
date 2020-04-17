import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16.3';
import { configure, shallow } from 'enzyme';

import App from './App';
import Toolbar from './Toolbar';
import Layout from './Layout';
import FileDropzone from './FileDropzone';

configure({ adapter: new Adapter() });

it('renders toolbar component', () => {
  const wrapper = shallow( < App /> );
  
  /*wrapper.setProps({
    store: {
      planets: [{
          name: "name 1"
        }
      ]
    }
  });*/
  
  expect(wrapper.find(Toolbar)).toHaveLength(1);
});

it('contains layout if initialized', () => {
  const wrapper = shallow( < App /> );
  
  wrapper.setState({
    isInitialized: true
  });
  
  expect(wrapper.find(Layout)).toHaveLength(1);
});

it('contains file dropzone if not initialized', () => {
  const wrapper = shallow( < App /> );
  
  wrapper.setState({
    isInitialized: false
  });
  
  expect(wrapper.find(FileDropzone)).toHaveLength(1);
});