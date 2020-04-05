import React, { Component } from 'react';

// Dependencies
import GoldenLayout from 'golden-layout';
import LayoutFactory from './LayoutFactory';

// Layout Components
import NumericSet from './NumericSet';

// Displays the GoldenLayout layout for the project
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {}
        }

        this.files = props.files;
    }

    // since goldenlayout works outside of the react pipeline we need to give it just a sec
    // to make sure it can initalize before react tries to draw it
    drawLayout() {
        setTimeout(() => {
            let factory = new LayoutFactory(this.files);
            const config = factory.build();
            const layout = new GoldenLayout(config);
            layout.registerComponent('numeric-set', NumericSet);
            layout.init();
        }, 0);
    }

    componentDidMount() {
        this.drawLayout();
    }

    componentDidUpdate() {
        this.drawLayout();
    }

    // Return an empty element, the rendering for the layout isnt react based
    // so we'll just make it draw when react wants stuff rendered
    render() {
        return (<div />);
    }
}

export default Layout;