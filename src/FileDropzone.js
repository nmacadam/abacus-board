import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
//import {useDropzone} from 'react-dropzone';

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

/*const FileDropzone = props => {
	const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({accept: '.json'});
  
	const acceptedFilesItems = acceptedFiles.map(file => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	const rejectedFilesItems = rejectedFiles.map(file => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<section className="container">
			<div {...getRootProps({className: 'dropzone'})}>
				<input {...getInputProps()} />
				<p>drag 'n' drop or click to select file(s)</p>
				<em>(only *.json files will be accepted)</em>
			</div>
			<aside>
				<h4>Accepted files</h4>
				<ul>
					{acceptedFilesItems}
				</ul>
				<h4>Rejected files</h4>
				<ul>
					{rejectedFilesItems}
				</ul>
			</aside>
		</section>
	);
};*/
export default FileDropzone;