import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// Top-Level Components
import Layout from './Layout';
import Toolbar from './Toolbar';
import FileDropzone from './FileDropzone';

//const ThemeContext = React.createContext('light');

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
    this.state = {
      isInitialized: false,
      hasParsed: false,
      files: [],
      projectData: {}
    };
  }

  onFilesLoaded = (acceptedFiles) => {
    this.setState((state) => {
      return { isInitialized: true, hasParsed: this.state.hasParsed, files: acceptedFiles, projectData: this.state.projectData}
    });
  }

  onFilesParsed = (data) => {
    this.setState((state) => {
      return { 
        isInitialized: this.state.isInitialized, 
        hasParsed: true,
        files: this.state.files,
        projectData: data
      }
    });
  }

  // render the toolbar and swap between layout and file dropzone depending on if files have been read
  render() {
    return (
      <div>
        <Toolbar id="toolbar" hasFiles={this.state.isInitialized} projectData={this.state.projectData} />
        { this.state.isInitialized
          ? <Layout parentCallback={this.onFilesParsed}  files={this.state.files} />
          : <FileDropzone parentCallback={this.onFilesLoaded} />
        }
      </div>
    );
  }
}

export default App;