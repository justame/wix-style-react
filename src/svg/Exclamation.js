import React from 'react';

export default function Exclamation(props) {
    let {width, height, color} = props;

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

Exclamation.displayName = 'Exclamation';
Exclamation.propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired
}
Exclamation.defaultProps = {
    color: 'white'
}
