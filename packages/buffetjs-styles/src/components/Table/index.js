/**
 *
 * Table
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Table = styled.div`
  width: 100%;
  position: relative;
  overflow-x: scroll;
  border-radius: 3px;
  box-shadow: 0 2px 4px #e3e9f3;
  background: white;
  table,
  .deleteRow {
    min-width: 500px;
  }
  table {
    width: 100%;
    min-width: 500px;
    font-family: 'Lato';
    overflow: hidden;
    border-collapse: collapse;
    &.rowsSelected {
      tbody {
        &::before {
          content: '-';
          height: ${sizes.table.deleteRow.height};
          display: block;
        }
      }
    }
  }
  .deleteRow {
    height: ${sizes.table.deleteRow.height};
    left: 0;
    top: ${sizes.table.header.height};
    padding: 0 25px;
    font-size: 1.3rem;
    line-height: ${sizes.table.deleteRow.height};
    background-color: ${colors.greyHover};
    font-weight: ${sizes.fontWeight.bold};
    button {
      border: 0;
      padding: 0;
      margin: 0;
      background: transparent;
      color: ${colors.darkOrange};
      outline: 0;
      svg {
        margin-left: ${sizes.margin}px;
      }
      p,
      svg {
        display: inline;
      }
    }
  }
  tr {
    padding-left: 2.5em;
    padding-right: 2.5em;
    text-align: left;
    th,
    td {
      font-size: 1.3rem;
      padding: 0 25px;
      &.checkCell {
        width: 50px;
      }
    }
  }
  thead {
    tr {
      line-height: 0.1rem;
      font-weight: ${sizes.fontWeight.bold};
      text-transform: capitalize;
      th {
        background-color: ${colors.greyHeader};
        height: ${sizes.table.header.height};
        p {
          position: relative;
          padding-right: ${sizes.margin * 1.4}px;
          width: fit-content;
          line-height: normal;
          color: ${colors.blueTxt};
          &.clickable {
            cursor: pointer;
          }
        }
        svg {
          position: absolute;
          top: 0;
          right: 0;
          line-height: 18px;
          &.fa-sort-up {
            top: 4px;
          }
          &.fa-sort-down {
            top: -${sizes.margin * 0.2}px;
          }
        }
      }
    }
  }
  tbody {
    background-color: ${colors.greyHover};
    color: ${colors.blueTxt};
    tr {
      border-bottom: 1px solid ${colors.greySeparator};
      background-color: white;
      cursor: pointer;
      button {
        padding-bottom: 0;
      }
      &:hover {
        background-color: white;
        background-color: ${colors.greyHover};
      }
      &:not(.deleteRow) {
        td {
          height: ${sizes.table.row.height};
        }
      }
    }
    td {
      p {
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 16px;
      }
    }
  }
  span.link-icon {
    svg {
      color: ${colors.blueTxt};
    }
  }
  @media (min-width: ${sizes.tablet}) {
    width: 100%;
    overflow-x: auto;
  }
`;

export default Table;
