import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default class Checkbox extends Component {
  static defaultProps = {
    label: null,
    val: 1
  }

  static propTypes = {
    label: PropTypes.string,
    val: PropTypes.string
  };

  state = {
    checked: false
  };

  handleClick = () => {
    this.setState((prevState, props) => {
      return { checked: !prevState.checked };
    });
  };

  render() {
    const { checked } = this.state;
    const { label, val } = this.props;
    const id = shortid.generate();

    return (
      <Fragment>
        <input key={id} id={id} name={id} type="checkbox" value={val} checked={checked} onClick={(e) => { this.handleClick(); }} />
        {label && <label htmlFor={id}>{label}</label>}
      </Fragment>
    );
  }
};