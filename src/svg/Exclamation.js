import React from 'react';

export default React.createClass({
    render() {

        let {width, height, color} = this.props;

        var path = '';

        for (var i = 0; i <= width; ++i) {
            path += `M${i} 0 L${i} ${height - 2 * width} `;
            path += `M${i} ${height - width} L${i} ${height} `;
        }

        var style = { stroke:color, strokeWidth:'1px' };

        return (
            <svg width={width} height={height} style={{shapeRendering:'crispEdges'}}>
                <path d={path} style={style} />
            </svg>
        );
    }
});
