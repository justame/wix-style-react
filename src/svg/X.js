import React from 'react';

export default React.createClass({
    render:function() {

        var width = this.props.width;
        var height = this.props.height;
        var color = this.props.color;
        var shapeRendering = this.props.shapeRendering || 'crispEdges';
        var thickness = this.props.thickness || 1;

        var path = '';

        for (var i = 0; i <= thickness / 2; ++i) {
            path += `M${i} 0 L${width} ${height - i} `;
            path += `M${width - i} 0 L0 ${height - i} `;
        }

        for (var i = 1; i <= thickness / 2; ++i) {
            path += `M0 ${i} L${width - i} ${height} `;
            path += `M${width} ${i} L${i} ${height} `;
        }

        var style = { stroke:color, strokeWidth:'1px' };

        return (
            <svg width={width} height={height} style={{shapeRendering: shapeRendering}}>
                <path d={path} style={style} />
            </svg>
        );
    }
});
