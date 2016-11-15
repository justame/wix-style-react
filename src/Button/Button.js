import React from 'react';
import styles from './Button.less';
import classNames from 'classnames';

export default function Button(props) {

    const {style ='fullblue', hover, active, disabled, height, onClick} = props;

    const className = classNames({
        [styles.button]:true,
        [styles[style]]:true,
        [styles.hover]: hover,
        [styles.active]:active,
        [styles.disabled]:disabled
    });

    const _style = {
        height
    };

    return (
        <button className={className} onClick={onClick} style={_style} >
            <div className={styles.inner}>
                {props.children}
            </div>
        </button>
    );
}

Button.displayName = 'Button';
Button.defaultProps = {
    style: 'fullblue',
    height: 36
}
Button.propTypes = {
    style: React.PropTypes.oneOf(['fullblue', 'emptyblue', 'fullpurple', 'emptypurple', 'fullgreen', 'emptygreen', 'fullred', 'emptyred']).isRequired,
    height: React.PropTypes.number,
    hover: React.PropTypes.bool,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func
}
