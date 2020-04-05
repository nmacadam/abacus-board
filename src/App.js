import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// Top-Level Components
import Layout from './Layout';
import Toolbar from './Toolbar';
import FileDropzone from './FileDropzone';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
    this.state = {
      isInitialized: false,
      files: []
    };
  }

  callbackFunction = (acceptedFiles) => {
    this.setState((state) => {
      return { isInitialized: true, files: acceptedFiles }
    });
  }

  // render the toolbar and swap between layout and file dropzone depending on if files have been read
  render() {
    return (
      <div>
        <Toolbar hasFiles={this.state.isInitialized} />
        { this.state.isInitialized
          ? <Layout files={this.state.files} />
          : <FileDropzone parentCallback={this.callbackFunction} />
        }
      </div>
    );
  }
}

export default App;