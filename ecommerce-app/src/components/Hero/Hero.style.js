import styled from "styled-components";

export const HeroImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: 90vh;
  max-height: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Content = styled.div`
  min-height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const HeroText = styled.div`
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 2rem;
  border: 3px solid white;

  h1 {
    font-family: "Julius Sans One", sans-serif;
    padding-bottom: 1rem;
  }
`;

export const HeroBtn = styled.button`
  margin-top: 2rem;
  width: 60%;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  border: 3px solid white;

  &:hover {
    background-color: rgba(65, 65, 65, 0.75);
    /* color: black; */
  }
`;

export const BannerImg = styled.img`
  width: 100%;
`;
