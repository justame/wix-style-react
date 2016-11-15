import React from 'react';
import _ from 'lodash';
import styles from './ToggleSwitch.less';

class ToggleSwitch extends React.Component {

    constructor(params) {
        super(params);
        this.id = _.uniqueId();
    }
    
    render() {
        const {checked, onChange} = this.props;
        const id = this.id;

        return (
            <div className={styles.toggleSwitch}>
                <input type='checkbox' id={id} checked={checked} onChange={onChange} />
                <label htmlFor={id} className={styles.outerLabel}>
                    <label htmlFor={id} className={styles.innerLabel}>
                        <svg className={styles.toggleActive} viewBox="0 0 41 32">
                            <path d="M0.169 17.815c0.169 1.098 0.76 2.111 1.689 2.871l14.269 10.385c1.942 1.435 4.644 1.013 6.079-0.844l18.069-23.303c1.435-1.858 1.098-4.559-0.844-5.995s-4.644-1.098-6.164 0.844l-15.367 19.842-10.723-7.852c-1.942-1.435-4.644-1.013-6.164 0.844-0.76 0.929-1.013 2.111-0.844 3.208z"></path>
                        </svg>
                        <svg className={styles.toggleInactive} viewBox="0 0 143 32">
                            <path d="M0 0h142.545v32h-142.545v-32z"></path>
                        </svg>
                    </label>
                </label>
            </div>
        );
    }
}

ToggleSwitch.displayName = 'ToggleSwitch';
ToggleSwitch.propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
}
ToggleSwitch.defaultProps = {
    checked: false,
    onChange: () => {}
}

export default ToggleSwitch;
