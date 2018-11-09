import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

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
}

Checkbox.defaultProps = {
  label: null,
  val: 1
};

Checkbox.propTypes = {
  label: PropTypes.string,
  val: PropTypes.string
};
