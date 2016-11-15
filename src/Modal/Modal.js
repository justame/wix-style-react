import React from 'react';
import ReactModal from 'react-modal';
import Button from '../Button/Button.js';
import styles from './Modal.less';
import SvgX from '../svg/X.js';

function Modal(props) {
    const modalStyles = {
        overlay : {
            // Overriding defaults
            position        : 'fixed',
            top             : 0,
            left            : 0,
            right           : 0,
            bottom          : 0,
            zIndex          : 11 + (props.zIndex || 0),
            backgroundColor : 'rgba(30, 30, 30, 0.55)',
            // Overriding defaults - END
            display         : 'flex',
            justifyContent  : 'center',
            alignItems      : 'flex-start',
            overflowY       : 'auto'
        },
        content : {
            // Overriding defaults
            position                : 'relative',
            top                     : '50px',
            left                    : '0px',
            right                   : '0px',
            bottom                  : 'initial',
            border                  : 'none',
            overflow                : 'initial',
            WebkitOverflowScrolling : 'touch',
            outline                 : 'none',
            borderRadius            : '0px',
            padding                 : '0px',
            // Overriding defaults - END
            backgroundColor         : 'transparent',
            marginBottom            : '0px'
        }
    };

    const modalClasses = `${styles.modal} ${styles[props.style]}`;

    return (
        <ReactModal
            isOpen         = {props.isOpen}
            onCancel       = {props.onCancel}
            style          = {modalStyles}
            className      = {modalClasses}
        >
            <div className={styles.content} >

                <div className={styles.header} >
                    {props.title}
                    <button className={styles.close} onClick={props.onCancel}>
                        <SvgX width = {9} height = {9} thickness = {1} color={'white'} />
                    </button>
                </div>

                <div className = {styles.body} >
                    {props.children}
                </div>

                {props.hideFooter || (
                    <Footer
                        confirmText = {props.confirmText}
                        onOk        = {props.onOk}
                        cancelText  = {props.cancelText}
                        onCancel    = {props.onCancel || props.onCancel}
                        style       = {props.style}
                    />
                )}
            </div>
        </ReactModal>
    );
}

Modal.propTypes = {
    isOpen         : React.PropTypes.bool.isRequired,
    onCancel       : React.PropTypes.func.isRequired,
    hideFooter     : React.PropTypes.bool,
    confirmText    : React.PropTypes.string,
    cancelText     : React.PropTypes.string,
    onOk           : React.PropTypes.func,
    style          : React.PropTypes.oneOf([null, 'red', 'blue', 'green', 'lightGreen']),
    title          : React.PropTypes.node,
    zIndex         : React.PropTypes.number,
    children       : React.PropTypes.any
};

Modal.defaultProps = {
    onOk      : () => {},
    style     : 'blue'
};

// ----------------------------------------------------------------------

function Footer(props) {
    return (
        <div className={styles.footer} >
            {props.children}
            <div className = {styles.footerbuttons}>
                {props.cancelText && (
                    <Button style={'empty'+props.style} onClick={props.onCancel} >
                        {props.cancelText}
                    </Button>
                )}
                <Button style={'full'+props.style} onClick={props.onOk} >
                    {props.confirmText}
                </Button>
            </div>
        </div>
    );
}

Footer.propTypes = {
    confirmText : React.PropTypes.string,
    cancelText  : React.PropTypes.string,
    onCancel    : React.PropTypes.func,
    onOk        : React.PropTypes.func,
    style       : React.PropTypes.string,
    children    : React.PropTypes.any
};

Footer.defaultProps = {
    style : 'blue'
};

Modal.Footer = Footer;

export default Modal;
