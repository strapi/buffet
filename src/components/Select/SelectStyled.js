import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import img from '../../assets/icons/icon_select.svg';

const SelectStyled = styled.select`

  width: 100%;
  height: ${sizes.input.height};
  padding: 0 ${sizes.input.padding};
  font-family: 'Lato';
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  outline: 0;
  border: 1px solid ${colors.lightGrey}
  border-radius: ${sizes.radius};
  color: ${colors.blueTxt};
  background-color: ${colors.white};

  padding-right: 30px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: right;
  
  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }
  &:focus {
    border-color: ${colors.blueBorder};
  }
`;

export default SelectStyled;
