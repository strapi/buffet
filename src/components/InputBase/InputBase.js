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
        <StyledInputText
          {...this.props}
          type={this.state.showPassword ? 'text' : this.props.type}
          className={this.state.showPassword ? 'shown' : ''}
          placeholder={this.props.placeholder}
        />
        {this.props.type === 'password' && (
          <button type="button" onClick={this.handleClick}>
            <InputIcon type={this.props.type} />
          </button>
        )}
      </StyledInputBase>
    );
  }
}

InputBase.defaultProps = {
  label: null,
  placeholder: null,
  type: 'text',
};

InputBase.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'search', 'password', 'email', 'textarea']),
};

export default InputBase;
