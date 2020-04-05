import React, { Component } from 'react';

class FileDialogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }

    this.buttonLabel = props.buttonLabel;
  }

  buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
  }

  handleFileSelect(evt) {
    console.log("handling file");

    var file = evt.target.files[0]; // FileList object
    if (file) {
      if (file.type != ".json" || file.type != ".abc") {
        console.log("Invalid file type");
      }
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        console.log(evt.target.result);
      }
      reader.onerror = function (evt) {
        console.log("error reading file");
      }

      document.getElementById('splashScreen').style.display = "none";
      //window.fileLoaded = true;
    }
  }

  componentDidMount() {
    this.fileSelector = this.buildFileSelector();
    this.fileSelector.addEventListener('change', this.handleFileSelect, false);
  }

  handleButtonClick = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  render() {
    return <button onClick={this.handleButtonClick}>{this.buttonLabel}</button>
  }
}

export default FileDialogue;