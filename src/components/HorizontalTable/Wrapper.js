import styled from "styled-components";

const Wrapper = styled.div`
  .itemTable {
    display: inline-block;
    margin: 0 2%;
    width: 46%;
    position: relative;

    table {
      width: 100%;
      
      td, th {
        position: relative;
      }
    }
  }
  .table {
    max-width: 500px;
    max-height: 100px;
    overflow-y: auto;
    overflow-y: auto;
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-track:horizontal {
      margin-left: 72px;
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
      position: relative; // note

      td { // note
        border-color: black;
        border-width: 0 0 1px 1px;
        border-style: solid;
        padding: 0;
        z-index: 0;
      }

      td:last-child { // note
        border-color: black;
        border-width: 0 1px 1px 1px;
        border-style: solid;
      }

      td:first-child {
        background: $red;
        position: sticky;
        left: 0;
        z-index: 99;
      }
    }

    thead {
      th { // note
        border-color: black;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        white-space: nowrap;
        position: sticky;
        top: 0;
        z-index: 100;
        
        background-color: white;
        &:last-child { // note
          border-width: 1px;
        }
      }
    }
  }
`;

export default Wrapper;