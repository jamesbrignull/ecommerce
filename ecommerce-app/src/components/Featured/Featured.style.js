import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const FeatContainer = styled(motion.div)`
  border-top: 1px solid black;
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 1rem;
  }

  p {
    padding: 1rem;
  }

  button {
    margin: 1rem;
  }
`;

export const ProductContainer = styled(motion.div)`
  margin: 1rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;
