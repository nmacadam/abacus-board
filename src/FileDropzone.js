import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

// File loading drag'n'drop interface
class FileDropzone extends Component {
    constructor(props) {
        super(props);
        this.onDrop = (files) => {
            this.setState({ files });
            this.sendData();
        };
        this.state = {
            files: []
        };
    }

    sendData() {
        this.props.parentCallback(this.state.files);
    }

    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));

        return (
            <Dropzone onDrop={this.onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section className="dropzoneContainer">
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>drag 'n' drop or click to select file(s)</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }
}

export default FileDropzone;