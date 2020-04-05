import React, { Component } from 'react';

import Chart from 'chart.js';

import Utility from './Utility';
import AbacusMath from './AbacusMath';

import Statistics from './Statistics';

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(70, 227, 149)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

function randomScalingFactor() {
    return Math.floor(Math.random() * (100 + 100)) + 100;
}

class NumericSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {}
        }

        this.variableName = props.variableName || "VARIABLE NAME";
        this.xAxisLabel = props.xAxisLabel || "Time (s)";
        this.yAxisLabel = props.yAxisLabel || "Value";
        this.dataSetA = [];
        this.dataSetB = [];

        this.labels = [];

        for (let i = 0; i < 30; i++)
        {
            this.labels.push(i);
            this.dataSetA.push(randomScalingFactor());
            this.dataSetB.push(randomScalingFactor());
        }

        this.props.glContainer.setTitle("📈 Numeric Set [" + this.variableName + "]");

        this.canvasID = "chart" + Utility.generateUUID();
    }

    render() {
        return (
            <div className="Window-Content">
                <div className="chart-container">
                    <canvas id={this.canvasID} aria-label="Numeric Set Line Chart" role="img" />
                </div>
                <br />
                <Statistics dataset={this.dataSetA} />
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
                    label: 'My First dataset',
                    backgroundColor: Utility.randomChartColor(),
                    borderColor: Utility.randomChartColor(),
                    data: this.dataSetA,
                    fill: false,
                }, {
                    label: 'My Second dataset',
                    fill: false,
                    backgroundColor: Utility.randomChartColor(),
                    borderColor: Utility.randomChartColor(),
                    data: this.dataSetB,
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