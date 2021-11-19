import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    height: 100vh;

    position: sticky;
    top: 0;

    margin-top: -100vh;
`;