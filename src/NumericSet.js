import React, { Component } from 'react';

import Chart from 'chart.js';

import Utility from './Utility';

import Statistics from './Statistics';

class NumericSet extends Component {
    static windowData = {
        title: '📈 Numeric Set',
        type: 'react-component',
        component: 'numeric-set',
        tooltip: 'numeric data set'
    };

    constructor(props) {
        super(props);
        this.state = {
            results: {}
        }

        this.variableName = props.variableName || "NAME";
        this.variableType = props.variableType || "TYPE";
        this.dataSet = props.dataSet || [];

        this.xAxisLabel = props.xAxisLabel || "Time (s)";
        this.yAxisLabel = props.yAxisLabel || "Value";

        this.labels = [];
        this.chartSet = [];

        //this.props.glContainer.setTitle(`📈 Numeric Set ${Utility.randomDemoWord()}`);

        this.canvasID = "chart" + Utility.generateUUID();

        for (let i = 0; i < this.dataSet.length; i++)
        {
            let data = this.dataSet[i];
            this.labels.push(data.Time.toFixed(1));
            this.chartSet.push(data.Value);
            //this.dataSetB.push(Utility.randomScalingFactor());
        }
    }

    render() {
        return (
            <div className="Window-Content">
                <div className="chart-container">
                    <canvas id={this.canvasID} aria-label="Numeric Set Line Chart" role="img" />
                </div>
                <br />
                <Statistics dataset={this.chartSet} />
            </div>
        );
    }

    drawChart() {
        var ctx = document.getElementById(this.canvasID).getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.variableName,
                    backgroundColor: Utility.randomChartColor(),
                    borderColor: Utility.randomChartColor(),
                    data: this.chartSet,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: this.variableName
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: this.xAxisLabel
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: this.yAxisLabel
                        }
                    }]
                }
            }
        });
    }

    componentDidMount() {
        this.drawChart();
    }

    componentDidUpdate() {
        this.drawChart();
    }
}

export default NumericSet;