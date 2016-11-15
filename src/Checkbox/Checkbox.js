import styles from './Checkbox.less';
import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {
    constructor() {
        super();
        this.id = _.uniqueId();
    }

    render() {
        const {checked, disabled, hover, active, onChange} = this.props;

        let classname = classNames({
            [styles.wrapper]         : true,
            [styles.checked]         : checked,
            [styles.unchecked]       : !checked,
            [styles.hover]           : hover,
            [styles.active]          : active,
            [styles.disabled]        : disabled
        });

        return (
            <div className={classname} >
                <input type='checkbox' id={this.id} checked={checked} disabled={disabled} onChange={onChange} />
                <label htmlFor={this.id}>
                    <div className={styles.checkbox}>
                        <div className={styles.inner}> 
                            <svg viewBox="0 0 32 32">
                                <path d="M28.222 6.097c-0.978-1.1-2.563-1.1-3.541 0l-12.281 13.816-4.684-5.953c-0.691-1.35-2.222-1.809-3.419-1.031s-1.606 2.503-0.916 3.847l6.741 8.569c0.175 0.244 0.369 0.459 0.572 0.644 0.431 0.447 0.969 0.691 1.519 0.734 0.053 0.006 0.103 0.006 0.156 0.009 0.006 0 0.016 0 0.022 0 0.072 0 0.144-0.003 0.216-0.012 0.016-0.003 0.031-0.003 0.047-0.006 0.037-0.006 0.075-0.012 0.113-0.019 0.509-0.087 0.997-0.35 1.391-0.788l14.066-15.825c0.978-1.103 0.978-2.888 0-3.984z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.children}>{this.props.children}</div>
                </label>
            </div>
        );
    }
}

Checkbox.propType = {
    checked: React.PropTypes.bool.isRequired,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    hover: React.PropTypes.bool,        // FOR AUTOMATIC TESTING
    active: React.PropTypes.bool        // FOR AUTOMATIC TESTING
};

Checkbox.defaultProps = {
    checked: false,
    onChange: () => {}
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
