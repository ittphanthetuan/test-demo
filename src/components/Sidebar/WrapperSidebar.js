import styled from 'styled-components';

const WrapperSidebar = styled.div`
  .list-group-item {
    &.child-item {
      padding-left: 30px;

      &:before {
        content: '->';
        padding-right: 5px;
      }
    }
  }
`;

export default WrapperSidebar;
