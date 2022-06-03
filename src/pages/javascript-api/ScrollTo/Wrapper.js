import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  max-height: 100vh;
  overflow-y: auto;

  .buttons {
    position: fixed;
    top: 0;
    left: 50%;
  }
`;

export default Wrapper;