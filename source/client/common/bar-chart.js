import React from 'react';

export class BarChart extends React.PureComponent {

    svg;
    componentDidMount() {
        let graphInfo = this.props.graphInfo;
        this.svg = drawGraph(this.chartElem, graphInfo, this.svg);
    }

    render() {
        return (
            <div className='chart' ref={(elem) => { this.chartElem = elem }} />
        );
    };
}

const drawGraph = (elem, graphInfo, svg) => {

    if (graphInfo.data.length > 0 ){
        let height = elem.clientHeight || 250;
        let width = elem.clientWidth;
        let gutterWidth = 2;
        let padding = 40;
        let barWidth = ((width - (padding * 2)) / graphInfo.data.length);

        let xScale = d3.scaleLinear()
            .domain([0, graphInfo.data.length])
            .range([padding, width - padding])

        let yScale = d3.scaleLinear()
            .domain([0, d3.max(graphInfo.data) + 10])       //+10 to show Y Axis longer than actual Max Data
            .range([padding, height - padding])

        let yAxisScale = d3.scaleLinear()
            .domain([0, d3.max(graphInfo.data) + 10])
            .range([height - padding, padding])

        if (!svg) {
            svg = d3.select(elem)
                .append('svg')
                .attr('height', height)
                .attr('width', width);
        }

        svg.selectAll('rect')
            .data(graphInfo.data)
            .enter()
            .append('rect')

            .attr('x', (d, i) => xScale(i))
            .attr('y', d => height - yScale(d))

            .attr('width', barWidth - gutterWidth)
            .attr('height', d => yScale(d) - padding)

            .attr('class', 'bar-fill');

        svg.selectAll('text')
            .data(graphInfo.data)
            .enter()
            .append('text')
            .text(d => d)

            .attr('x', (d, i) => xScale(i) + barWidth / 2 - 5)
            .attr('y', d => height - yScale(d) - 1)

            .attr('class', 'bar-text');

        svg.append('g')
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(d3.axisBottom(xScale).ticks(graphInfo.data.length))

            .append('text')
            .attr('x', width / 2)
            .attr('y', 30)
            .attr('class', 'axis-text')
            .text(graphInfo.xAxisLabel);

        svg.append('g')
            .attr("transform", "translate(" + padding + ",0)")
            .call(d3.axisLeft(yAxisScale).ticks(d3.max(graphInfo.data) / 10))

            .append('text')
            .attr('x', -(height / 2))
            .attr('y', -25)
            .attr('class', 'axis-text')
            .attr("transform", "rotate(-90)")
            .text(graphInfo.yAxisLabel);
        return svg;
    }
}