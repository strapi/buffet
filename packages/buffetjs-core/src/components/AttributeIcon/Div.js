import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20px;
  width: 35px;

  > svg {
    align-self: center;
  }

  background-color: ${({ type }) => {
    switch (type) {
      case 'boolean':
        return '#69ba05';
      case 'date':
      case 'datetime':
      case 'time':
      case 'timestamp':
        return '#1c8ee2';
      case 'component':
        return '#666666';
      case 'contentType':
        return '#ff6458';
      case 'dynamiczone':
        return '#333333';
      case 'email':
        return '#ff6400';
      case 'enumeration':
      case 'enum':
        return '#f8b295';
      case 'json':
      case 'JSON':
        return '#3C8C98';
      case 'media':
      case 'file':
      case 'files':
        return '#b981d5';
      case 'number':
        return '#e8442f';
      case 'password':
        return '#ff9900';
      case 'string':
      case 'text':
        return '#ffb500';
      case 'relation':
        return '#1c5de7';
      case 'richtext':
        return '#ff9200';
      case 'singleType':
        return '#F4A7B4';
      case 'uid':
        return '#c3814f';
      default:
        return '';
    }
  }};
  border-radius: 2px;
`;

export default Div;
