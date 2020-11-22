import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const ShopInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0rem;
  border-bottom: 1px solid black;

  h1 {
    font-family: "Julius Sans One", sans-serif;
    padding: 1rem;
  }

  p {
    padding: 0.5rem;
  }
`;