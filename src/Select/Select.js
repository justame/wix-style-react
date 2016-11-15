import styles from './Select.less';
import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import $ from 'jquery'

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open:false, hovered:null };

        this._onSelect          = this._onSelect.bind(this);
        this._onMouseLeave      = this._onMouseLeave.bind(this);
        this._onMouseEnter      = this._onMouseEnter.bind(this);
        this._onKeyPress        = this._onKeyPress.bind(this);
        this._documentClicked   = this._documentClicked.bind(this);
        this._toggleOpen        = this._toggleOpen.bind(this);
    }

    componentDidMount() {
        $(document).on('keydown', this._onKeyPress);
    }

    componentWillUnmount() {
        $(document).off('keydown', this._onKeyPress);
    }

    _onSelect(index) {
        // TODO: Should we test if it actually changed? This will still be called if the same item was clicked
        var value = this.props.options[index].value;
        this._toggleOpen(false);
        this.props.onChange(value);
    }

    _onMouseEnter(index) {
        this.setState({hovered:index});
    }

    _onMouseLeave() {
        this.setState({hovered:null});
    }

    _onKeyPress(e) {
        if (this.state.open) {
            if (e.keyCode === 40) { // Down
                let newHovered = (this.state.hovered === null ? 0 : this.state.hovered) + 1;
                if (newHovered >= this.props.options.length) newHovered = 0;
                this.setState({hovered:newHovered});
                $(ReactDOM.findDOMNode(this.refs.options)).stop().animate({scrollTop:(newHovered - 3) * 35}, '500', 'swing');
                e.preventDefault();
                e.stopPropagation();
                return false;
            } else if (e.keyCode === 38) { // Up
                let newHovered = (this.state.hovered === null ? 0 : this.state.hovered) - 1;
                if (newHovered < 0) newHovered = this.props.options.length - 1;
                this.setState({hovered:newHovered});
                $(ReactDOM.findDOMNode(this.refs.options)).stop().animate({scrollTop:(newHovered - 3) * 35}, '500', 'swing');
                e.preventDefault();
                e.stopPropagation();
                return false;
            } else if (e.keyCode === 13) { // Enter
                this._onSelect(this.state.hovered || 0);
                e.preventDefault();
                e.stopPropagation();
                return false;
            } else if (e.keyCode === 27) { // Esc
                this._toggleOpen(false);
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    }

    _documentClicked(e) {
        if (e.target === ReactDOM.findDOMNode(this.refs.button)) return;
        if (e.target.parentElement === ReactDOM.findDOMNode(this.refs.button)) return;
        _.defer(() => {
            if (this.state.open) this._toggleOpen(false);
        }, 200);
    }

    _toggleOpen(value) {
        let newOpen = _.isUndefined(value) ? !this.state.open : value;

        if (newOpen) {
            $(document).on('click', this._documentClicked);
        } else {
            $(document).off('click', this._documentClicked);
        }

        this.setState({open:newOpen, hovered:null});
    }

    render() {

        // Find the title by value if given, otherwise default to the placeholder
        // Also, remove the selected option from the dropdown list
        let { options, placeHolder, value } = this.props;

        let title = placeHolder;

        if (!_.isUndefined(value)) {
            title = (_.find(options, function(o) {return o.value === value;}) || {}).text || title;
        }

        var buttonClasses = classNames(styles.button, {
            [styles.error]: this.props.error,
            'wix-select-button': true
        })

        return (
            <div className={styles.wrapper} data-testkey='select_wrapper'>
                <div className={buttonClasses} onClick={() => this._toggleOpen()} ref='button' >
                    <div className={styles.buttonText}>
                        {title}
                    </div>
                    <svg viewBox="0 0 58 32" className={styles.menuArrow} >
                        <path d="M51.2 6.4c0 0 0 6.4 0 6.4s-6.4 0-6.4 0c0 0 0 6.4 0 6.4s-6.4 0-6.4 0c0 0 0 6.4 0 6.4s-6.4 0-6.4 0c0 0 0 6.4 0 6.4s-6.4 0-6.4 0c0 0 0-6.4 0-6.4s-6.4 0-6.4 0c0 0 0-6.4 0-6.4s-6.4 0-6.4 0c0 0 0-6.4 0-6.4s-6.4 0-6.4 0c0 0 0-6.4 0-6.4s-6.4 0-6.4 0c0 0 0-6.4 0-6.4s6.4 0 6.4 0c0 0 6.4 0 6.4 0s0 6.4 0 6.4c0 0 6.4 0 6.4 0s0 6.4 0 6.4c0 0 6.4 0 6.4 0s0 6.4 0 6.4c0 0 6.4 0 6.4 0s0-6.4 0-6.4c0 0 6.4 0 6.4 0s0-6.4 0-6.4c0 0 6.4 0 6.4 0s0-6.4 0-6.4c0 0 6.4 0 6.4 0s6.4 0 6.4 0c0 0 0 6.4 0 6.4s-6.4 0-6.4 0z"></path>
                    </svg>
                </div>
                <div data-testkey={(this.props.nameAttr) ? this.props.nameAttr + 'Select' : 'wixMenuSelect'} className={`${styles.options} ${this.state.open ? styles.shown : ''} ${this.props.dropDirectionUp ? styles.up : styles.down}`} ref='options' >
                    {_.map(options, (option, idx) => (
                        option.text === '-' ? (this.renderDivider()) : (this.renderItem({option, idx, selected:option.value === value, hovered:idx === this.state.hovered}))
                    ))}
                </div>
            </div>
        );
    }

    renderDivider() {
        return (<div key = 'divider' className={styles.divider}></div>);
    }

    renderItem({option, idx, selected, hovered}) {
        return (
            <div className={`${styles.option} ${selected ? styles.selected : ''} ${hovered ? styles.hovered : ''}`}
                 key = {idx}
                 data-testkey = {(this.props.nameAttr) ? this.props.nameAttr + 'Option' : 'wixMenuOption'}
                 onClick = {() => this._onSelect(idx)}
                 onMouseEnter={() => this._onMouseEnter(idx)}
                 onMouseLeave={() => this._onMouseLeave(idx)}>
                {option.text}
            </div>
        );
    }
}

Select.propTypes = {
    dropDirectionUp : React.PropTypes.bool,
    onChange        : React.PropTypes.func,
    error           : React.PropTypes.bool,
    placeHolder     : React.PropTypes.node,
    value           : React.PropTypes.string,
    nameAttr        : React.PropTypes.string,
    options         : React.PropTypes.arrayOf(React.PropTypes.shape({
        text  : React.PropTypes.node.isRequired,
        value : React.PropTypes.string.isRequired
    }))
};

Select.defaultProps =  {
    dropDirectionUp : false,
    onChange        : null,
    options         : [],
    error           : false,
    placeHolder     : '',
    value           : null
};

Select.displayName = 'Select';

export default Select;
