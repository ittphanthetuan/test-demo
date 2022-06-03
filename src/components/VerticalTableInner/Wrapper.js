import styled from "styled-components";

const Wrapper = styled.div`
  .table {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    display: inline-block;
    &::-webkit-scrollbar-track:vertical {
      // margin-top: 20px;
    }
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px
    }
    &::-webkit-scrollbar-track {
        background: red;
    }
    &::-webkit-scrollbar-thumb {
        background: blue;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: yellow;
    }

    table {
      border-collapse: separate; // note
      border-spacing: 0; // note

      td { // note
        border-color: black;
        border-width: 0 0 1px 1px;
        border-style: solid;
        padding: 0;
        z-index: 0;
        position: relative;
      }
      td:first-child {
        position: sticky;
      }

      td:last-child { // note
        border-color: black;
        border-width: 0 1px 1px 1px;
        border-style: solid;
      }

    }

    thead {
      th { // note
        border-color: black;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        position: sticky;
        top: 0;
        z-index: 100;
        background-color: yellow;
        &:last-child { // note
          border-width: 1px;
        }
      }
    }
  }
`;

export default Wrapper;