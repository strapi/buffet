import styled from 'styled-components';
import 'react-dates/lib/css/_datepicker.css';
import sizes from '../../assets/styles/sizes';

const Wrapper = styled.div`
  display: flex;
  * {
    font-family: 'Lato';
    outline: 0;
  }
  .DateInput_input__focused {
    border-color: #005fea;
  }
  .SingleDatePickerInput {
    border: 1px solid #e3e9f3;
    border-radius: 3px;
  }
  .DateInput {
    height: cal(${sizes.input.height} -1px);
    line-height: ${sizes.input.height};
    background: transparent;
  }
  .DateInput_input {
    padding: 0 10px;
    color: #333740;
    font-weight: 600;
    background: transparent;
    line-height: ${sizes.input.height};
    font-size: 13px;
  }
  .CalendarDay__selected {
    background: #005fea; //background
    color: white; //text
  }
  .DayPickerKeyboardShortcuts_show__bottomRight {
    &:before {
      border-right: 33px solid #005fea;
    }
  }
`;

export default Wrapper;
