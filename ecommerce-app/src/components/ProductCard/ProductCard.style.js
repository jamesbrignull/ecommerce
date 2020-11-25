import styled from "styled-components/macro";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.75rem;

  h3 {
    font-family: "Julius Sans One", sans-serif;
  }

  h4 {
    padding: 0.5rem;
  }

  img {
    object-fit: cover;
  }
`;

export const InfoConainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
