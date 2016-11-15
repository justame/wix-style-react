import React from 'react';
import _ from 'lodash';
import styles from './RadioGroup.less';
import classNames from 'classnames';

class RadioGroup extends React.Component {

    constructor(params) {
        super(params);
        this.id = _.uniqueId();

        this._onChange = this._onChange.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

    getChildContext() {
        return {radioId: this.id, radioSelected: this.props.value, radioOnChange: this._onChange};
    }

    _onChange(value) {
        this.props.onChange(value);
    }
}


RadioGroup.displayName = 'RadioGroup';
RadioGroup.propTypes = {
    onChange:       React.PropTypes.func.required,
    value:          React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number ]),
    children:       React.PropTypes.any
}
RadioGroup.defaultProps = {
}
RadioGroup.childContextTypes = {
  radioOnChange : React.PropTypes.func,
  radioId :       React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number ]),
  radioSelected : React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ])
}

class RadioButton extends React.Component {

    constructor(params) {
        super(params);
        this.id = _.uniqueId();
    }

    render() {

        const {value, vAlign} = this.props;

        const checked = this.context.radioSelected === value;

        const radioClasses = classNames({
            [styles.radio] : true,
            [styles.checked] : checked
        });

        const labelClasses = classNames({
            [styles.vcenter]: vAlign === 'center',
            [styles.vtop]: vAlign === 'top'
        });

        return (
            <div className={styles.wrapper}>
                <input 
                    type='radio' 
                    name={this.context.radioId} 
                    value={value} 
                    id={this.id} 
                    checked={checked} 
                    onChange={() => this.context.radioOnChange(value)}
                />
                <label htmlFor={this.id} className={labelClasses} >
                    <div className={radioClasses}>
                    </div>
                    <div className={styles.children}>
                        {this.props.children}
                    </div>
                </label>
            </div>
        );
    }
}

RadioButton.displayName = 'RadioGroup.Button';
RadioButton.propTypes = {
    value:          React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number ]),
    vAlign:         React.PropTypes.oneOf(['center', 'top']).isRequired,
    children:       React.PropTypes.any
}
RadioButton.defaultProps = {
    vAlign: 'center'
}
RadioButton.contextTypes = {
    radioOnChange : React.PropTypes.func,
    radioId :       React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number ]),
    radioSelected : React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]) 
};

RadioGroup.Radio = RadioButton;

export default RadioGroup;
