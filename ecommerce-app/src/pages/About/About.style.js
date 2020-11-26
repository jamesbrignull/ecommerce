import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;

  h1 {
    margin: 2rem;
  }

  img {
    height: 400px;
    width: 600px;
  }
  p {
    width: 50%;
    align-content: center;
    padding: 1rem;
  }
`;
