import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled(motion.div)`
  min-height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 1.5rem;
`;

export const LogoContainer = styled(motion.div)`
  font-family: "Julius Sans One", sans-serif;
`;

export const OptionsContainer = styled(motion.div)`
  font-family: "Julius Sans One", sans-serif;
  width: 40vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
