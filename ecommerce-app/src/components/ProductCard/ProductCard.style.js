import styled from "styled-components";

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
