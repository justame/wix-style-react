import React from 'react';
import styles from './Button.less';
import classNames from 'classnames';

export default (props) => {

    const {style ='fullblue', hover, active, disabled, onClick} = props;

    const className = classNames({
        [styles.button]:true,
        [styles[style]]:true,
        [styles.hover]: hover,
        [styles.active]:active,
        [styles.disabled]:disabled
        
    });

    return (
        <button className={className} onClick={onClick} >
            {props.children}
        </button>
    );
}
