import React          from 'react';
import styles         from './Input.less';
import classNames     from 'classnames';
import SvgExclamation from '../svg/Exclamation.js';

class Input extends React.Component {

    render() {

        const {
            value,
            forceHover,
            forceFocus,
            placeholder,
            error,
            unit,
            defaultValue,
            tabIndex
        } = this.props;

        const inputClasses = forceFocus ? styles.focus : forceHover ? styles.hover : '';

        const exclamation = error ? <SvgExclamation width={2} height={11} /> : null;

        const unitDom = unit ? <div className={styles.unit} onClick={this._focus}>{unit}</div> : null;

        const classes = classNames({
            [styles.input]            : true,
            [styles.error]            : !!error,
            [styles.inputWithUnit]    : !!unit
        });

        return (
            <div className={classes} onDoubleClick={this._onDoubleClickMargin}>
                {unitDom}
                <input 
                    ref='input' 
                    className={inputClasses} 
                    defaultValue={defaultValue} 
                    value={value} 
                    onChange={this._onChange} 
                    onFocus={this._onFocus} 
                    onBlur={this._onBlur} 
                    onKeyDown={this._onKeyDown} 
                    onDoubleClick={this._onDoubleClick} 
                    placeholder={placeholder} 
                    tabIndex={tabIndex} />

                {exclamation}

            </div>
        );
    }
}

Input.displayName = 'Input';

Input.propTypes = {
    value: React.PropTypes.string,
    forceHover: React.PropTypes.bool,
    forceFocus: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    error: React.PropTypes.bool,
    unit: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    tabIndex: React.PropTypes.number
}

export default Input;
