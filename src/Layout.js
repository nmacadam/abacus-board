import React, { Component } from 'react';

// Dependencies
import GoldenLayout from 'golden-layout';
import LayoutFactory from './LayoutFactory';

// Layout Components
import GenericSet from './GenericSet';
import NumericSet from './NumericSet';
import Timestamp from './Timestamp';
import Stopwatch from './Stopwatch';
import Splitwatch from './Splitwatch';

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
            factory.onLayoutBuilt = function() {
                //const layout = new GoldenLayout(factory.config);
                const layout = new GoldenLayout({
                    content: [{
                        type: 'row',
                        content: [
                            NumericSet.windowData,
                            GenericSet.windowData,
                            Timestamp.windowData,
                            Splitwatch.windowData,
                            Stopwatch.windowData
                        ]
                    }]
                });
                layout.registerComponent('numeric-set', NumericSet);
                layout.registerComponent('generic-set', GenericSet);
                layout.registerComponent('timestamp', Timestamp);
                layout.registerComponent('stopwatch', Stopwatch);
                layout.registerComponent('splitwatch', Splitwatch);

                layout.on( 'tabCreated', function( tab ){
                    tab.element.attr('title', tab.contentItem.config.tooltip);
                });

                layout.init();
            }
            
            factory.build();
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