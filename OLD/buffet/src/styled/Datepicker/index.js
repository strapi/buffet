/**
 *
 * DatePicker
 *
 */

import styled from 'styled-components';
import 'react-dates/lib/css/_datepicker.css';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const DatePicker = styled.div`
  position: relative;
  z-index: 9;
  * {
    font-family: 'Lato';

    outline: 0;
    box-sizing: border-box;
  }
  .DateInput {
    width: 100%;
  }
  svg.fa-calendar-alt {
    font-size: 14px;
  }
  input {
    font-weight: ${sizes.input.fontWeight};
    position: relative;
    z-index: 1;
    width: 100%;
    height: ${sizes.input.height};
    padding: 0 ${sizes.input.padding};
    font-size: ${sizes.input.fontSize};
    cursor: pointer;
    border: 1px solid ${colors.lightGrey};
    border-radius: ${sizes.radius};
    color: ${colors.black};
    background-color: transparent;
    padding-left: 42px;
    &::-webkit-input-placeholder {
      color: ${colors.greyPlaceholder};
    }
  }
  .SingleDatePicker,
  .SingleDatePickerInput__withBorder {
    width: 100%;
  }
  .SingleDatePickerInput__withBorder {
    border: 0;
  }
  .DateInput_input__focused {
    border-color: ${colors.blueBorder};
  }
  .DayPicker_weekHeader {
    font-weight: 700;
    color: ${colors.black};
    border-top: 1px solid #f9f9f9;
    margin-top: -10px;
    li {
      padding-top: 5px;
      padding-bottom: 5px;
      small {
        font-size: 1.3rem;
      }
    }
  }

  // To remove for new UI
  .DayPicker__withBorder {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #f9f9f9;
    background: white;
    position: absolute;
  }
  .DateInput_fang {
    display: none;
  }
  .CalendarMonth_caption {
    font-size: 1.3rem;
  }
  .DayPicker_transitionContainer {
    padding: 4px;
  }
  .DayPickerKeyboardShortcuts_show {
    display: none;
  }
  .DayPickerNavigation {
    div[role='button'] {
      font-size: 21px;
      width: 35px;
      height: 33px;
      font-weight: 700;
      color: ${colors.black};
      border-radius: 0;
      text-align: center;
      &,
      &:hover {
        border: 0;
      }
      &.DayPickerNavigation_leftButton__horizontalDefault {
        &::before {
          content: '‹';
        }
      }
      &.DayPickerNavigation_rightButton__horizontalDefault {
        &::before {
          content: '›';
        }
      }
      svg {
        display: none;
      }
      &:hover {
        background: #eeeeee;
      }
    }
  }
  td {
    position: relative;
    cursor: pointer;
    width: 34px;
    height: 28px;
    font-size: 1.3rem;
    &,
    &.CalendarDay__selected,
    &.CalendarDay__selected:active,
    &.CalendarDay__selected:hover,
    &.CalendarDay__default:hover {
      border: 0;
    }
    &.CalendarDay__today {
      &::before {
        content: '';
        display: inline-block;
        border-left: 7px solid transparent;
        border-bottom: 7px solid #005fea;
        border-top-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        bottom: 4px;
        right: 4px;
      }
    }
    &.CalendarDay__selected {
      background-color: #005fea;
      color: #fff;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
      &.CalendarDay__today {
        &::before {
          border-bottom: 7px solid white;
        }
      }
    }
  }
`;

export default DatePicker;
