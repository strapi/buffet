/**
 *
 * Paging
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Paging = styled.div`
  ul.pagination {
    display: table;
    margin: 0 auto;
    font-size: 10px;
    .page-item {
      display: inline-block;
      position: relative;
      vertical-align: middle;
      .page-link {
        box-shadow: none;
        font-family: 'Lato';
        font-size: 12px;
        background-color: transparent;
        color: ${colors.blueTxt};
        &:hover {
          background-color: transparent;
        }
      }
      &.selected {
        .page-link {
          font-weight: ${sizes.fontWeight.black};
        }
      }

      /* Left & right arrows */
      &:first-of-type,
      &:last-of-type {
        .page-link {
          width: 10px;
          height: 15px;
        }
      }
      &:first-of-type .page-link:before,
      &:last-of-type .page-link:after {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        bottom: 0;
        width: 5px;
        height: 5px;
        overflow: hidden;
        font-size: 12px;
      }
      &:first-of-type {
        .page-link {
          &:before {
            left: 0;
            transform: rotate(234deg) skew(20deg);
          }
        }
        & + span {
          display: none;
        }
      }
      &:last-of-type .page-link {
        &:after {
          right: 0;
          transform: rotate(54deg) skew(20deg);
        }
      }
    }
  }
`;

export default Paging;
