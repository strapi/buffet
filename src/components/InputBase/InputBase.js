/**
 *
 * InputBase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledInputBase from './StyledInputBase';
import StyledInputText from '../InputText';
import InputIcon from '../InputIcon';

class InputBase extends React.Component {
  state = { showPassword: false };

  handleClick = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    return (
      <StyledInputBase className="input-wrapper">
        {(this.props.type === 'search' || this.props.type === 'email') && (
          <InputIcon type={this.props.type} />
        )}
        {this.props.type === 'password' && (
          <button
            type="button"
            onClick={this.handleClick}
            className={this.state.showPassword ? 'shown' : ''}
          >
            <InputIcon type={this.props.type} />
          </button>
        )}
        <StyledInputText
          {...this.props}
          type={this.state.showPassword ? 'text' : this.props.type}
          placeholder={this.props.placeholder}
        />
      </StyledInputBase>
    );
  }
}

InputBase.defaultProps = {
  label: null,
  onChange: null,
  placeholder: null,
  type: 'text',
};

InputBase.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'search', 'password', 'email', 'textarea']),
  value: PropTypes.string.isRequired,
};

export default InputBase;
