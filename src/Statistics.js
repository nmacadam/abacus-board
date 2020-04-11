import React, { Component } from 'react';

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {}
        }

        this.dataset = props.dataset;
    }

    render() {
        var stats = this.generateStatistics(this.dataset);

        return (
            <div className="statisticsContainer">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="statisticBox">
                                    average: {stats.average.toFixed(2)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="statisticBox">
                                    median: {stats.median.toFixed(2)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="statisticBox">
                                    max: {stats.max.toFixed(2)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="statisticBox">
                                    min: {stats.min.toFixed(2)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="statisticBox">
                                    stddev: {stats.stddev.toFixed(2)}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    generateStatistics(dataset)
    {
        if (dataset.length === 0) return 0;

        // get sum & min/max
        let sum = 0;
        let min = Infinity;
        let max = Number.NEGATIVE_INFINITY;
        let range = max - min;

        // get average
        for (let i = 0; i < dataset.length; i++){
            sum += dataset[i];
            if (dataset[i] < min) min = dataset[i];
            if (dataset[i] > max) max = dataset[i];
        }
        let average = (sum / dataset.length);

        // get standard deviation
        let stdvalues = [];
        for (let i = 0; i < dataset.length; i++) {
            let val = dataset[i] - average;
            stdvalues.push(val * val);
        }

        let stdsum = 0;
        for (let i = 0; i < stdvalues.length; i++){
            stdsum += stdvalues[i];
        }
        let stddev = Math.sqrt(stdsum / stdvalues.length);

        // get median
        let half = Math.floor(dataset.length / 2);
        let median = 0;
        if (dataset.length % 2) median = dataset[half];
        else median = (dataset[half - 1] + dataset[half]) / 2.0;


        return {average: average, median: median, max: max, min: min, range: range, stddev: stddev};
    }
}

export default Statistics;