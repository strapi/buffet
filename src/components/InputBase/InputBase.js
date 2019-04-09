/**
 *
 * InputBase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/input';
import StyledInputBase from './StyledInputBase';
import StyledInputText from '../InputText';
import InputIcon from '../../styled/Icon';

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
  ...commonDefaultProps,
  label: null,
  type: 'text',
  value: null,
};

InputBase.propTypes = {
  ...commonPropTypes,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'search', 'password', 'email', 'textarea']),
  value: PropTypes.string,
};

export default InputBase;
