import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroImg = styled(motion.img)`
  width: 100%;
  height: 90vh;
  max-height: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Content = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled(motion.div)`
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

export const HeroBtn = styled(motion.button)`
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

export const BannerImg = styled(motion.img)`
  width: 100%;
`;
