import React          from 'react';
import styles         from './Input.less';
import classNames     from 'classnames';
import SvgExclamation from '../svg/Exclamation.js';

class Input extends React.Component {

    render() {

        const {
            extraClasses,
            value,
            forceHover,
            forceFocus,
            placeholder,
            error,
            unit,
            colorStyle,
            defaultValue,
            tabIndex,
        } = this.props;

        const inputClasses = forceFocus ? styles.focus : forceHover ? styles.hover : '';

        const exclamation = error ? <SvgExclamation width={2} height={11} /> : null;

        const unitDom = unit ? <div className={styles.unit} onClick={this._focus}>{unit}</div> : null;

        const classes = classNames({
            [styles.input]            : true,
            [styles.error]            : !!error,
            [styles.inputWithUnit]    : !!unit,
            [styles[colorStyle]]      : true,
            [extraClasses]            : true
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

export default Input;
